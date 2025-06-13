// AuthForm.tsx
// Form đăng nhập/đăng ký
'use client';
import { useState } from 'react';

interface AuthFormProps {
  onAuth: (data: { email: string; password: string }) => void;
  type?: 'login' | 'register';
}

export default function AuthForm({ onAuth, type = 'login' }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      className="bg-white rounded-lg shadow p-6 space-y-4 max-w-md mx-auto"
      onSubmit={e => {
        e.preventDefault();
        onAuth({ email, password });
      }}
    >
      <h2 className="text-lg font-bold mb-2 text-center">
        {type === 'login' ? 'Đăng nhập' : 'Đăng ký'}
      </h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full border rounded px-3 py-2"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        className="w-full border rounded px-3 py-2"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
        {type === 'login' ? 'Đăng nhập' : 'Đăng ký'}
      </button>
    </form>
  );
}
