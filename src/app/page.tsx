// Thêm một dòng comment để kiểm tra thay đổi
// Đây là thay đổi nhỏ để kiểm tra nhánh hiện tại

import PostList from "../components/PostList";

// Dữ liệu mẫu cho bài viết
const posts = [
  {
    id: "1",
    title: "Giới thiệu về Air Jordan 1",
    author: "admin",
    createdAt: "2025-06-13",
    excerpt:
      "Air Jordan 1 là một trong những đôi giày mang tính biểu tượng nhất trong lịch sử sneakers...",
  },
  {
    id: "2",
    title: "Câu chuyện về Yeezy Boost 350",
    author: "sneakerhead",
    createdAt: "2025-06-12",
    excerpt:
      "Yeezy Boost 350 đã thay đổi thị trường giày thể thao như thế nào? Hãy cùng tìm hiểu...",
  },
];

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-indigo-600">
          Chào mừng đến với Sneaker Forum
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Nơi chia sẻ kiến thức và câu chuyện về những đôi giày yêu thích của bạn.
        </p>
        <h2 className="text-2xl font-semibold mb-6">Bài viết mới nhất</h2>
        <PostList posts={posts} />
      </div>
    </div>
  );
}
