import { Book } from "../main";
import { BaseRuleClass, chapterParseObject } from "../rules";
export declare class linovel extends BaseRuleClass {
    constructor();
    bookParse(): Promise<Book>;
    chapterParse(chapterUrl: string, chapterName: string | null, isVIP: boolean, isPaid: boolean, charset: string, options: object): Promise<chapterParseObject>;
}