/* Informational pages */

const INFO_PAGES = {
  faq: {
    eyebrow: "FAQ",
    title: "よくあるご質問。",
    lead: "M&A・事業承継の初期相談でよくいただくご質問をまとめました。",
    body: [
      {
        heading: "相談したことは外部に知られませんか？",
        text: "お問い合わせ内容は秘密厳守で取り扱います。具体的な候補先への打診は、必ず事前にご確認いただいた範囲で進めます。",
      },
      {
        heading: "まだ売却を決めていなくても相談できますか？",
        text: "はい。むしろ早い段階で選択肢を把握しておくことで、承継・採用・投資判断に余裕が生まれます。",
      },
      {
        heading: "電話ではなくメールから相談できますか？",
        text: "可能です。NexusM&Aでは、最初から電話を前提にせず、メール・オンライン面談・匿名診断から始められる導線を用意しています。",
      },
      {
        heading: "買い手候補として登録できますか？",
        text: "可能です。希望業種・地域・投資規模を伺い、条件に合う案件がある場合に個別にご案内します。",
      },
    ],
  },
  glossary: {
    eyebrow: "Glossary",
    title: "M&A用語集。",
    lead: "初めてM&Aを検討する経営者向けに、よく出てくる言葉を簡潔に整理しています。",
    body: [
      { heading: "ノンネームシート", text: "会社名を伏せた状態で、業種・地域・売上規模・譲渡理由などをまとめた匿名資料です。" },
      { heading: "IM", text: "インフォメーション・メモランダムの略です。買い手候補が詳細検討するための会社説明資料を指します。" },
      { heading: "LOI", text: "基本合意書のことです。最終契約前に、譲渡価格・スケジュール・独占交渉などの主要条件を確認します。" },
      { heading: "DD", text: "デュー・ディリジェンスの略です。買い手側が財務・法務・税務・事業面を調査する工程です。" },
      { heading: "PMI", text: "M&A成立後の統合プロセスです。従業員説明、業務移管、管理体制づくりなどを含みます。" },
    ],
  },
  privacy: {
    eyebrow: "Privacy Policy",
    title: "個人情報保護方針。",
    lead: "SASAERU合同会社 / NexusM&Aは、取得した個人情報を適切に管理し、目的外利用を行いません。",
    body: [
      { heading: "利用目的", text: "お問い合わせへの回答、相談対応、サービス案内、本人確認、契約手続き、法令に基づく対応のために利用します。" },
      { heading: "第三者提供", text: "法令に基づく場合またはご本人の同意がある場合を除き、個人情報を第三者へ提供しません。" },
      { heading: "安全管理", text: "取得した情報は、漏えい・紛失・改ざん等を防ぐため、合理的な安全管理措置を講じます。" },
      { heading: "お問い合わせ窓口", text: "個人情報に関するお問い合わせは、y.uematsu@sasa-eru.com までご連絡ください。" },
    ],
  },
  antisocial: {
    eyebrow: "Compliance",
    title: "反社会的勢力排除に関する方針。",
    lead: "当社は、反社会的勢力との一切の関係を遮断し、健全な事業活動を行います。",
    body: [
      { heading: "基本方針", text: "反社会的勢力に対して、取引関係を含む一切の関係を持ちません。" },
      { heading: "不当要求への対応", text: "不当要求があった場合には、警察・弁護士等の外部専門機関と連携し、組織として対応します。" },
      { heading: "契約時の確認", text: "必要に応じて取引開始前に確認を行い、反社会的勢力との関係が判明した場合は取引を行いません。" },
    ],
  },
  sitemap: {
    eyebrow: "Sitemap",
    title: "サイトマップ。",
    lead: "NexusM&Aサイト内の主要ページ一覧です。",
    links: [
      ["home", "トップ"],
      ["service-seller", "売り手の方へ"],
      ["service-buyer", "買い手の方へ"],
      ["cases", "案件一覧"],
      ["results", "成約実績"],
      ["pricing", "料金プラン"],
      ["company", "会社概要"],
      ["news", "コラム・ニュース"],
      ["diagnosis", "社長不在90日診断"],
      ["contact", "無料相談"],
      ["faq", "よくあるご質問"],
      ["glossary", "M&A用語集"],
      ["privacy", "個人情報保護方針"],
    ],
  },
  careers: {
    eyebrow: "Careers",
    title: "採用情報。",
    lead: "現在、公開中の募集職種はありません。",
    body: [
      {
        heading: "パートナー・専門家連携について",
        text: "税理士・公認会計士・弁護士・金融機関OBなど、事業承継支援に関心のある専門家との連携は随時歓迎しています。",
      },
      {
        heading: "お問い合わせ",
        text: "連携や採用に関するご相談は、お問い合わせフォームまたは y.uematsu@sasa-eru.com までご連絡ください。",
      },
    ],
  },
};

function PageInfo({ navigate, type }) {
  const page = INFO_PAGES[type] || INFO_PAGES.faq;
  return (
    <main>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        lead={page.lead}
        crumbs={[page.title.replace("。", "")]}
        navigate={navigate}
      />
      <section style={{ background: "var(--paper)" }}>
        <div className="container narrow">
          {page.links ? (
            <div className="sitemap-grid">
              {page.links.map(([route, label]) => (
                <button key={route} className="sitemap-link" onClick={() => navigate(route)}>
                  <span>{label}</span>
                  <span className="arrow" />
                </button>
              ))}
            </div>
          ) : (
            <div className="info-card-list">
              {page.body.map((item, i) => (
                <article key={item.heading} className="info-card">
                  <div className="info-num font-serif-en">{String(i + 1).padStart(2, "0")}</div>
                  <div>
                    <h2 className="font-serif-jp">{item.heading}</h2>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
          <div className="article-cta">
            <div>
              <div className="eyebrow">Contact</div>
              <h3 className="font-serif-jp">不明点があれば、メールからご相談ください。</h3>
            </div>
            <button className="btn btn-primary" onClick={() => navigate("contact")}>無料相談へ <span className="arrow" /></button>
          </div>
        </div>
      </section>
    </main>
  );
}

window.PageInfo = PageInfo;
