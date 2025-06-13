// CommentItem.tsx
// Hiển thị một bình luận
export interface CommentItemProps {
  id: string;
  author: string;
  content: string;
  createdAt: string;
}

export default function CommentItem({ author, content, createdAt }: CommentItemProps) {
  return (
    <div className="bg-gray-50 rounded p-3 mb-2">
      <div className="text-sm font-semibold text-gray-800">{author}</div>
      <div className="text-gray-700 mb-1">{content}</div>
      <div className="text-xs text-gray-400">{createdAt}</div>
    </div>
  );
}
