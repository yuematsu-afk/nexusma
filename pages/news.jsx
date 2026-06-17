/* News / Column page */

const NEWS = [
  {
    id: 10,
    tag: "コラム",
    date: "2026.06.17",
    title: "後継者不在の会社は、いつM&Aを考え始めるべきか",
    excerpt: "後継者がいない、候補者はいるが決めきれない。そんな中小企業経営者が、廃業・親族内承継・社内承継・M&Aを比較し始める時期を整理します。",
    featured: true,
    summaryImage: "assets/generated/succession-timing-summary.svg",
    summaryAlt: "後継者不在の会社が、兆候確認、選択肢比較、守るものの整理、90日診断へ進む流れを示す要約図",
    body: [
      { type: "lead", text: "後継者不在は、すぐにM&Aを決めるべきという話ではありません。大切なのは、まだ選択肢が残っているうちに、会社の将来を比較できる状態にしておくことです。" },
      { type: "quote", text: "考え始めるタイミングは「売りたい時」ではなく、「この会社を自分以外の人が運営できる状態に近づける必要がある」と感じ始めた時です。" },
      { type: "heading", level: 2, text: "1. なぜ後回しにすると危ないのか" },
      { type: "paragraph", text: "中小企業では、日々の資金繰り、採用、現場対応、取引先対応が優先され、承継の話はどうしても後回しになりがちです。しかし、経営者が元気なうちに準備を始めるかどうかで、従業員、取引先、家族、金融機関に残せる選択肢は大きく変わります。" },
      { type: "point", title: "この記事の結論", items: ["M&Aは「すぐ売る」ためではなく、選択肢を残すために早めに考える", "最初にやることは買い手探しではなく、会社の現在地確認", "親族内承継・社内承継・第三者承継・廃業を横並びで比較する", "守りたいものを決めると、承継方法の選び方が変わる"] },
      { type: "heading", level: 2, text: "2. 早めに整理したい5つの兆候" },
      { type: "paragraph", text: "次のような兆候がある場合は、まだ結論を出さない段階でも、早めに整理を始める価値があります。" },
      { type: "checklist", items: ["後継者候補が決まっていない", "候補者はいるが、本人の意思が固まっていない", "社長にしか分からない業務や取引先対応が多い", "経営者保証や借入の引き継ぎが不安である", "従業員や取引先に迷惑をかけたくないが、具体策が見えていない"] },
      { type: "image" },
      { type: "heading", level: 2, text: "3. いきなり買い手を探さない" },
      { type: "paragraph", text: "この段階で必要なのは、いきなり買い手を探すことではありません。まず、親族内承継、社内承継、外部人材の採用、業務提携、第三者承継としてのM&A、廃業という選択肢を横並びで確認することです。" },
      { type: "numbered", items: [{ title: "親族内承継", text: "家族に引き継ぐ選択肢。本人の意思、株式、税務、経営能力を確認します。" }, { title: "社内承継", text: "役員や幹部に託す選択肢。資金面、責任範囲、金融機関対応が論点になります。" }, { title: "第三者承継・M&A", text: "外部の会社や経営者に引き継ぐ選択肢。従業員、取引先、社名、条件面を整理します。" }, { title: "廃業", text: "選択肢の一つですが、雇用・取引先・資産処分・保証の影響を確認する必要があります。" }] },
      { type: "heading", level: 2, text: "4. M&Aで最初に考えるべきこと" },
      { type: "paragraph", text: "M&Aは、後継者不在を解決する一つの方法です。ただし、会社の状況、財務内容、取引先との関係、従業員構成、経営者の残り方によって、向いているケースと向いていないケースがあります。" },
      { type: "quote", text: "早い段階では「売却できるか」よりも、「何を守りたいか」を整理することが重要です。" },
      { type: "point", title: "守りたいものの例", items: ["従業員の雇用と待遇", "取引先との関係", "社名・店舗・工場・地域での役割", "創業者の想い", "家族の生活と経営者保証の解消"] },
      { type: "heading", level: 2, text: "5. 準備が遅れると何が起きるか" },
      { type: "paragraph", text: "業績が急に悪化した後、主要取引先を失った後、幹部が退職した後、金融機関との関係が不安定になった後では、交渉条件も進め方も難しくなります。" },
      { type: "paragraph", text: "逆に、業績が安定している時期、経営者が説明できる時期、資料を整えられる時期であれば、無理に結論を急がずに比較できます。" },
      { type: "heading", level: 2, text: "6. まず行うべきこと" },
      { type: "paragraph", text: "最初に行うべきことは、会社名を出して買い手候補に打診することではありません。自社の承継リスクを棚卸しし、社長が90日不在でも会社が回るか、誰が意思決定できるか、資料や契約が整理されているかを確認することです。" },
      { type: "paragraph", text: "NexusM&Aでは、電話営業を前提にせず、まずは匿名診断や問い合わせフォームから状況整理を始められる導線を用意しています。まだM&Aを決めていない段階でも、後継者不在、事業承継、経営者保証、従業員の雇用継続について、選択肢を一緒に整理できます。" },
      { type: "closing", text: "後継者不在に気づいた時点で、すぐに売却を決める必要はありません。ただ、何もしないまま時間が過ぎると、会社の未来を選ぶ余地は少しずつ減っていきます。まずは、自社の現在地を確認することから始めるのが現実的です。" }
    ],
  },
  { id: 1, tag: "お知らせ", date: "2026.05.01", title: "NexusM&A、相談受付開始のお知らせ", excerpt: "全国の中小企業を対象に、事業承継・M&Aに関する相談受付を開始しました。", featured: true, body: ["NexusM&Aは、中小企業の事業承継と成長戦略M&Aに関する相談受付を開始しました。", "売り手・買い手のいずれか一方に偏らず、経営者の納得と取引後の継続性を重視します。", "初回相談では、譲渡を前提にせず、社内改善・提携・第三者承継など複数の選択肢を整理します。"] },
  { id: 2, tag: "コラム", date: "2026.04.20", title: "事業承継税制の改正ポイント — 経営者が今押さえるべき3つの論点", excerpt: "事業承継税制の特例措置について、経営者目線で押さえるべき要点を解説。", body: ["事業承継税制は、株式承継時の税負担を抑えるための制度ですが、要件や手続きは複雑です。", "重要なのは、税制の適用可否だけでなく、後継者の意思、経営体制、資金繰りを同時に確認することです。", "制度利用を検討する前に、親族内承継、社内承継、第三者承継のどれが現実的かを整理しましょう。"] },
  {
    id: 3,
    tag: "コラム",
    date: "2026.04.05",
    title: "M&Aを検討し始めたら、最初にやるべき5つのこと",
    excerpt: "M&Aを意識し始めた段階で、売却価格を調べる前に経営者が整理すべき5つの論点を解説します。",
    summaryImage: "assets/generated/ma-first-steps-summary.svg",
    summaryAlt: "M&A検討初期に整理すべき5つのステップを示す要約図",
    body: [
      { type: "lead", text: "M&Aを考え始めたとき、多くの経営者が最初に気になるのは「いくらで売れるのか」です。しかし初期段階で本当に重要なのは、価格そのものよりも、何を守り、どの条件なら検討できるのかを整理することです。" },
      { type: "quote", text: "最初にやるべきことは、買い手探しではなく、経営者自身が判断できる状態をつくることです。" },
      { type: "heading", level: 2, text: "1. 守りたいものを決める" },
      { type: "paragraph", text: "M&Aは会社を手放すだけの手続きではありません。従業員の雇用、取引先との関係、社名、店舗や工場、経営者保証、引退時期など、守りたいものを先に整理しておくことで、候補先の選び方や交渉条件が変わります。" },
      { type: "point", title: "最初に書き出す項目", items: ["従業員の雇用と待遇", "主要取引先との関係", "社名・屋号・店舗・工場", "経営者保証や借入の扱い", "引退時期と譲渡後の関与"] },
      { type: "heading", level: 2, text: "2. 資料の所在を確認する" },
      { type: "paragraph", text: "この段階で完璧な資料をそろえる必要はありません。ただし、どこに何があるか分からない状態では、相談も検討も進みにくくなります。まずは資料の所在を確認しましょう。" },
      { type: "checklist", items: ["直近3期分の決算書・税務申告書", "月次試算表", "主要取引先・仕入先の一覧", "賃貸借契約・重要契約", "従業員数、役職、年齢構成", "借入金、担保、経営者保証の状況"] },
      { type: "image" },
      { type: "heading", level: 2, text: "3. 候補先像を仮置きする" },
      { type: "paragraph", text: "具体的な会社名を出す前に、どのような相手なら事業を引き継げそうかを考えます。同業、周辺業種、取引先、地域企業、投資会社など、候補先の種類によって重視されるポイントは異なります。" },
      { type: "numbered", items: [{ title: "同業会社", text: "技術や顧客を理解しやすい一方、情報管理には慎重さが必要です。" }, { title: "周辺業種", text: "販路拡大や内製化の目的で関心を持つ可能性があります。" }, { title: "地域企業", text: "雇用や地域での役割を重視する場合に相性があります。" }, { title: "投資会社", text: "成長余地や管理体制を評価し、経営者の残り方も論点になります。" }] },
      { type: "heading", level: 2, text: "4. 費用と契約条件を確認する" },
      { type: "paragraph", text: "M&A支援の費用は、成功報酬だけでなく、着手金、中間金、月額報酬、最低報酬、テール条項などを含めて確認する必要があります。費用の安さだけでなく、どの段階で何が発生するのかを理解することが大切です。" },
      { type: "heading", level: 2, text: "5. 匿名・初期相談で論点を整理する" },
      { type: "paragraph", text: "検討初期では、会社名を出して買い手に打診する前に、第三者に論点を整理してもらうだけでも意味があります。現時点でM&Aが適しているのか、社内承継や採用を先に考えるべきか、比較の軸が見えてきます。" },
      { type: "closing", text: "M&Aを検討し始めた段階で大切なのは、急いで結論を出すことではありません。判断材料を整え、守りたいものを明確にし、選択肢を比較できる状態をつくることが第一歩です。" }
    ],
  },
  { id: 4, tag: "セミナー", date: "2026.03.15", title: "中小M&Aの『成約後』を考える経営者向けセミナー情報", excerpt: "PMIの実務と、経営者として準備すべき事項を解説します。", body: ["M&Aは成約がゴールではありません。従業員、顧客、管理体制が自然に移行するまでが重要です。", "セミナーでは、成約後100日で確認すべき論点と、売り手経営者が残る場合の役割設計を扱います。", "参加希望の方は、お問い合わせページからご連絡ください。"] },
  {
    id: 5,
    tag: "コラム",
    date: "2026.03.05",
    title: "後継者不在の中小企業がM&Aを選ぶ理由",
    excerpt: "後継者不在の中小企業が、廃業ではなく第三者承継・M&Aを選ぶ理由を、雇用・取引先・技術・保証・成長投資の観点から整理します。",
    summaryImage: "assets/generated/succession-ma-reasons-summary.svg",
    summaryAlt: "後継者不在企業がM&Aを選ぶ主な理由を示す要約図",
    body: [
      { type: "lead", text: "後継者不在の会社にとって、M&Aは単なる売却手段ではありません。従業員、取引先、技術、地域での役割を残すための第三者承継という選択肢です。" },
      { type: "quote", text: "重要なのは「誰に渡すか」の前に、「何を残したいか」を決めることです。" },
      { type: "heading", level: 2, text: "1. 従業員の雇用を残しやすい" },
      { type: "paragraph", text: "廃業を選ぶと、従業員の雇用は原則として終了に向かいます。一方、M&Aでは買い手が事業を引き継ぐため、従業員の雇用継続を条件として交渉できる可能性があります。" },
      { type: "heading", level: 2, text: "2. 取引先への影響を抑えられる" },
      { type: "paragraph", text: "中小企業の事業は、長年の取引関係によって成り立っています。突然の廃業は、顧客や仕入先にも影響します。M&Aでは、事業を止めずに引き継ぐことで、取引先への影響を抑えやすくなります。" },
      { type: "point", title: "M&Aで残しやすいもの", items: ["従業員の雇用", "取引先との関係", "技術・ノウハウ・許認可", "店舗・工場・地域での役割", "商品・サービスの提供体制"] },
      { type: "image" },
      { type: "heading", level: 2, text: "3. 技術やノウハウを次世代へ渡せる" },
      { type: "paragraph", text: "製造、建設、医療・介護、食品、ITなどでは、会社の価値が帳簿上の数字だけに表れないことがあります。技術、職人の経験、顧客対応、許認可、現場の運用方法は、第三者が引き継ぐことで価値を残せる場合があります。" },
      { type: "heading", level: 2, text: "4. 経営者保証や借入の出口を検討できる" },
      { type: "paragraph", text: "後継者不在の会社では、経営者保証や借入の引き継ぎが大きな不安になります。M&Aを検討する際には、金融機関との関係、保証解除の可能性、譲渡代金の使い道などを整理する必要があります。" },
      { type: "heading", level: 2, text: "5. 買い手の経営資源で成長できる" },
      { type: "paragraph", text: "買い手企業が持つ人材、販路、資金、管理体制によって、単独では難しかった成長投資が可能になることがあります。M&Aは会社を終わらせる話ではなく、次の成長に引き継ぐ話でもあります。" },
      { type: "checklist", items: ["後継者候補がいない", "従業員の雇用を守りたい", "廃業すると取引先に影響が大きい", "技術や許認可を残したい", "保証や借入の出口を整理したい"] },
      { type: "closing", text: "後継者不在だからといって、すぐに廃業か売却かを決める必要はありません。まずは、会社に残したい価値を整理し、親族内承継・社内承継・第三者承継を比較することが現実的です。" }
    ],
  },
  { id: 6, tag: "コラム", date: "2026.02.20", title: "PEファンドへの売却 — メリットと注意点", excerpt: "PEファンドへの売却を経営の継続性・社員雇用・企業価値向上の観点から解説します。", body: ["PEファンドは、事業の成長余地を評価して投資する買い手候補の一つです。", "一方で、投資期間や成長計画への期待があるため、経営者の残り方や社員への説明が重要になります。", "事業会社への譲渡と比較し、自社に合う買い手像を整理することが必要です。"] },
  {
    id: 7,
    tag: "コラム",
    date: "2026.02.08",
    title: "M&Aにかかる費用を確認するポイント",
    excerpt: "M&A支援機関との契約前に、着手金・中間金・成功報酬・最低報酬・テール条項などを確認するポイントを整理します。",
    summaryImage: "assets/generated/ma-fee-check-summary.svg",
    summaryAlt: "M&A支援契約前に確認したい費用項目を示す要約図",
    body: [
      { type: "lead", text: "M&Aの費用は、成功報酬率だけを見ても判断できません。いつ、何に対して、いくら発生するのかを契約前に確認することが重要です。" },
      { type: "quote", text: "比較すべきは単純な安さではなく、納得して進められる報酬体系と契約条件です。" },
      { type: "heading", level: 2, text: "1. 成約しなくても発生する費用" },
      { type: "paragraph", text: "着手金、月額報酬、企業概要書作成費用などは、成約しなくても発生する場合があります。何の業務に対する費用なのか、返金の有無はあるのかを確認しましょう。" },
      { type: "heading", level: 2, text: "2. 中間金が発生するタイミング" },
      { type: "paragraph", text: "基本合意の締結時など、最終契約前に中間金が発生する報酬体系もあります。中間金が成功報酬に充当されるのか、別途発生するのかを確認することが大切です。" },
      { type: "image" },
      { type: "heading", level: 2, text: "3. 成功報酬の計算方法" },
      { type: "paragraph", text: "成功報酬は、譲渡価格だけでなく、役員退職慰労金、借入金、運転資金などを含む基準で計算される場合があります。対象金額、料率、最低報酬、消費税の扱いを確認しましょう。" },
      { type: "point", title: "契約前に確認する費用項目", items: ["着手金・月額報酬の有無", "中間金の発生時期と充当の有無", "成功報酬の対象金額と料率", "最低報酬の金額", "実費、出張費、資料作成費の扱い"] },
      { type: "heading", level: 2, text: "4. テール条項と直接交渉制限" },
      { type: "paragraph", text: "契約終了後、一定期間内に紹介先と成約した場合に報酬が発生する条項をテール条項といいます。また、支援機関を通さずに候補先と直接交渉することを制限する条項がある場合もあります。" },
      { type: "checklist", items: ["テール期間は何か月か", "対象となる候補先の範囲は明確か", "直接交渉制限の内容は合理的か", "契約終了後の報酬発生条件は明確か", "書面で説明を受けているか"] },
      { type: "heading", level: 2, text: "5. 書面で確認する" },
      { type: "paragraph", text: "費用や契約条件は、口頭説明だけでなく書面で確認しましょう。特に最低報酬、対象金額、支払時期、テール条項は、後から誤解が生じやすい部分です。" },
      { type: "closing", text: "M&Aの費用確認は、相見積もりを取るためだけの作業ではありません。納得して相談を進めるために、報酬体系と契約条件を早い段階で理解しておくことが大切です。" }
    ],
  },
  { id: 8, tag: "セミナー", date: "2026.01.25", title: "IT・SaaS企業のためのM&A戦略セミナー情報", excerpt: "SaaSベンチャーの資本政策・事業売却・アライアンスの選択肢を整理します。", body: ["SaaS企業のM&Aでは、売上規模だけでなくARR、解約率、顧客獲得効率が重視されます。", "資本業務提携や一部株式譲渡など、創業者が残る形も検討できます。", "成長資金と経営自由度のバランスを見ながら選択肢を比較します。"] },
  { id: 9, tag: "コラム", date: "2026.01.12", title: "従業員の雇用継続を考えるM&A — 売り手が交渉で押さえるべきポイント", excerpt: "従業員の雇用継続を希望する場合に、事前に整理したいポイントを解説。", body: ["従業員の雇用継続は、多くの売り手経営者が重視する条件です。", "候補先選定の段階から、待遇、勤務地、役職、説明時期を確認する必要があります。", "希望事項を早期に明文化し、基本合意前から交渉事項として整理しておくことが重要です。"] },
];

