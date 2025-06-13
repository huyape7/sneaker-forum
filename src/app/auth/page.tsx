// page.tsx
// Trang đăng nhập/đăng ký
'use client';
import AuthForm from '../../components/AuthForm';

export default function AuthPage() {
  const handleAuth = (data: { email: string; password: string }) => {
    // TODO: Gọi API đăng nhập/đăng ký
    alert('Đăng nhập/Đăng ký demo: ' + JSON.stringify(data));
  };

  return (
    <div className="max-w-md mx-auto">
      <AuthForm onAuth={handleAuth} />
    </div>
  );
}
