# 在庫管理システム (Inventory Management System)

## 1. 導入セクション（Introduction）

学習用にプロジェクトとして開発している、FastAPI と React を使った在庫管理アプリケーションです。

### アプリ説明　(Description)


### プロジェクトの経緯

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

### 環境・動作要件　(Environment & Compatibility)

教材とは異なり各バージョンの最新バージョンを使用しました。

* **開発OS**: Windows 11 (via WSL2 / Ubuntu 24.04)
* **Python**: 3.12.3
* **主要なライブラリ**:
    * `fastapi==0.128.0`
    * `pydantic==2.12.12`
    * `uvicorn==0.40.0`
* *詳しい内容は `requirements.txt`から確認できます。*

### コマンド　(Step-by-step Guide)

#### 1. Backend

1. ターミナルを開いてバックエンドディレクトリに移動
2. 仮想環境の構築と実行
3. 依存関係をインストール
4. サーバーの起動

```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app:app --reload
```

#### 2. Frontend

1. ターミナルを開いてフロントエンドディレクトリに移動
2.  NPMパッケージをインストール
3. サーバーの起動

```bash
cd front_end
npm install
npm run dev
```

## 3.　開発・運用 (Development/Management)

### ディレクトリ構成 (Project Structure)

```text
inventory-app
├── README.md
├── backend/
│   ├── .env.example            # Sample environment
variables
│   ├── app.py
│   ├── models.py               # Database models
│   ├── requirements.txt
├── dev_log.md                  # Development diary
└── front_end/
    ├── index.html
    ├── package.json
    ├── src/                    # React component
    └── vite.config.js          # VIte configuration
```
