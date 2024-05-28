import Link from 'next/link';
import styles from './BlogList.module.css';

export default function BlogList({ posts }) {
  if (!posts || posts.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <ul className={styles.list}>
      {posts.map(({ id, title, date, summary }) => (
        <li key={id} className={styles.listItem}>
          <Link href={`/posts/${id}`}>
            <h2>{title}</h2>
            <p>{summary}</p>
            <small>{date}</small>
          </Link>
        </li>
      ))}
    </ul>
  );
}
