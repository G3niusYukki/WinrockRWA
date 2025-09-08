

# WinrockRWA 项目 - 真实世界资产代币化

## 📌 项目简介

RWA 项目旨在通过区块链技术将 **真实世界资产（Real World Assets, RWA）** 上链，并实现商品和美股的代币化。
该项目的目标是让传统金融资产能够以链上代币的形式进行交易、转移和结算，从而提升流动性与透明度。

目前支持的资产类型包括：

* 🛢️ 大宗商品（如原油、黄金、农产品）
* 📈 美股代币化（例如 Apple、Tesla、Amazon 等股票的链上映射）

---

## 🚀 功能特性

* **代币化发行**：通过智能合约，将真实资产映射为链上代币。
* **跨链支持**：兼容多条区块链，方便资产在不同生态之间流转。
* **实时价格同步**：通过预言机（Oracle）获取实时市场数据，保证代币价格与真实资产挂钩。
* **合规性**：设计时考虑到 KYC/AML 要求，确保项目符合监管标准。

---

## 🛠️ 技术栈

* **智能合约**：Solidity / Vyper
* **区块链网络**：Ethereum, BNB Chain, Layer2 (Arbitrum/Optimism)
* **预言机**：Chainlink / Pyth
* **后端**：Node.js / Python FastAPI
* **数据库**：PostgreSQL / Redis
* **前端**：Next.js + TailwindCSS

---

## 📦 安装与使用

### 1. 克隆仓库

```bash
git clone git@github.com:your-username/rwa-project.git
cd rwa-project
```

### 2. 安装依赖

```bash
npm install   # 或 yarn install
```

### 3. 配置环境变量

在 `.env` 文件中添加：

```env
RPC_URL=https://your-rpc-endpoint
PRIVATE_KEY=your-wallet-private-key
ORACLE_API_KEY=your-oracle-api-key
COINMARKETCAP_API_KEY=your-coinmarketcap-api-key
```

### 4. 部署合约

```bash
npx hardhat run scripts/deploy.js --network mainnet
```

---

## 📖 使用示例

* **发行代币化资产**

```bash
npx hardhat run scripts/mintCommodityToken.js
```

* **查询美股代币价格**

```bash
curl http://localhost:3000/api/price/AAPL
```

---

## 🔮 未来规划

* 引入更多资产类别（房地产、债券等）
* 开发二级市场 DEX 模块
* 与合规机构合作，推动合法化进程
* 支持跨境结算与稳定币支付

---

## 📜 许可证

本项目采用 **MIT License**，详情见 [LICENSE](./LICENSE)。

