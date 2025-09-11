"use client";

import Link from "next/link";
import { useCart } from "../CartContext";

export default function CartButton() {
  const { items } = useCart();
  return (
    <Link
      href="/cart"
      className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 transition-colors text-sm"
    >
      Cart ({items.length})
    </Link>
  );
}
