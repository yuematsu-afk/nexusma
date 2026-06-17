# sasa-eru.com 切替当日ランブック

対象: NexusM&A を `https://sasa-eru.com/` で公開する  
現在のGitHub Pages URL: `https://yuematsu-afk.github.io/nexusma/`  
現在確認できたDNS状態: `sasa-eru.com` は `35.194.122.208` に向いている  
確認日: 2026-06-17

## 重要な前提

`sasa-eru.com` は現在、GitHub Pages ではないIPアドレスへ向いている。
DNSをGitHub Pagesへ変更すると、既存の `sasa-eru.com` サイトの表示先が NexusM&A に変わる。

そのため、次のどちらかを決めてから作業する。

- 既存の `sasa-eru.com` を NexusM&A に置き換える
- 既存サイトを残し、NexusM&A は別サブドメインで公開する

今回の方針は、ユーザー指定により `sasa-eru.com` を NexusM&A の本命URLにする。

## 作業全体の順序

1. GitHub Pages 側へ custom domain を設定する
2. DNS を GitHub Pages へ向ける
3. DNS反映を待つ
4. HTTPS を有効化する
5. サイト内URLを `https://sasa-eru.com/` に切り替える
6. Search Console に `sasa-eru.com` を登録する

## Step 1: GitHub Pages 側の設定

GitHubで次を開く。

```text
https://github.com/yuematsu-afk/nexusma/settings/pages
```

設定:

```text
Custom domain: sasa-eru.com
```

保存後、GitHubがリポジトリに `CNAME` ファイルを追加する場合がある。
追加されない場合、Codexで次のファイルを追加する。

```text
ファイル名: CNAME
内容: sasa-eru.com
```

注意:

- この設定だけではDNSは変わらない
- GitHub Pages側でドメイン利用予約をする意味がある
- DNS変更前後は一時的に警告や未検証表示になることがある

## Step 2: DNS レコードを変更

DNS管理画面で、`sasa-eru.com` の apex/root を GitHub Pages へ向ける。

現在のAレコード `35.194.122.208` は、切替時に削除または置換する。

### A レコード

```text
Type: A
Name/Host: @
Value: 185.199.108.153

Type: A
Name/Host: @
Value: 185.199.109.153

Type: A
Name/Host: @
Value: 185.199.110.153

Type: A
Name/Host: @
Value: 185.199.111.153
```

### AAAA レコード

DNS管理画面がIPv6に対応している場合は追加する。

```text
Type: AAAA
Name/Host: @
Value: 2606:50c0:8000::153

Type: AAAA
Name/Host: @
Value: 2606:50c0:8001::153

Type: AAAA
Name/Host: @
Value: 2606:50c0:8002::153

Type: AAAA
Name/Host: @
Value: 2606:50c0:8003::153
```

### www レコード

```text
Type: CNAME
Name/Host: www
Value: yuematsu-afk.github.io
```

注意:

- `yuematsu-afk.github.io/nexusma` ではなく `yuematsu-afk.github.io`
- MX / TXT / SPF / DKIM / DMARC は削除しない
- メール運用中ならメール関連レコードは触らない

## Step 3: DNS反映確認

PowerShellで確認する。

```powershell
Resolve-DnsName sasa-eru.com
Resolve-DnsName www.sasa-eru.com
```

期待値:

```text
sasa-eru.com -> 185.199.108.153 / 109.153 / 110.153 / 111.153
www.sasa-eru.com -> yuematsu-afk.github.io
```

DNS反映は数分から数時間かかることがある。

## Step 4: GitHub Pages の HTTPS を有効化

GitHub Pages の設定画面で確認する。

```text
Enforce HTTPS
```

チェックできるようになったら有効化する。
証明書発行中は少し待つ。

## Step 5: サイト内URLを本番ドメインに切り替え

DNSが反映し、`https://sasa-eru.com/` で表示できるようになってから実施する。

Codexへの依頼文:

```text
DNS反映とGitHub Pagesのcustom domain設定が完了しました。
サイト内URLを https://sasa-eru.com/ に切り替えてください。
```

変更対象:

- `app.jsx`
- `index.html`
- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- 必要に応じて `docs/`

## Step 6: 動作確認

- [ ] `https://sasa-eru.com/` が表示される
- [ ] `https://sasa-eru.com/#/company` が表示される
- [ ] `https://sasa-eru.com/#/contact` が表示される
- [ ] `https://sasa-eru.com/#/diagnosis` が表示される
- [ ] `https://sasa-eru.com/sitemap.xml` が表示される
- [ ] `https://sasa-eru.com/robots.txt` が表示される
- [ ] `https://sasa-eru.com/favicon.svg` が表示される
- [ ] 問い合わせフォームからメールが届く
- [ ] 診断結果から問い合わせフォームへの引き継ぎが動く
- [ ] スマホでヘッダー、CTA、会社概要表、問い合わせフォームを確認した

## Step 7: Search Console

Search Console では `sasa-eru.com` をドメインプロパティとして登録する。

DNS TXT レコードで所有権確認する。

サイトマップ:

```text
https://sasa-eru.com/sitemap.xml
```

## 切替前にユーザー確認が必要なこと

- DNS管理画面へログインできるか
- 既存の `sasa-eru.com` サイトを NexusM&A に置き換えてよいか
- メール関連DNSレコードを把握しているか
- 切替作業の時間帯
