
import MasterLayout from '../components/cards/layouts/MasterLayout';
import PostCard from '../components/cards/posts/PostCard';
import TextCard from '../components/cards/texts/TextCard';
import DummyData from '../lib/DataSource';
import { Post } from '../lib/DTO';

export async function getServerSideProps() {
  //let imgPropsArray: ImageCardPropsArray = { products: productData.products };
  const dummyData = new DummyData();
  const posts = await dummyData.posts;
  return {
    props: { posts }
  };
}
interface IProps {
  posts: Post[];
}
function HomeInfo() {
  return (
    <TextCard key={123}
      header="Best selected products all over the world"
      body="Laborum tempor laboris consectetur veniam fugiat officia id mollit Lorem. Laboris nostrud ad irure fugiat sit adipisicing sint id. Quis proident excepteur non incididunt commodo."
    />
  );
}

export function PostCardArray(posts: Post[]): JSX.Element[] {
  if (posts === null || posts.length === 0) return [];
  return posts.map((post: Post) => (
    <PostCard key={post.id} {...post} />
  )
  );
}

function Home({ posts }: IProps) {
  let homeInfo = {
    header: "Best selected products all over the world",
    body: "Laborum tempor laboris consectetur veniam fugiat officia id mollit Lorem. Laboris nostrud ad irure fugiat sit adipisicing sint id. Quis proident excepteur non incididunt commodo."
  };
  return (
    <MasterLayout numLeftEles={1} rightPanelLayout="grid">{{ leftElements: [HomeInfo()], rightElements: PostCardArray(posts) }}</MasterLayout>
  );
}
export default Home;