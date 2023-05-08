type Result = {
    pageid: string,
    title: string,
    extract: string,
    thumbnail?: {
        source: string,
        width: number,
        height: number,
    }
}



// these results could be undefined, so we need to add a ? to the end of the type
type SearchResult = {
    query?: {
        pages?: Result[],
    },
}