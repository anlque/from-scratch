export type ScrollSchema = Record<string, number> // <page adress, scroll position>

export interface ScrollSaveSchema {
    scroll: ScrollSchema
}
