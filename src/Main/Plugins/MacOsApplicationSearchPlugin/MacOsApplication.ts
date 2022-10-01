import { basename, extname } from "path";
import { SearchResultItem } from "../../../Common/SearchResult/SearchResultItem";
import { SearchResultItemIconType } from "../../../Common/SearchResult/SearchResultItemIconType";
import { Searchable } from "../../Core/Searchable";
import { FilePathExecutor } from "../../Executors/FilePathExecutor";
import { FilePathLocationOpener } from "../../LocationOpeners/FilePathLocationOpener";

export class MacOsApplication implements Searchable {
    public constructor(private readonly filePath: string, private readonly iconFilePath: string) {}

    public toSearchResultItem(): SearchResultItem {
        return {
            description: this.filePath,
            executionArgument: this.filePath,
            executorId: FilePathExecutor.executorId,
            icon: {
                icon: this.iconFilePath,
                type: SearchResultItemIconType.FilePath,
            },
            locationOpenerId: FilePathLocationOpener.locationOpenerId,
            name: basename(this.filePath, extname(this.filePath)),
            openLocationArgument: this.filePath,
        };
    }
}
