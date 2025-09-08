'use client';

import { useEffect, useState } from 'react';

export default function DocsPage() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/whitepaper.md')
      .then((res) => res.text())
      .then(setContent);
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold mb-6">Whitepaper</h2>
      <div className="whitespace-pre-wrap text-indigo-100/80">{content}</div>
    </div>
  );
}
