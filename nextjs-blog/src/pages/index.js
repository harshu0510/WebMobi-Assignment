import { getSortedPostsData } from '../lib/posts';
import BlogList from '../components/BlogList';
import styles from '../pages/posts/page.module.css';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <section>
        <h2>Blog</h2>
        <BlogList posts={allPostsData} />
      </section>
    </div>
  );
}
