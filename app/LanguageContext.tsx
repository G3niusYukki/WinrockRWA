"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Lang = "en" | "zh";

const translations = {
  en: {
    siteTitle: "Winrock RWA",
    navFeatures: "Features",
    navDocs: "Docs",
    navCommunity: "Community",
    navAdmin: "Admin",
    connectWallet: "Connect Wallet",
    connecting: "Connecting...",
    heroTitle: "Tokenize Real World Assets",
    heroDesc:
      "Build, issue, and trade tokenized assets with a modern blockchain interface.",
    launchApp: "Launch App",
    readDocs: "Read Docs",
    feature1Title: "On-chain Registry",
    feature1Desc: "Track asset ownership using immutable smart contracts.",
    feature2Title: "Compliance Ready",
    feature2Desc:
      "Integrated KYC/AML modules keep your platform aligned with regulations.",
    feature3Title: "Real-time Settlement",
    feature3Desc: "Experience instant settlement with blockchain finality.",
    checkPrice: "Check Crypto Price",
    placeholderSymbol: "e.g. BTC",
    query: "Query",
    currentPrice: "Current price:",
    rights: "All rights reserved.",
    adminTitle: "Admin Dashboard",
    launchAppHeading: "Launch App",
    listProduct: "List Product",
    price: "Price",
    enterPrice: "Enter price",
    productImageUrl: "Product Image URL",
    enterImageUrl: "Enter image URL",
    productDescription: "Product Description",
    enterDescription: "Enter product description",
    submit: "Submit",
    priceLabel: "Price:",
    distributionTitle: "Distribution Network",
    loading: "Loading...",
  },
  zh: {
    siteTitle: "Winrock RWA",
    navFeatures: "功能",
    navDocs: "文档",
    navCommunity: "社区",
    navAdmin: "后台",
    connectWallet: "连接钱包",
    connecting: "连接中...",
    heroTitle: "将现实世界资产代币化",
    heroDesc: "通过现代区块链界面构建、发行和交易代币化资产。",
    launchApp: "启动应用",
    readDocs: "阅读文档",
    feature1Title: "链上登记",
    feature1Desc: "使用不可篡改的智能合约跟踪资产所有权。",
    feature2Title: "合规准备",
    feature2Desc: "集成的KYC/AML模块使平台符合法规。",
    feature3Title: "实时结算",
    feature3Desc: "利用区块链终局性体验即时结算。",
    checkPrice: "查询加密货币价格",
    placeholderSymbol: "例如 BTC",
    query: "查询",
    currentPrice: "当前价格：",
    rights: "版权所有。",
    adminTitle: "后台管理",
    launchAppHeading: "启动应用",
    listProduct: "上架商品",
    price: "价格",
    enterPrice: "请输入价格",
    productImageUrl: "商品图片 URL",
    enterImageUrl: "请输入图片链接",
    productDescription: "商品描述",
    enterDescription: "请输入商品描述",
    submit: "提交",
    priceLabel: "价格:",
    distributionTitle: "分销网络",
    loading: "加载中...",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

interface LangContextProps {
  lang: Lang;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LangContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    // Keep the document language attribute in sync for language-specific styling
    document.documentElement.lang = lang;
  }, [lang]);
  const toggleLang = () => setLang((l) => (l === "en" ? "zh" : "en"));
  const t = (key: TranslationKey) => translations[lang][key];
  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

