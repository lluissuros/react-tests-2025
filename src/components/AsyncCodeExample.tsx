import { useEffect, useState } from 'react';
import { Item, ItemContent, ItemTitle, ItemDescription } from '@/components/ui/item';

interface Post {
  id: number;
  title: string;
  body: string;
}

function PostItem({ post }: { post: Post }) {
  return (
    <Item variant="outline">
      <ItemContent>
        <ItemTitle>{post.title}</ItemTitle>
        <ItemDescription>{post.body}</ItemDescription>
      </ItemContent>
    </Item>
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
    <div className="container mx-auto max-w-4xl p-4">
      <h1 className="mb-6 text-3xl font-bold">Async Code Example</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
