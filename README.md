# Inventory Management System (在庫管理システム)

大学のプロジェクトとして開発している、FastAPI と React を使った在庫管理アプリケーションです。

## 🚀 技術スタック (Tech Stack)

### Backend
- **Framework**: FastAPI
- **ORM**: Tortoise-ORM
- **Database**: SQLite
- **Security**: python-dotenv, CORS Middleware

### Frontend
- **Framework**: React (Vite)
- **Styling**: Bootstrap 4.6, React-Bootstrap
- **Routing**: React Router Dom

## 🛠️ セットアップと実行方法 (Setup & Usage)

### 1. Backend
```bash
cd backend
source venv/bin/activate
pip install -r requirements.txt
uvicorn app:app --reload
```
### 2. Frontend
```bash
cd front_end
npm install
npm run dev
```


