// PostItem.tsx
// Hiển thị một bài viết trong danh sách
import Link from 'next/link';

export interface PostItemProps {
  id: string;
  title: string;
  author: string;
  createdAt: string;
  excerpt: string;
}

export default function PostItem({ id, title, author, createdAt, excerpt }: PostItemProps) {
  return (
    <div className="bg-white rounded-lg shadow p-5 mb-4 hover:shadow-lg transition">
      <Link href={`/post/${id}`} className="block">
        <h2 className="text-lg font-semibold text-gray-900 mb-1">{title}</h2>
        <p className="text-gray-600 text-sm mb-2">by {author} • {createdAt}</p>
        <p className="text-gray-700 line-clamp-2">{excerpt}</p>
      </Link>
    </div>
  );
}
