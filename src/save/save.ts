import { Book, Chapter, attachmentClass, Status } from "../main";
import { fflateZip } from "../lib/zip";
import { enableCustomSaveOptions, enaleDebug } from "../setting";
import { log, logText } from "../log";
import { newWindow } from "../global";
import { defaultMainStyleText, defaultTocStyleText } from "./style";
import { section, chapter, index } from "./template";
export class saveBook {
  protected book: Book;
  private chapters: Chapter[];

  public mainStyleText: string;
  public tocStyleText: string;

  private savedZip: fflateZip;
  private savedTextArray: string[];
  private saveFileNameBase: string;

  private _sections: string[];

  public constructor(book: Book) {
    this.book = book;
    this.chapters = book.chapters;

    this.savedZip = new fflateZip();
    this._sections = [];

    this.savedTextArray = [];
    this.saveFileNameBase = `[${this.book.author}]${this.book.bookname}`;

    this.mainStyleText = defaultMainStyleText;
    this.tocStyleText = defaultTocStyleText;
  }

  public saveTxt() {
    const metaDateText = this.genMetaDateTxt();
    this.savedTextArray.push(metaDateText);

    log.debug("[save]对 chapters 排序");
    this.chapters.sort(this.chapterSort);

    let sections: string[] = [];
    for (const chapter of this.chapters) {
      const chapterName = this.getchapterName(chapter);
      if (chapter.sectionName && !sections.includes(chapter.sectionName)) {
        sections.push(chapter.sectionName);
        const sectionText = this.genSectionText(chapter.sectionName);
        this.savedTextArray.push(sectionText);
      }

      if (chapter.contentText) {
        const chapterText = this.genChapterText(
          chapterName,
          chapter.contentText
        );
        this.savedTextArray.push(chapterText);
      }
      if (!enaleDebug) {
        chapter.contentText = null;
      }
    }

    log.info("[save]保存TXT文件");
    // 设置换行符为 CRLF，兼容旧版本Windows。
    const savedText = this.savedTextArray.join("\n").replaceAll("\n", "\r\n");
    saveAs(
      new Blob([savedText], { type: "text/plain;charset=utf-8" }),
      `${this.saveFileNameBase}.txt`
    );
  }

  public saveLog() {
    this.savedZip.file(
      "debug.log",
      new Blob([logText], { type: "text/plain; charset=UTF-8" })
    );
  }

  public saveZip(runSaveChapters = false): Promise<void> {
    log.debug("[save]保存元数据文本");
    const metaDateText = this.genMetaDateTxt();
    this.savedZip.file(
      "info.txt",
      new Blob([metaDateText], { type: "text/plain;charset=utf-8" })
    );
    log.debug("[save]保存样式");
    this.savedZip.file(
      "style.css",
      new Blob([this.mainStyleText], { type: "text/css;charset=utf-8" })
    );

    if (this.book.additionalMetadate.cover) {
      log.debug("[save]保存封面");
      this.addImageToZip(this.book.additionalMetadate.cover, this.savedZip);
    }
    if (this.book.additionalMetadate.attachments) {
      log.debug("[save]保存书籍附件");
      for (const bookAttachment of this.book.additionalMetadate.attachments) {
        this.addImageToZip(bookAttachment, this.savedZip);
      }
    }

    if (runSaveChapters) {
      log.debug("[save]开始保存章节文件");
      this.saveChapters();
    }

    log.debug("[save]开始生成并保存卷文件");
    this.saveSections();

    log.debug("[save]开始生成并保存 index.html");
    this.saveToC();

    log.info("[save]开始保存ZIP文件");
    const self = this;
    self.saveLog();

    return new Promise((resolve, reject) => {
      const finalHandle = (blob: Blob) => {
        saveAs(blob, `${self.saveFileNameBase}.zip`);
        resolve();
      };
      const finalErrorHandle = (err: Error) => {
        log.error("saveZip: " + err);
        log.trace(err);
        reject(err);
      };

      this.savedZip.onFinal = finalHandle;
      this.savedZip.onFinalError = finalErrorHandle;
      this.savedZip.generateAsync((percent) => {
        const progress = (window as newWindow & typeof globalThis).progress;
        if (progress) {
          progress.zipPercent = percent;
        }
      });
    });
  }

