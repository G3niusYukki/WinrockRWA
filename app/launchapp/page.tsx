"use client";

import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";

interface Product {
  price: string;
  image: string;
  description: string;
}

const LaunchAppPage = () => {
  const { t } = useLanguage();
  const [showForm, setShowForm] = useState(false);
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = () => {
    if (!price || !image || !description) return;
    setProducts([...products, { price, image, description }]);
    setPrice("");
    setImage("");
    setDescription("");
    setShowForm(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-4">{t("launchAppHeading")}</h1>

      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="px-4 py-2 mb-6 rounded bg-indigo-600 hover:bg-indigo-500 transition-colors"
      >
        {t("listProduct")}
      </button>

      {showForm && (
        <div className="w-full max-w-md mb-8 p-6 bg-white/10 rounded-lg backdrop-blur">
          <div className="mb-4">
            <label className="block text-sm mb-1">{t("price")}</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/20 focus:outline-none"
              placeholder={t("enterPrice")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">{t("productImageUrl")}</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/20 focus:outline-none"
              placeholder={t("enterImageUrl")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">{t("productDescription")}</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/20 focus:outline-none"
              placeholder={t("enterDescription")}
            />
          </div>
          <button
            onClick={addProduct}
            className="w-full px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500 transition-colors"
          >
            {t("submit")}
          </button>
        </div>
      )}

      <div className="w-full max-w-md grid gap-6">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg bg-white/10 backdrop-blur border border-white/10"
          >
            <img
              src={product.image}
              alt={t("productImageUrl")}
              className="w-full h-48 object-cover mb-3 rounded"
            />
            <p className="font-semibold mb-1">
              {t("priceLabel")} {product.price}
            </p>
            <p className="text-sm text-gray-200">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaunchAppPage;
