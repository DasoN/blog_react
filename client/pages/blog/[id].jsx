import { InnerCard } from "../../app/components/Cards/InnerCard";
import Layout from "../../app/layout/Layout";

const SinglePagePost = ({posts}) => {
    return (
        <Layout>
          <InnerCard title={posts.title} text={posts.price}/>
        </Layout>
    );
}

export const getServerSideProps = async ({query}) => {
    const date = await fetch('http://localhost:4200/products/' + query.id);
    const posts = await date.json();
  
  
    return {
      props: {posts},
    }
  }

export default SinglePagePost;