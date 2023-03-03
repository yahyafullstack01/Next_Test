import CardsList from '../Components/photo';
import styles from "../styles/Home.module.css";
import Main from "../styles/Home.module.scss"


export default function Home({ posts, photos }) {
  return (
    <div className={Main.container}>

      <CardsList photos={photos} posts={posts} />

    </div>
  )

}


// This function fetches the data from the Api and sending it as props
export async function getServerSideProps() {
  const item_post = await fetch('https://jsonplaceholder.typicode.com/posts');
  const item_photo = await fetch('https://jsonplaceholder.typicode.com/photos');
  const photos = await item_post.json();
  const posts = await item_photo.json();

  return {
    props: { photos, posts },
  };
}
