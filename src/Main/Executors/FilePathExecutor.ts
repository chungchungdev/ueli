import { SearchResultItem } from "../../Common/SearchResult/SearchResultItem";
import { Executor } from "./Executor";

export class FilePathExecutor extends Executor {
    public static readonly executorId = "FilePathExecutor";

    public constructor(private readonly openFilePath: (filePath: string) => Promise<void>) {
        super(FilePathExecutor.executorId);
    }

    public execute(searchResultItem: SearchResultItem): Promise<void> {
        return this.openFilePath(searchResultItem.executionArgument);
    }
}