function ArticleBlock({ block, article, index }) {
  if (typeof block === "string") return <p>{block}</p>;

  switch (block.type) {
    case "lead":
      return <p className="article-lead">{block.text}</p>;
    case "heading":
      return <h2 className="article-heading">{block.text}</h2>;
    case "paragraph":
      return <p>{block.text}</p>;
    case "quote":
      return <blockquote className="article-quote">{block.text}</blockquote>;
    case "point":
      return (
        <aside className="article-point-box">
          <h3>{block.title}</h3>
          <ul>
            {block.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </aside>
      );
    case "checklist":
      return (
        <ul className="article-checklist">
          {block.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      );
    case "numbered":
      return (
        <div className="article-numbered-grid">
          {block.items.map((item, i) => (
            <section className="article-numbered-card" key={item.title}>
              <span className="article-number">{String(i + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </section>
          ))}
        </div>
      );
    case "image":
      if (!article.summaryImage) return null;
      return (
        <figure className="article-summary-figure">
          <img src={article.summaryImage} alt={article.summaryAlt || article.title} />
          <figcaption>この記事の要点。まず買い手を探すのではなく、選択肢を比較できる状態をつくることが出発点です。</figcaption>
        </figure>
      );
    case "closing":
      return <p className="article-closing">{block.text}</p>;
    default:
      return <p key={index}>{block.text || ""}</p>;
  }
}

function PageNews({ navigate }) {
  const getArticleFromHash = () => {
    const query = window.location.hash.split("?")[1] || "";
    const id = Number(new URLSearchParams(query).get("article"));
    return NEWS.find((n) => n.id === id) || null;
  };

  const [filter, setFilter] = useState("すべて");
  const [selectedNews, setSelectedNews] = useState(() => getArticleFromHash());
  const tags = ["すべて", "プレスリリース", "コラム", "セミナー", "メディア"];
  const list = filter === "すべて" ? NEWS : NEWS.filter((n) => n.tag === filter);

  const featured = NEWS.find((n) => n.featured) || NEWS[0];
  const rest = list.filter((n) => n.id !== featured.id);
  const openArticle = (article) => {
    setSelectedNews(article);
    window.location.hash = `/news?article=${article.id}`;
  };
  const closeArticle = () => {
    setSelectedNews(null);
    window.location.hash = "/news";
  };

  useEffect(() => {
    const syncArticle = () => setSelectedNews(getArticleFromHash());
    window.addEventListener("hashchange", syncArticle);
    return () => window.removeEventListener("hashchange", syncArticle);
  }, []);

  if (selectedNews) {
    return (
      <main>
        <PageHero
          eyebrow={selectedNews.tag}
          title={selectedNews.title}
          lead={selectedNews.excerpt}
          crumbs={["コラム・ニュース", selectedNews.title]}
          navigate={navigate}
        />
        <section style={{ background: "var(--paper)" }}>
          <div className="container narrow">
            <button className="btn btn-ghost" onClick={closeArticle}>← 一覧へ戻る</button>
            <article className="article-detail">
              <div className={`ph visual article-detail-img ${getNewsVisual(selectedNews.tag)}`} />
              <div className="news-meta">
                <span className={`tag ${selectedNews.tag === "プレスリリース" ? "tag-navy" : selectedNews.tag === "コラム" ? "tag-gold" : ""}`}>{selectedNews.tag}</span>
                <span className="news-date-inline font-serif-en">{selectedNews.date}</span>
              </div>
              {selectedNews.body.map((block, i) => <ArticleBlock key={i} block={block} article={selectedNews} index={i} />)}
              <div className="article-cta">
                <h3>まずは自社の現在地を確認する</h3>
                <p>この記事の内容について、自社に当てはめて整理したい場合は、匿名診断または無料相談をご利用ください。</p>
                <button className="btn btn-ghost" onClick={() => navigate("diagnosis")}>社長不在90日診断へ <span className="arrow" /></button>
                <button className="btn btn-primary" onClick={() => navigate("contact")}>無料相談へ進む <span className="arrow" /></button>
              </div>
            </article>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <PageHero
        eyebrow="News & Insights"
        title="コラム・ニュース。"
        lead="M&A・事業承継に関する最新情報、業界知見、当社からのお知らせをお届けします。"
        crumbs={["コラム・ニュース"]}
        navigate={navigate}
      />

      {/* Featured */}
      <section style={{ background: "var(--paper)", paddingBottom: 40 }}>
        <div className="container">
          <article className="featured-news">
            <div className="ph ph-dark visual visual-office featured-news-img" data-label="Featured image" />
            <div className="featured-news-body">
              <div className="news-meta">
                <span className={`tag ${featured.tag === "プレスリリース" ? "tag-navy" : featured.tag === "コラム" ? "tag-gold" : ""}`}>{featured.tag}</span>
                <span className="news-date-inline font-serif-en">{featured.date}</span>
              </div>
              <h3 className="font-serif-jp" style={{ fontSize: 34, lineHeight: 1.55, margin: "24px 0 24px" }}>{featured.title}</h3>
              <p style={{ color: "var(--ink-500)", lineHeight: 2, fontSize: 14.5 }}>{featured.excerpt}</p>
              <div style={{ marginTop: 32 }}>
                <button className="btn btn-ghost" onClick={() => openArticle(featured)}>続きを読む <span className="arrow" /></button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Filter */}
      <section style={{ background: "var(--paper)", padding: "40px 0" }}>
        <div className="container">
          <div className="news-filter">
            {tags.map((t) => (
              <button key={t} className={`tab ${filter === t ? "active" : ""}`} onClick={() => setFilter(t)}>{t}</button>
            ))}
          </div>
        </div>
      </section>

      {/* List */}
      <section style={{ background: "var(--paper)", paddingTop: 20 }}>
        <div className="container">
          <div className="news-grid">
            {rest.map((n) => (
              <article key={n.id} className="news-card card" onClick={() => openArticle(n)}>
                <div className={`ph visual news-card-img ${getNewsVisual(n.tag)}`} data-label="thumbnail" />
                <div className="news-card-body">
                  <div className="news-meta">
                    <span className={`tag ${n.tag === "プレスリリース" ? "tag-navy" : n.tag === "コラム" ? "tag-gold" : ""}`}>{n.tag}</span>
                    <span className="news-date-inline font-serif-en">{n.date}</span>
                  </div>
                  <h4 className="font-serif-jp" style={{ fontSize: 17, lineHeight: 1.7, margin: "18px 0 14px" }}>{n.title}</h4>
                  <p className="news-excerpt">{n.excerpt}</p>
                  <div className="news-card-foot">
                    続きを読む <span style={{ marginLeft: 8 }}>→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="news-list-note">現在公開中の記事は以上です。新しい記事は随時追加します。</p>
        </div>
      </section>

      <ConversionCTA
        navigate={navigate}
        eyebrow="From Insight to Action"
        title="記事の内容を、自社の状況に当てはめて整理できます。"
        lead="事業承継、M&A、社長不在リスクについて、まだ具体化していない段階でもご相談いただけます。"
      />
    </main>
  );
}

window.PageNews = PageNews;
