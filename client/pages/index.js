import Card from '../app/components/Cards/Card'
import Layout from '../app/layout/Layout'

function Home({posts}) {
  return (
    <div>
      <Layout title="Home page">
        {posts.map( post => <Card name={post.title} description={post.price} id={post._id}/>)} 
      </Layout>
    </div>
  )
}

export const getServerSideProps = async () => {
  const date = await fetch('http://localhost:4200/products');
  const posts = await date.json();


  return {
    props: {posts},
  }
}

export default Home;
