# Google Search Console 登録準備

対象サイト: NexusM&A  
現在の公開URL: https://yuematsu-afk.github.io/nexusma/  
将来の本命URL: https://sasa-eru.com/

## 方針

まず現在の GitHub Pages URL を Search Console に登録し、サイトマップ送信まで済ませる。
独自ドメイン `sasa-eru.com` へ移行した後、Search Console では `sasa-eru.com` のドメインプロパティを本命として登録する。

## いま登録するプロパティ

Search Console で次を URL プレフィックスとして登録する。

```text
https://yuematsu-afk.github.io/nexusma/
```

理由:

- いま公開中のURLでクロール状況を確認できる
- HTMLファイル認証またはHTMLタグ認証が使える
- 独自ドメイン移行前の技術的な問題を早めに見つけられる

## 推奨する所有権確認方法

### 第1候補: HTMLファイル認証

Search Console で発行される `googlexxxxxxxxxxxx.html` のようなファイルを、リポジトリ直下に追加する。

公開後、次のようなURLで表示できれば認証できる。

```text
https://yuematsu-afk.github.io/nexusma/googlexxxxxxxxxxxx.html
```

作業手順:

1. Search Console で URL プレフィックスを追加する
2. HTMLファイル認証を選ぶ
3. 認証ファイルをダウンロードする
4. ファイル名と中身を変更せず、このリポジトリ直下へ追加する
5. GitHubへコミット・プッシュする
6. 上記URLで認証ファイルが表示されるか確認する
7. Search Console 側で「確認」を押す

Codexに依頼する場合:

```text
Search ConsoleのHTML認証ファイルを追加してください。
ファイル名: googlexxxxxxxxxxxx.html
内容: google-site-verification: googlexxxxxxxxxxxx.html
```

### 第2候補: HTMLタグ認証

Search Console が発行する次のようなタグを `index.html` の `<head>` 内に追加する。

```html
<meta name="google-site-verification" content="xxxxxxxxxxxxxxxx" />
```

Codexに依頼する場合:

```text
Search ConsoleのHTMLタグ認証を追加してください。
タグはこれです:
<meta name="google-site-verification" content="xxxxxxxxxxxxxxxx" />
```

注意:

- 発行された文字列はユーザーごとに異なる
- 文字列を改変しない
- 認証後も削除しない

## サイトマップ送信

所有権確認後、Search Console の「サイトマップ」から次を送信する。

```text
https://yuematsu-afk.github.io/nexusma/sitemap.xml
```

現在 `robots.txt` でも同じサイトマップを通知済み。

```text
Sitemap: https://yuematsu-afk.github.io/nexusma/sitemap.xml
```

## Search Consoleで最初に見る項目

登録直後:

- 所有権確認が成功しているか
- サイトマップが「成功しました」になっているか
- クロール済みページに `https://yuematsu-afk.github.io/nexusma/` が出るか

数日後:

- インデックス登録状況
- ページの検出状況
- モバイルユーザビリティ
- 検索パフォーマンス
- ページエクスペリエンス

## 現在サイトの注意点

このサイトは現在、`#/company` のようなハッシュルーティングを使っている。
Googleはトップページからリンクをたどって内容を認識できる可能性があるが、検索流入を本格化するなら、将来的には通常URL形式への変更を検討する。

例:

```text
現在: https://sasa-eru.com/#/company
理想: https://sasa-eru.com/company/
```

ただし、現時点では公開を優先し、Search Console登録・サイトマップ送信・実際のクロール状況確認を先に進める。

## 独自ドメイン移行後にやること

独自ドメイン移行後は、Search Console に次を登録する。

```text
sasa-eru.com
```

推奨は「ドメインプロパティ」。
DNS TXT レコードで所有権確認することで、次のすべてをまとめて扱える。

- `https://sasa-eru.com/`
- `http://sasa-eru.com/`
- `https://www.sasa-eru.com/`
- `https://nexus-ma.sasa-eru.com/`

移行後に送信するサイトマップ:

```text
https://sasa-eru.com/sitemap.xml
```

## Search Console登録後の運用メモ

- サイト公開直後はデータ反映に数日かかる
- サイトマップ送信は即時順位上昇ではなく、発見と診断のための作業
- 独自ドメイン移行時は、旧URLと新URLの両方をしばらく確認する
- 認証ファイル、認証タグ、DNS TXT レコードは削除しない

## 参考リンク

- Google Search Console ヘルプ: https://support.google.com/webmasters/answer/9008080
- Google Search Central サイトマップ: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
