"use client";

import Link from "next/link";
import { useCart } from "../CartContext";
import { useLanguage } from "../LanguageContext";

export default function CartPage() {
  const { items, removeItem, clearCart, updateMintNFT } = useCart();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-black to-slate-900 text-gray-100">
      <main className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-4">{t("cartTitle")}</h1>
        {items.length === 0 ? (
          <p>{t("emptyCart")}</p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-white/10 pb-2"
              >
                <span>{item.name}</span>
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={item.mintNFT}
                      onChange={(e) => updateMintNFT(item.id, e.target.checked)}
                    />
                    {t("mintOption")}
                  </label>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-sm text-red-400 hover:text-red-300"
                  >
                    {t("remove")}
                  </button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-end mt-4">
              <button
                onClick={() => {
                  const nftItems = items
                    .filter((i) => i.mintNFT)
                    .map((i) => i.name)
                    .join(", ");
                  alert(`${t("checkout")}: ${nftItems || "no NFT"}`);
                  clearCart();
                }}
                className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 transition-colors text-sm"
              >
                {t("checkout")}
              </button>
            </div>
          </div>
        )}
        <div className="mt-6">
          <Link
            href="/"
            className="text-indigo-400 hover:text-indigo-300 underline"
          >
            {t("continueShopping")}
          </Link>
        </div>
      </main>
    </div>
  );
}
