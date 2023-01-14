
import { GetServerSidePropsContext } from 'next';
import { ImageCard } from '../../components/cards/images/ImageCard';
import MasterLayout from '../../components/cards/layouts/MasterLayout';
import TextCard from '../../components/cards/texts/TextCard';
import DummyData from '../../lib/DataSource';
import { emptyPost, emptyProduct, Img, Post } from '../../lib/DTO';

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { id } = context.query;
    const paramType = typeof id;
    let postId = null;
    if (paramType == "string") {
        postId = id as string;
    } else if (paramType == "object") {
        postId = (id as Array<string>)[0];
    } else {
        return { props: { emptyPost } };
    }

    const dummyData = new DummyData();
    let post = emptyPost;
    post = await dummyData.getPost(postId, true);
    console.log(post);
    return {
        props: { post }
    };
}
interface IProps {
    post: Post;
}
function HomeInfo(post: Post) {
    return (
        <TextCard key={post.id}
            header={post.title}
            body={post.info}
        />
    );
}

export function ImageCardArray(imgs: Img[]): JSX.Element[] {
    if (imgs === null || imgs.length === 0) return [];
    return imgs.map((img: Img) => (
        <ImageCard key={img.id} {...img} />
    )
    );
}

function Home({ post }: IProps) {
    if (post.product === undefined) {
        post.product = emptyProduct;
    }
    if (post.product.imgs === undefined) {
        post.product.imgs = [];
    }
    return (
        <MasterLayout numLeftEles={1} rightPanelLayout="list">
            {{ leftElements: [HomeInfo(post)], rightElements: ImageCardArray(post.product?.imgs) }}
        </MasterLayout>
    );
}
export default Home;