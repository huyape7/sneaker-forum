// page.tsx
// Trang chi tiết bài viết
import CommentList from '../../../components/CommentList';
import Form from '../../../components/Form';

// Dữ liệu mẫu bài viết và bình luận
const post = {
  id: '1',
  title: 'Giới thiệu về Air Jordan 1',
  author: 'admin',
  createdAt: '2025-06-13',
  content: 'Air Jordan 1 là một trong những đôi giày mang tính biểu tượng nhất trong lịch sử sneakers. Được ra mắt lần đầu năm 1985, đôi giày này đã trở thành biểu tượng văn hóa và thời trang.'
};

const comments = [
  { id: 'c1', author: 'user1', content: 'Bài viết rất hay!', createdAt: '2025-06-13 10:00' },
  { id: 'c2', author: 'user2', content: 'Mình cũng rất thích AJ1.', createdAt: '2025-06-13 11:00' }
];

export default function PostDetailPage() {
  const handleComment = (form: FormData) => {
    // TODO: Gửi bình luận lên API
    alert('Đã gửi bình luận (demo)');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <div className="text-gray-500 text-sm mb-4">by {post.author} • {post.createdAt}</div>
      <div className="mb-6 text-gray-800 whitespace-pre-line">{post.content}</div>
      <h2 className="text-lg font-semibold mb-2">Bình luận</h2>
      <CommentList comments={comments} />
      <div className="mt-4">
        <Form onSubmitAction={handleComment} submitLabel="Gửi bình luận">
          <textarea
            name="content"
            placeholder="Nhập bình luận..."
            className="w-full border rounded px-3 py-2 min-h-[80px]"
            required
          />
        </Form>
      </div>
    </div>
  );
}
