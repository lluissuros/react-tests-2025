import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

function PostItem_old({ post }: { post: Post }) {
  return (
    <li key={post.id}>
      {post.title} - {post.body}
    </li>
  );
}

function PostItem({ post }: { post: Post }) {
  return (
    <>
      {post.title} - {post.body}
    </>
  );
}

export default function AsyncCodeExample() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      };
      fetchData();
    } catch (error) {
      console.error(error);
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Async Code Example</h1>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
