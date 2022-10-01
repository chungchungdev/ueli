import { SearchResultItem } from "../../../Common/SearchResult/SearchResultItem";
import { SearchResultItemIconType } from "../../../Common/SearchResult/SearchResultItemIconType";
import { FilePathExecutor } from "../../Executors/FilePathExecutor";
import { FilePathLocationOpener } from "../../LocationOpeners/FilePathLocationOpener";
import { MacOsApplication } from "./MacOsApplication";

describe(MacOsApplication, () => {
    describe(MacOsApplication.prototype.toSearchResultItem, () => {
        it("should convert correctly to a search result item", () => {
            const macOsApplication = new MacOsApplication("/Application/Spotify.app", "/path/to/icon.png");

            expect(macOsApplication.toSearchResultItem()).toEqual(<SearchResultItem>{
                description: "/Application/Spotify.app",
                executionArgument: "/Application/Spotify.app",
                executorId: FilePathExecutor.executorId,
                icon: {
                    icon: "/path/to/icon.png",
                    type: SearchResultItemIconType.FilePath,
                },
                locationOpenerId: FilePathLocationOpener.locationOpenerId,
                name: "Spotify",
                openLocationArgument: "/Application/Spotify.app",
            });
        });
    });
});
