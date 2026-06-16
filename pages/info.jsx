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
  guideline: {
    eyebrow: "M&A Guideline",
    title: "中小M&Aガイドライン遵守方針。",
    lead: "SASAERU合同会社 / NexusM&Aは、国が創設したM&A支援機関登録制度の登録支援機関として、中小企業庁が定める「中小M&Aガイドライン（第3版）」（令和6年8月）を遵守します。",
    body: [
      {
        heading: "遵守宣言",
        text: "当社は、中小M&Aガイドラインを遵守し、依頼者との契約に基づく義務を履行するとともに、善良な管理者の注意をもって仲介業務・FA業務を行います。依頼者の利益を犠牲にして、当社又は第三者の利益を図る行為は行いません。",
      },
      {
        heading: "支援の質の確保・向上",
        text: "当社は、支援の質を確保・向上させるため、知識・能力の向上、適正な業務遂行、外部委託先の適切な管理に取り組みます。依頼者の意思を尊重し、職業倫理に基づいた支援を行います。",
      },
      {
        heading: "広告・営業に関する方針",
        text: "広告・営業を行う場合には、当社名、担当者名、M&A支援契約の締結を勧誘する目的であることを明示します。M&Aの意思がない、契約しない、今後の営業を希望しない旨の意思表示があった場合には、ただちに広告・営業を停止し、組織的に記録・共有します。即時判断を迫る勧誘、虚偽又は誤認を招く表示、過大な譲渡価格の提示は行いません。",
      },
      {
        heading: "契約前の重要事項説明",
        text: "仲介契約又はFA契約の締結前に、業務形態、提供業務の範囲、担当者の経験、手数料、費用、秘密保持、直接交渉の制限、専任条項、テール条項、契約期間、解除、責任、利益相反の可能性など、重要事項を書面又は電磁的方法で明確に説明し、依頼者の納得を得ます。",
      },
      {
        heading: "手数料・業務内容の明確化",
        text: "手数料については、算定基準、報酬率、報酬基準額、最低手数料、支払時期、着手金・中間金・月額報酬・成功報酬の有無を説明します。手数料の対価として当社が提供する業務内容についても、M&Aプロセスごとに整理して説明します。",
      },
      {
        heading: "企業価値評価・マッチング",
        text: "企業価値評価を行う場合には、評価手法や前提条件を事前に説明し、概算額・暫定額である場合にはその性質を明示します。ネームクリアは、譲り渡し側の個別同意を取得し、候補先との秘密保持契約を締結した上で実施します。",
      },
      {
        heading: "交渉・DD・最終契約の支援",
        text: "中小M&Aに不慣れな依頼者にも全体像と今後の流れを分かりやすく説明し、交渉を支援します。デュー・ディリジェンス、表明保証、経営者保証、クロージング後の支払・手続など、成約後のトラブルにつながり得る事項についても、可能な限り具体的に説明します。",
      },
      {
        heading: "不適切な譲り受け側の排除",
        text: "譲り受け側が最終契約を履行し、対象事業を引き継ぐ意思・能力を有しているかを確認します。財務状況、事業実態、反社会的勢力への該当性、過去のM&Aトラブルの有無などを必要に応じて確認し、不適切な譲り受け側を最大限排除するよう努めます。",
      },
      {
        heading: "専任条項・直接交渉制限・テール条項",
        text: "専任条項を設ける場合には対象範囲を可能な限り限定し、合理的な理由がない限りセカンド・オピニオンを妨げません。直接交渉の制限は、当社が関与・接触し紹介した候補先とのM&A目的の交渉に限定します。テール条項を設ける場合も、対象者と期間を合理的な範囲に限定します。",
      },
      {
        heading: "利益相反への対応",
        text: "仲介業務を行う場合には、両当事者と契約する仲介者であること、両当事者から手数料を受領する場合にはその旨、利益の対立が想定される事項を事前に説明します。中立性・公平性を保ち、一方当事者の利益又は不利益となる利益相反行為を行いません。",
      },
      {
        heading: "専門家への相談",
        text: "必要に応じて、弁護士、公認会計士、税理士、事業承継・引継ぎ支援センター、金融機関等への相談が選択肢であることを説明します。経営者保証など重要な論点について、依頼者が専門家等に相談することを不当に妨げません。",
      },
      {
        heading: "その他",
        text: "上記のほか、中小M&Aガイドラインの趣旨に則り、依頼者の納得、情報管理、適正なプロセス、成約後のトラブル防止を重視して対応します。",
      },
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
      ["guideline", "中小M&Aガイドライン遵守方針"],
      ["antisocial", "反社会的勢力排除"],
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
