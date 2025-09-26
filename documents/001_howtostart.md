## bunの概要

- [x] all-in-oneとは？
- [x] TypeScriptが直で実行できる？
- [x] 実行速度が速い？
- [x] bunをプロダクション（実務）利用するか？
  - [x] reactとの統合
  - [ ] nestjsなどフレームワーク統合
- [ ] MinIOとは？
- [x] c++とzigの違い（nodeとbunの構築言語）
  - https://qiita.com/Freezer/items/7d00cfbe70493f026e16

ハンズオンしたいところ
- [x] bun.serveでサーバーを立ち上げる
- [x] s3へのファイルアップロードと、localファイル作成のコード差分
- [-] Postgresへの接続


## all-in-oneとは？

https://bun.com/docs/api/s3
- postgresとかs3への接続が組み込みのAPIでできる

## Tips

- bunはyarnやnpmにも代替する
- bun.serveはデフォルトではホットロードされない
- bunxはnpxみたいな形でプロジェクト内のpackageを参照して実行ができる
- 環境変数は.envファイルを自動読み込み
- bun runの--hotオプションでホットロードされる
- reactプロジェクトはcreate-react-app的な感じに作られる


## 実験結果

- 重い計算処理は15-20倍程度bunの方が速そう
- ↑オーバーヘッドも5倍程度bunの方が速そう