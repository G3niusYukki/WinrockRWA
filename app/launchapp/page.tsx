"use client";

import React, { useState } from "react";

interface Product {
  name: string;
  sku: string;
  price: string;
  address: string;
  operator: string;
  status: "active" | "inactive";
  image: string;
  description: string;
}

const LaunchAppPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [operator, setOperator] = useState("");
  const [status, setStatus] = useState<"active" | "inactive">("active");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");
  const [operatorFilter, setOperatorFilter] = useState("all");

  const addProduct = () => {
    if (!name || !sku || !price || !address || !operator || !image || !description) return;
    setProducts([
      ...products,
      { name, sku, price, address, operator, status, image, description },
    ]);
    setName("");
    setSku("");
    setPrice("");
    setAddress("");
    setOperator("");
    setStatus("active");
    setImage("");
    setDescription("");
    setShowForm(false);
  };

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name.includes(search) || p.sku.includes(search);
    const matchStatus = statusFilter === "all" || p.status === statusFilter;
    const matchOperator = operatorFilter === "all" || p.operator === operatorFilter;
    return matchSearch && matchStatus && matchOperator;
  });

  const operatorOptions = Array.from(new Set(products.map((p) => p.operator)));

  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">Launch App</h1>

      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="px-4 py-2 mb-6 rounded bg-indigo-600 hover:bg-indigo-500 transition-colors"
      >
        上架商品
      </button>

      {showForm && (
        <div className="w-full max-w-md mb-8 p-6 bg-white/10 rounded-lg backdrop-blur">
          <div className="mb-4">
            <label className="block text-sm mb-1">商品名称</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/20 focus:outline-none"
              placeholder="请输入商品名称"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">SKU</label>
            <input
              type="text"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/20 focus:outline-none"
              placeholder="请输入SKU"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">价格</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/20 focus:outline-none"
              placeholder="请输入价格"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">地址</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/20 focus:outline-none"
              placeholder="请输入地址"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">运营商</label>
            <input
              type="text"
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/20 focus:outline-none"
              placeholder="请输入运营商"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">状态</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as "active" | "inactive")}
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/20 focus:outline-none"
            >
              <option value="active">上架</option>
              <option value="inactive">下架</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">商品图片 URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/20 focus:outline-none"
              placeholder="请输入图片链接"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1">商品描述</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/20 focus:outline-none"
              placeholder="请输入商品描述"
            />
          </div>
          <button
            onClick={addProduct}
            className="w-full px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500 transition-colors"
          >
            提交
          </button>
        </div>
      )}

      <div className="w-full max-w-md mb-6 flex flex-col sm:flex-row gap-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="搜索名称或SKU"
          className="flex-1 px-3 py-2 rounded-md bg-white/5 border border-white/20 focus:outline-none"
        />
        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(
              e.target.value as "all" | "active" | "inactive"
            )
          }
          className="px-3 py-2 rounded-md bg-white/5 border border-white/20 focus:outline-none"
        >
          <option value="all">全部状态</option>
          <option value="active">上架</option>
          <option value="inactive">下架</option>
        </select>
        <select
          value={operatorFilter}
          onChange={(e) => setOperatorFilter(e.target.value)}
          className="px-3 py-2 rounded-md bg-white/5 border border-white/20 focus:outline-none"
        >
          <option value="all">全部运营商</option>
          {operatorOptions.map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full max-w-md grid gap-6">
        {filteredProducts.map((product, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg bg-white/10 backdrop-blur border border-white/10"
          >
            <img
              src={product.image}
              alt="商品图片"
              className="w-full h-48 object-cover mb-3 rounded"
            />
            <p className="font-semibold">名称: {product.name}</p>
            <p>SKU: {product.sku}</p>
            <p>价格: {product.price}</p>
            <p>地址: {product.address}</p>
            <p>运营商: {product.operator}</p>
            <p>状态: {product.status === "active" ? "上架" : "下架"}</p>
            <p className="text-sm text-gray-200 mt-1">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LaunchAppPage;
