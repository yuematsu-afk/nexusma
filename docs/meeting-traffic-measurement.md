# 面談先からのアクセスを自然検索と分ける方法

面談前後に相手へサイトURLを案内する場合は、通常URLではなくUTM付きURLを使用する。
Google Analytics 4で、一般の自然検索と面談由来のアクセスを分けて確認できる。

## 基本URL

```text
https://sasa-eru.com/?utm_source=direct&utm_medium=meeting&utm_campaign=company_profile
```

## 用途別URL

会社・代表者の確認用:

```text
https://sasa-eru.com/?utm_source=direct&utm_medium=meeting&utm_campaign=company_profile
```

社長不在チェックリスト:

```text
https://sasa-eru.com/owner-emergency-checklist/?utm_source=direct&utm_medium=meeting&utm_campaign=owner_emergency
```

経営者の引退タイミング:

```text
https://sasa-eru.com/columns/senior-owner-retirement-planning/?utm_source=direct&utm_medium=meeting&utm_campaign=retirement
```

## 運用ルール

- `utm_source=direct` は固定する。
- `utm_medium=meeting` は面談先への案内で固定する。
- `utm_campaign` は案内した内容に合わせて変更する。
- 会社名や個人名をURLへ入れない。
- Search Consoleは検索経由だけを集計するため、相手がURLを直接開いたアクセスはSearch Consoleには原則含まれない。
- 相手がGoogleで「NexusM&A」等を検索して訪問した場合はSearch Consoleに含まれ、面談由来かどうかは判別できない。

## GA4での確認場所

「レポート」→「集客」→「トラフィック獲得」を開き、セッションの参照元/メディアで
`direct / meeting` を確認する。
