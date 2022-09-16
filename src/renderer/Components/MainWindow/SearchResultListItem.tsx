import { Text } from "@fluentui/react-components";
import { FC, useEffect, useRef } from "react";
import { SearchResultItem } from "../../../common/SearchResult/SearchResultItem";
import { ColorThemeName, getTheme } from "../../ColorThemes";
import { SearchResultListItemIcon } from "./SearchResultListItemIcon";

interface Props {
    searchResultItem: SearchResultItem;
    selected: boolean;
    colorThemeName: ColorThemeName;
}

export const SearchResultListItem: FC<Props> = ({ searchResultItem, selected, colorThemeName }) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const colorTheme = getTheme(colorThemeName);

    const scrollIntoViewIfSelected = () => {
        if (selected) {
            elementRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => scrollIntoViewIfSelected(), [selected]);

    return (
        <div
            ref={elementRef}
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: 8,
                boxSizing: "border-box",
                background: selected ? colorTheme.colorBrandBackgroundStatic : undefined,
                color: selected ? colorTheme.colorBrandBackgroundInverted : undefined,
            }}
        >
            <div>
                <SearchResultListItemIcon icon={searchResultItem.icon} />
            </div>
            <div style={{ paddingLeft: 8, paddingRight: 8 }}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Text size={400} weight="semibold">
                        {searchResultItem.name}
                    </Text>
                    <Text size={200} weight="regular" style={{ opacity: 0.75 }}>
                        {searchResultItem.executionArgument}
                    </Text>
                </div>
            </div>
        </div>
    );
};
