// PostList.tsx
// Hiển thị danh sách các bài viết
import PostItem, { PostItemProps } from './PostItem';

interface PostListProps {
  posts: PostItemProps[];
}

export default function PostList({ posts }: PostListProps) {
  if (!posts.length) return <div className="text-center text-gray-500 py-10">Chưa có bài viết nào.</div>;
  return (
    <div>
      {posts.map(post => (
        <PostItem key={post.id} {...post} />
      ))}
    </div>
  );
}
