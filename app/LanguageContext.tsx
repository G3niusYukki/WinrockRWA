"use client";

import { createContext, useContext, ReactNode } from "react";

const translations = {
  en: {
    siteTitle: "Winrock RWA",
    navFeatures: "Features",
    navDocs: "Docs",
    navCommunity: "Community",
    navAdmin: "Admin",
    navAffiliate: "Affiliate",
    navCrypto: "Crypto Market",
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
    login: "Login",
    register: "Register",
    popularProducts: "Popular Products",
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
    share: "Share",
    invite: "Invite",
    cart: "Cart",
    addToCart: "Add to Cart",
    cartTitle: "Shopping Cart",
    emptyCart: "Your cart is empty.",
    checkout: "Checkout",
    mintOption: "Mint product NFT",
    continueShopping: "Continue shopping",
    remove: "Remove",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

interface LangContextProps {
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LangContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const t = (key: TranslationKey) => translations.en[key];
  return (
    <LanguageContext.Provider value={{ t }}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

