
## bunの概要


- [x] all-in-oneとは？
- [x] TypeScriptが直で実行できる？
- [ ] 実行速度が速い？
- [ ] denoとbunの比較
- [ ] bunを実務利用する上での懸念
- [ ] MinIOとは？

ハンズオンしたいところ
- [x] bun.serveでサーバーを立ち上げる
- [ ] s3へのファイルアップロードと、localファイル作成のコード差分
- [-] Postgresへの接続


## all-in-oneとは？

https://bun.com/docs/api/s3
- postgresとかs3への接続が組み込みのAPIでできる

## Tips

- bunはyarnやnpmにも代替する
- bun.serveはデフォルトではホットロードされない
- bunxはnpxみたいな形でプロジェクト内のpackageを参照して実行ができる