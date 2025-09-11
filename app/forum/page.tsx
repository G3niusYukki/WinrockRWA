"use client";

import { useState, useEffect, FormEvent } from "react";

interface Post {
  email: string;
  message: string;
}

export default function ForumPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const loadPosts = async () => {
    const res = await fetch("/api/forum");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const submitPost = async (e: FormEvent) => {
    e.preventDefault();
    await fetch("/api/forum", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    });
    setEmail("");
    setMessage("");
    loadPosts();
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl mb-4">Community Forum</h1>
      <form onSubmit={submitPost} className="mb-6 flex flex-col gap-2">
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
        />
        <textarea
          required
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Post
        </button>
      </form>
      <ul className="space-y-4">
        {posts.map((p, idx) => (
          <li key={idx} className="border p-2">
            <p className="text-sm text-gray-600">{p.email}</p>
            <p>{p.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
