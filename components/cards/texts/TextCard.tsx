import CollapsibleLayout from "../layouts/CollapsibleLayout";

type IProps = {
    header: string;
    body: string;
}
export default function TextCard({ header, body }: IProps) {
    return (
        <CollapsibleLayout title={header}>
            <>{body}</>
        </CollapsibleLayout>
    );
}