"use client";

import { createContext, useContext, useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  mintNFT: boolean;
  setMintNFT: (value: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [mintNFT, setMintNFT] = useState<boolean>(true);

  const addItem = (item: CartItem) => setItems((prev) => [...prev, item]);
  const removeItem = (id: number) =>
    setItems((prev) => prev.filter((item) => item.id !== id));
  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, mintNFT, setMintNFT }}
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

