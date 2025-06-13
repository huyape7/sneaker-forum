// CommentList.tsx
// Hiển thị danh sách bình luận
import CommentItem, { CommentItemProps } from './CommentItem';

interface CommentListProps {
  comments: CommentItemProps[];
}

export default function CommentList({ comments }: CommentListProps) {
  if (!comments.length) return <div className="text-center text-gray-400 py-4">Chưa có bình luận nào.</div>;
  return (
    <div className="space-y-2">
      {comments.map(comment => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </div>
  );
}
