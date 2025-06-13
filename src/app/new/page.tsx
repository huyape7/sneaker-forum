// page.tsx
// Trang tạo bài viết mới
import Form from '../../components/Form';

export default function NewPostPage() {
  const handleSubmit = (form: FormData) => {
    // TODO: Gửi dữ liệu lên API
    alert('Đã gửi bài viết (demo)');
  };

  return (
    <div className="max-w-xl mx-auto">
      <Form title="Tạo bài viết mới" onSubmitAction={handleSubmit} submitLabel="Đăng bài">
        <input
          name="title"
          type="text"
          placeholder="Tiêu đề bài viết"
          className="w-full border rounded px-3 py-2 mb-2"
          required
        />
        <textarea
          name="content"
          placeholder="Nội dung bài viết"
          className="w-full border rounded px-3 py-2 min-h-[120px]"
          required
        />
      </Form>
    </div>
  );
}