  private saveToC() {
    log.debug("[save]对 chapters 排序");
    this.chapters.sort(this.chapterSort);

    const self = this;
    const sectionsObj = getSectionsObj();
    let hasSections: boolean;
    if (
      Object.keys(sectionsObj).length !== 1 ||
      Object.keys(sectionsObj)[0] !== "default114514"
    ) {
      hasSections = true;
    } else {
      hasSections = false;
    }
    modifyTocStyleText();

    const indexHtmlText = index.render({
      creationDate: Date.now(),
      bookname: self.book.bookname,
      tocStyleText: self.tocStyleText,
      author: self.book.author,
      cover: self.book.additionalMetadate.cover,
      introductionHTML: self.book.introductionHTML?.outerHTML,
      bookUrl: self.book.bookUrl,
      hasSections: hasSections,
      sectionsObj: sectionsObj,
      Status: Status,
    });
    this.savedZip.file(
      "index.html",
      new Blob([indexHtmlText.replaceAll("data-src-address", "src")], {
        type: "text/html; charset=UTF-8",
      })
    );

    function getSectionsObj() {
      interface sectionsObj {
        [sectionName: string]: Chapter[];
      }
      const _sectionsObj: sectionsObj = {};

      for (const chapter of self.chapters) {
        if (chapter.sectionName) {
          if (_sectionsObj[chapter.sectionName]) {
            _sectionsObj[chapter.sectionName].push(chapter);
          } else {
            _sectionsObj[chapter.sectionName] = [chapter];
          }
        } else {
          if (_sectionsObj["default114514"]) {
            _sectionsObj["default114514"].push(chapter);
          } else {
            _sectionsObj["default114514"] = [chapter];
            chapter.chapterName;
          }
        }
      }
      return _sectionsObj;
    }
    function modifyTocStyleText() {
      if (self.book.additionalMetadate.cover) {
        self.tocStyleText = `${self.tocStyleText}
  .info {
    display: grid;
    grid-template-columns: 30% 70%;
  }`;
      } else {
        self.tocStyleText = `${self.tocStyleText}
  .info {
    display: grid;
    grid-template-columns: 100%;
  }`;
      }
    }
  }

  private saveChapters() {
    for (const chapter of this.chapters) {
      this.addChapter(chapter);
    }
  }

  private saveSections() {
    log.debug("[save]对 chapters 排序");
    this.chapters.sort(this.chapterSort);

    for (const chapter of this.chapters) {
      const chapterNumberToSave = this.getChapterNumberToSave(chapter);
      const sectionHtmlFileName = `No${chapterNumberToSave}Section.html`;

      if (chapter.sectionName) {
        if (!this._sections.includes(chapter.sectionName)) {
          this._sections.push(chapter.sectionName);

          log.debug(`[save]保存卷HTML文件：${chapter.sectionName}`);
          const sectionHTMLBlob = this.genSectionHtmlFile(chapter);
          this.savedZip.file(sectionHtmlFileName, sectionHTMLBlob);
        }
      }
    }
  }

  private getChapterNumberToSave(chapter: Chapter) {
    return `${"0".repeat(
      this.chapters.length.toString().length -
        chapter.chapterNumber.toString().length
    )}${chapter.chapterNumber.toString()}`;
  }

  public addChapter(chapter: Chapter) {
    const chapterName = this.getchapterName(chapter);
    const chapterNumberToSave = this.getChapterNumberToSave(chapter);
    const chapterHtmlFileName = `No${chapterNumberToSave}Chapter.html`;

    if (chapter.contentHTML) {
      log.debug(`[save]保存章HTML文件：${chapterName}`);
      const chapterHTMLBlob = this.genChapterHtmlFile(chapter);
      chapter.status = Status.saved;
      if (!enaleDebug) {
        chapter.contentRaw = null;
        chapter.contentHTML = null;
      }
      this.savedZip.file(chapterHtmlFileName, chapterHTMLBlob);
      chapter.chapterHtmlFileName = chapterHtmlFileName;
    }

    if (chapter.contentImages && chapter.contentImages.length !== 0) {
      log.debug(`[save]保存章节附件：${chapterName}`);
      for (const attachment of chapter.contentImages) {
        this.addImageToZip(attachment, this.savedZip);
      }
      if (!enaleDebug) {
        chapter.contentImages = null;
      }
    }
  }

  public getchapterName(chapter: Chapter) {
    if (chapter.chapterName) {
      return chapter.chapterName;
    } else {
      return chapter.chapterNumber.toString();
    }
  }

  private genMetaDateTxt() {
    let metaDateText = `题名：${this.book.bookname}\n作者：${this.book.author}`;
    if (this.book.additionalMetadate.tags) {
      metaDateText += `\nTag列表：${this.book.additionalMetadate.tags.join(
        "、"
      )}`;
    }
    metaDateText += `\n原始网址：${this.book.bookUrl}`;
    if (this.book.additionalMetadate.cover) {
      metaDateText += `\n封面图片地址：${this.book.additionalMetadate.cover.url}`;
    }
    if (this.book.introduction) {
      metaDateText += `\n简介：${this.book.introduction}`;
    }
    metaDateText += `\n下载时间：${new Date().toISOString()}\n本文件由小说下载器生成，软件地址：https://github.com/yingziwu/novel-downloader\n\n`;
    return metaDateText;
  }

