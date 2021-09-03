import { ruleClass } from "./rules";
import { Book, Chapter } from "./main";
import { saveOptions } from "./index_helper";
export declare namespace indexNameSpace {
    interface mainWindows extends unsafeWindow {
        rule: ruleClass;
        book: Book;
        save(book: Book, saveOptions: saveOptions): void;
        saveAs(obj: any): void;
        chapterFilter(chapter: Chapter): boolean;
        customFinishCallback(): void;
        saveOptions: saveOptions;
    }
    interface mainTabObject extends GM_tab_object {
        novel_downloader?: string;
    }
}
export declare function updateProgress(finishedChapterNumber: number, totalChapterNumber: number, zipPercent: number | null): void;
export declare function catchError(error: Error): void;