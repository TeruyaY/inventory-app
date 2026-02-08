# 開発日誌

## 1/28 (Day 0)
- WSL2上にプロジェクト環境を構築
- 'apt install' の権限エラーに遭遇したが、'sudo' で解決
- Python仮想環境の作成と軌道に成功
- Gitの初期化と'.gitignore' による環境分離が分かった

## 1/29 (Day 1)　- BackendとCRUD

###　学び
* RDB(関係データベース): 主キーと外部キーの役割
* read-only field(読み取り専用フィールド)
* データの主従関係を決めて循環参照を避けるべき
* Pydanticの使い分け:
    * `Supplier`: DB本体（Tortoise-ORMモデル）
    * `supplier_pydantic`: 出力用（ID等を含む）
    * `supplier_pydanticIn`: 入力用（検証用）

### CRUDについて
- Create(POST): 'await Supplier.create(...)'
- Read(GET): 'await Supplier.all()', 'await Supplier.get(id=...)'
- Update(PUT): 'obj.update_from_dict(..)', 'obj.save()'
- Delete: 'await obj.delete()'

### 環境変数
* .envファイル：キーと値のペアを保存するテキストファイルでGit管理しちゃだめ
* python-dotev：.envファイルを読み込みPythonの辞書形式や環境変数として扱う

### Gmailを使うための必須設定:
* MAIL_SERVER: "smtp.gmail.com"
* MAIL_PORT: 465 (SSL用)
* MAIL_SSL_TLS: True (安全な通信を強制)
* アプリパスワード: Googleアカウントの通常のパスワードではなく、2段階認証を有効にした上で発行する16桁の専用コード。

### CORS (Cross-Origin Resource Sharing)
* 同一生成元ポリシー：同じドメイン以外のプログラムからの命令は信じない
* サーバー(FastAPI)はlocalhost:8000
* フロントエンド(React)はlocalhost:3000
* allow_credentials - Cookieや認証情報
* allow_methods = ['*'] - GET, POST, PUT, DELETE全て許可

### Create React App vs Vite
* 拡張子：　.js or .jsx -> .jsx
* 軌道コマンド：　npm start -> npm run dev
* 環境変数：　process.env.REACT_APP_XXX -> import.meta.env.VITE_XXX
* HTMLの場所：　public/index.html -> index.html
* デフォルトポート：　3000 -> 5173


### まとめ
* バックエンドをある程度習得することができた
* フロント構築でネットワークエラー

### 明日の目標 (Day 2)
- [ ] db_urlを.envで管理
- [ ] フロント構築


## 1/30 (Day 2)　- Frontend開始

### フロントエンド構築
* react-router-do：URLに合わせて表示を切り替えるのに必要なライブラリ
* bootstrap：デザインパーツの詰め合わせセット (動画と同じ4.6.0)

## 2/3 (Day 3)　- Frontend途中

### 状態管理
* useState の役割: 画面に表示されるデータ（状態）を管理し、値が変わった時に 自動で画面を再描画 させるため。

### コンポーネント配置ルール
* 静的な部品：NavBarのようにURL関係なく表示する。Routesの外
* 動的な部品：その逆

ProductContext: データの倉庫。

ProductProvider: 倉庫の管理人（App.jsx を包んでいる）。

useContext: 各コンポーネントが倉庫からデータを取り出すための「専用の鍵」。

### useEffect
#### 概要
useEffectはコンポーネントのレンダリング以外の処理を行う。
例：外部APIと通信、タイマー処理

#### 基本構文
useEffect(() => {
  // 実行したい処理 (副作用)
  console.log("コンポーネントが画面に表示されました");

  // オプション: クリーンアップ関数 (コンポーネントが消える時に実行)
  return () => {
    console.log("コンポーネントが画面から消えます");
  };
}, [依存配列]);

#### 依存配列のパターン：
* [] = 最初の1回のみ
* [data]　= その変数が変わるたび
* なし = レンダリング毎に

## 2/8 (Day 4)
## デプロイ準備
* 環境変数の管理: .env を使い、ローカルと本番で設定を切り替える仕組み。
* セキュリティ意識: .gitignore で機密情報や不要なファイルを確実に隠す習慣。
* ディレクトリ構造の理解: モノレポ構成で Root Directory を指定して各サービスを動かす方法。
* 依存関係の整理: requirements.txt をクリーンに保ち、ビルドエラーを防ぐ技術。
###　課題
* データベースの永続化: SQLiteではなく、外部のPostgreSQLなどを使う設定（Render等で簡単に連携できます）。
* CORSの最終調整: 実際に発行されたドメイン同士で通信を通す実戦経験。