  private addImageToZip(attachment: attachmentClass, zip: fflateZip) {
    if (attachment.status === Status.finished && attachment.imageBlob) {
      log.debug(
        `[save]添加附件，文件名：${attachment.name}，对象`,
        attachment.imageBlob
      );
      zip.file(attachment.name, attachment.imageBlob);
      attachment.status = Status.saved;
      if (!enaleDebug) {
        attachment.imageBlob = null;
      }
    } else if (attachment.status === Status.saved) {
      log.debug(`[save]附件${attachment.name}已添加`);
    } else {
      log.warn(
        `[save]添加附件${attachment.name}失败，该附件未完成或内容为空。`
      );
      log.warn(attachment);
    }
  }

  public genSectionText(sectionName: string) {
    return (
      `${"=".repeat(20)}\n\n\n\n# ${sectionName}\n\n\n\n${"=".repeat(20)}` +
      "\n\n"
    );
  }

  public genChapterText(chapterName: string, contentText: string) {
    return `## ${chapterName}\n\n${contentText}\n\n`;
  }

  public genSectionHtmlFile(chapterObj: Chapter) {
    const htmlText = section.render({ sectionName: chapterObj.sectionName });
    return new Blob([htmlText.replaceAll("data-src-address", "src")], {
      type: "text/html; charset=UTF-8",
    });
  }

  public genChapterHtmlFile(chapterObj: Chapter) {
    const htmlText = chapter.render({
      chapterUrl: chapterObj.chapterUrl,
      chapterName: chapterObj.chapterName,
      outerHTML: chapterObj.contentHTML?.outerHTML,
    });
    return new Blob([htmlText.replaceAll("data-src-address", "src")], {
      type: "text/html; charset=UTF-8",
    });
  }

  public chapterSort(a: Chapter, b: Chapter) {
    if (a.chapterNumber > b.chapterNumber) {
      return 1;
    }
    if (a.chapterNumber === b.chapterNumber) {
      return 0;
    }
    if (a.chapterNumber < b.chapterNumber) {
      return -1;
    }
    return 0;
  }
}

export interface saveOptions {
  mainStyleText?: saveBook["mainStyleText"];
  tocStyleText?: saveBook["tocStyleText"];
  getchapterName?: saveBook["getchapterName"];
  genSectionText?: saveBook["genSectionText"];
  genChapterText?: saveBook["genChapterText"];
  genSectionHtmlFile?: saveBook["genSectionHtmlFile"];
  genChapterHtmlFile?: saveBook["genChapterHtmlFile"];
  chapterSort?: saveBook["chapterSort"];
}
export function saveOptionsValidate(data: any) {
  const keyNamesS: Array<keyof saveOptions> = ["mainStyleText", "tocStyleText"];
  const keyNamesF: Array<keyof saveOptions> = [
    "getchapterName",
    "genSectionText",
    "genChapterText",
    "genSectionHtmlFile",
    "genChapterHtmlFile",
    "chapterSort",
  ];

  function keyNametest(keyname: string) {
    const keyList = new Array().concat(keyNamesS).concat(keyNamesF);
    if (keyList.includes(keyname)) {
      return true;
    }
    return false;
  }
  function keyNamesStest(keyname: string) {
    //@ts-expect-error
    if (keyNamesS.includes(keyname)) {
      if (typeof data[keyname] === "string") {
        return true;
      }
    }
    return false;
  }
  function keyNamesFtest(keyname: string) {
    //@ts-expect-error
    if (keyNamesF.includes(keyname)) {
      if (typeof data[keyname] === "function") {
        return true;
      }
    }
    return false;
  }

  if (typeof data !== "object") {
    return false;
  }
  if (Object.keys(data).length === 0) {
    return false;
  }
  for (const keyname in data) {
    if (!keyNametest(keyname)) {
      return false;
    }
    if (!(keyNamesStest(keyname) || keyNamesFtest(keyname))) {
      return false;
    }
  }
  return true;
}

export function getSaveBookObj(book: Book, options: saveOptions) {
  const saveBookObj = new saveBook(book);

  // 自定义保存参数
  if (enableCustomSaveOptions && saveOptionsValidate(options)) {
    for (const option in options) {
      //@ts-expect-error
      saveBookObj[option] = options[option as keyof saveOptions];
    }
  }

  // 规则定义保存参数
  if (book.saveOptions !== undefined) {
    for (const option in book.saveOptions) {
      //@ts-expect-error
      saveBookObj[option] = book.saveOptions[option as keyof book.saveOptions];
    }
  }

  return saveBookObj;
}