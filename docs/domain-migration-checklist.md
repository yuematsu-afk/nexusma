# 独自ドメイン移行前チェックリスト

対象ドメイン: `sasa-eru.com`  
移行元: `https://yuematsu-afk.github.io/nexusma/`  
移行先候補: `https://sasa-eru.com/`

## 結論

本命URLは `https://sasa-eru.com/` にする。
GitHub Pages の custom domain に `sasa-eru.com` を設定し、DNS側で GitHub Pages へ向ける。
`www.sasa-eru.com` も同時に設定し、片方へ自動リダイレクトされる構成にする。

## まだ実行しないこと

次の作業は、DNS管理画面へログインできる状態で実施する。

- GitHub Pages の Custom domain 設定
- DNSの A / AAAA / CNAME レコード変更
- リポジトリ直下への `CNAME` ファイル追加
- `robots.txt` / `sitemap.xml` / canonical の本番ドメイン化

理由:

- DNS切替前にURLだけ変えると、サイトマップやcanonicalが実URLとズレる
- DNS設定とGitHub Pages設定の順序を間違えると、一時的に表示できない時間が出る
- 既存の `sasa-eru.com` サイトがある場合、上書き・競合の確認が必要

## 事前確認

- [ ] `sasa-eru.com` のDNS管理画面にログインできる
- [ ] 現在の `sasa-eru.com` の利用状況を確認した
- [ ] メール運用に使っているDNSレコードを確認した
- [ ] MX / SPF / DKIM / DMARC レコードを消さない方針を確認した
- [ ] 既存サイトを置き換えるか、NexusM&Aをトップにするか決めた
- [ ] 切替作業を行う時間帯を決めた

## 推奨DNS構成

### Apex domain

`sasa-eru.com` を GitHub Pages に向ける。

DNSレコード:

```text
Type: A
Host/Name: @
Value: 185.199.108.153

Type: A
Host/Name: @
Value: 185.199.109.153

Type: A
Host/Name: @
Value: 185.199.110.153

Type: A
Host/Name: @
Value: 185.199.111.153
```

DNSプロバイダが対応していれば、IPv6用のAAAAも追加する。

```text
Type: AAAA
Host/Name: @
Value: 2606:50c0:8000::153

Type: AAAA
Host/Name: @
Value: 2606:50c0:8001::153

Type: AAAA
Host/Name: @
Value: 2606:50c0:8002::153

Type: AAAA
Host/Name: @
Value: 2606:50c0:8003::153
```

### www subdomain

```text
Type: CNAME
Host/Name: www
Value: yuematsu-afk.github.io
```

注意:

- `yuematsu-afk.github.io/nexusma` ではなく `yuematsu-afk.github.io` を指定する
- ワイルドカードDNS `*.sasa-eru.com` は使わない
- MXなどメール関連レコードは削除しない

## GitHub側の設定

GitHubリポジトリ:

```text
yuematsu-afk/nexusma
```

作業:

1. GitHubでリポジトリを開く
2. Settings
3. Pages
4. Custom domain に `sasa-eru.com` を入力
5. Save
6. DNS反映後、Enforce HTTPS を有効化

GitHub Pages が branch publishing の場合、Custom domain 保存時に `CNAME` ファイルが追加されることがある。
手動で追加する場合、リポジトリ直下に次のファイルを作る。

ファイル名:

```text
CNAME
```

内容:

```text
sasa-eru.com
```

## コード側で変更する項目

DNSとGitHub Pagesの設定が完了してから変更する。

### `app.jsx`

```js
const SITE_BASE_URL = "https://sasa-eru.com/";
```

### `index.html`

変更対象:

- canonical
- og:url
- og:image
- manifest 読み込みはそのままでよい

変更例:

```html
<link rel="canonical" href="https://sasa-eru.com/" />
<meta property="og:url" content="https://sasa-eru.com/" />
<meta property="og:image" content="https://sasa-eru.com/assets/generated/hero-advisory.webp" />
```

### `robots.txt`

```text
Sitemap: https://sasa-eru.com/sitemap.xml
```

### `sitemap.xml`

すべてのURLを `https://sasa-eru.com/` ベースへ変更する。

### `site.webmanifest`

```json
"start_url": "/"
```

## 移行直後の確認

- [ ] `https://sasa-eru.com/` が表示される
- [ ] `https://www.sasa-eru.com/` が表示またはリダイレクトされる
- [ ] `https://sasa-eru.com/sitemap.xml` が表示される
- [ ] `https://sasa-eru.com/robots.txt` が表示される
- [ ] `https://sasa-eru.com/favicon.svg` が表示される
- [ ] 問い合わせフォームからメールが届く
- [ ] 社長不在90日診断から問い合わせフォームへの引き継ぎが動く
- [ ] スマホでトップ、会社概要、問い合わせ、ガイドラインを確認した
- [ ] GitHub Pages の Enforce HTTPS が有効

## Search Console移行後

- [ ] `sasa-eru.com` をドメインプロパティとして追加
- [ ] DNS TXT レコードで所有権確認
- [ ] `https://sasa-eru.com/sitemap.xml` を送信
- [ ] 旧URL `https://yuematsu-afk.github.io/nexusma/` の Search Console も数週間確認
- [ ] インデックス登録、ページ検出、モバイル表示を確認

## 作業時にCodexへ渡す情報

DNS設定が終わったら、次のように依頼する。

```text
sasa-eru.com のDNS設定とGitHub Pages設定が完了しました。
NexusM&Aサイトを独自ドメイン用に切り替えてください。
本命URLは https://sasa-eru.com/ です。
```

Search ConsoleのTXTレコードが発行されたら、次のように記録する。

```text
Search ConsoleのDNS TXTレコード:
google-site-verification=xxxxxxxxxxxxxxxx
```

HTML認証ファイルを使う場合は、ファイル名と内容をそのまま渡す。

## 参考リンク

- GitHub Docs - Managing a custom domain for GitHub Pages: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- Google Search Console ヘルプ: https://support.google.com/webmasters/answer/9008080
