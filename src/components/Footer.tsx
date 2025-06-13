// Footer.tsx
// Hiển thị thông tin bản quyền và liên hệ
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10 border-t text-sm text-gray-500">
      <div className="container mx-auto">
        © {new Date().getFullYear()} Sneaker Forum. All rights reserved.
      </div>
    </footer>
  );
}
