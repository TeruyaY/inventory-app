# 在庫管理システム (Inventory Management System)

## 1. 導入セクション（Introduction）

学習用にプロジェクトとして開発している、FastAPI と React を使った在庫管理アプリケーションです。

This web application is full-stack inventory management solution built with FastAPI and React. This project was developed as a learning exercise. 

### 説明　(Description)

This application allows users to add, delete, edit, and read information about products within the inventory. Each product is 

## 2. セットアップと実行方法 (Setup & Usage)

### 技術スタック (Tech Stack)
#### Backend
- **Framework**: FastAPI
- **ORM**: Tortoise-ORM
- **Database**: SQLite
- **Security**: python-dotenv, CORS Middleware

#### Frontend
- **Framework**: React (Vite)
- **Styling**: Bootstrap 4.6, React-Bootstrap
- **Routing**: React Router Dom

## コマンド　(Step-by-step Guide)
### 1. Backend
1. ターミナルを開いてバックエンドディレクトリに移動
2. 仮想環境の構築と実行
3. 依存関係をインストール
4. サーバーの起動

1. Open terminal and navigate to the backend directory
2. Create and activate virtual environment
3. Install dependencies
4. Start server

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app:app --reload
```
### 2. Frontend
1. ターミナルを開いてフロントエンドディレクトリに移動
2.  NPMパッケージをインストール
3. サーバーの起動

1. Open terminal and navigate to the frontend directory
2. Install npm packages
3. Start server

```bash
cd front_end
npm install
npm run dev
```

## 開発・運用 (Development/Management)

### ディレクトリ構成 (Project Structure)

inventory-app
├── README.md
├── backend/
│   ├── .env.example            # Sample environment variables
│   ├── app.py
│   ├── models.py               # Database models
│   ├── requirements.txt
├── dev_log.md                  # Development diary
└── front_end/
    ├── index.html
    ├── package.json
    ├── src/                    # React components
    └── vite.config.js          # VIte configuration

