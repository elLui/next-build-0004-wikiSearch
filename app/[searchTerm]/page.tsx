import getWikiResults from "@/lib/getWikiResults";

type Props = {
    // params are always strings
    params: {
        searchTerm: string;
    }
};

export async function generateMetadata({params: {searchTerm}}: Props){
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);

    const data = await wikiData;

    // %20 indicates a space in url
    const displayTerm = searchTerm.replaceAll("%20", " ");

    if (!data?.query?.pages) {
        return {
            title: `${displayTerm} not found`,
            description: `${displayTerm} not found`,
        }
    } else {
        return {
            title: displayTerm,
            description: `search results for == ${displayTerm} found`,
        }
    }
}



export default async function SearchResults({params: {searchTerm}}: Props) {

    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);

    const data = await wikiData;

    const results: Result[] | undefined = data?.query?.pages;


    const content = (
        <main className="bg-blue-500 mx-auto max-w-lg py-1 min-h-screen">

            {results
            ? Object.values(results).map(result => {
                return <p>{JSON.stringify(result)}</p>
                })
                :
                <>
                    <h2 className="p-2 text-xl">{`${searchTerm}`} not found </h2>
                </>
            }




        </main>
    )

    return (
        content
    );
};
