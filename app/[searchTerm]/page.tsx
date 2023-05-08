type Props = {
    // params are always strings
    params: {
        searchTerm: string;
    }
};
export default function Page({params: {searchTerm}}: Props) {
    return (
        <div>${1:first}</div>
    );
};
