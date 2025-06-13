// Header.tsx
// Hiển thị logo, tên forum, menu điều hướng (Trang chủ, Đăng nhập/Đăng ký, Tạo bài viết)
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900">
          <span className="text-indigo-600">Sneaker Forum</span>
        </Link>
        <nav className="flex gap-4">
          <Link href="/" className="hover:text-indigo-600 transition">Trang chủ</Link>
          <Link href="/new" className="hover:text-indigo-600 transition">Tạo bài viết</Link>
          <Link href="/auth" className="hover:text-indigo-600 transition">Đăng nhập/Đăng ký</Link>
        </nav>
      </div>
    </header>
  );
}
