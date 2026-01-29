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


### 明日の目標 (Day 2)
- [ ] db_urlを.envで管理