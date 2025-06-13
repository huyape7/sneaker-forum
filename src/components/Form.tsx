// Form.tsx
// Form nhập nội dung (dùng cho tạo bài viết, bình luận)
'use client';

import { ReactNode } from 'react';

interface FormProps {
  title?: string;
  onSubmitAction: (form: FormData) => void;
  children: ReactNode;
  submitLabel: string;
}

export default function Form({ title, onSubmitAction, children, submitLabel }: FormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitAction(new FormData(e.currentTarget));
  };

  return (
    <form
      className="bg-white rounded-lg shadow p-6 space-y-4"
      onSubmit={handleSubmit}
    >
      {title && <h2 className="text-lg font-bold mb-2">{title}</h2>}
      {children}
      <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
        {submitLabel}
      </button>
    </form>
  );
}
