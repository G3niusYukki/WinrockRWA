"use client";

import { createContext, useContext, useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  mintNFT: boolean;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "mintNFT">) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  updateMintNFT: (id: number, value: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: Omit<CartItem, "mintNFT">) =>
    setItems((prev) => [...prev, { ...item, mintNFT: false }]);
  const removeItem = (id: number) =>
    setItems((prev) => prev.filter((item) => item.id !== id));
  const clearCart = () => setItems([]);
  const updateMintNFT = (id: number, value: boolean) =>
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

