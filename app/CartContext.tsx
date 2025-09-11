"use client";

import { createContext, useContext, useState } from "react";

interface CartItem {
  id: string; // Unique cart item identifier
  productId: number;
  name: string;
  price: string;
  image: string;
  mintNFT: boolean;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: { id: number; name: string; price: string; image: string }) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  updateMintNFT: (id: string, value: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: { id: number; name: string; price: string; image: string }) =>
    setItems((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        productId: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        mintNFT: false,
      },
    ]);
  const removeItem = (id: string) =>
    setItems((prev) => prev.filter((item) => item.id !== id));
  const clearCart = () => setItems([]);
  const updateMintNFT = (id: string, value: boolean) =>
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, mintNFT: value } : item))
    );

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, updateMintNFT }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

