/* News / Column page */

const GOV_SOURCES = [
  { label: "中小企業庁「2025年版 中小企業白書」", url: "https://www.chusho.meti.go.jp/pamflet/hakusyo/2025/chusho/index.html" },
  { label: "中小企業庁「事業承継」", url: "https://www.chusho.meti.go.jp/zaimu/shoukei/index.html" },
  { label: "内閣府「少子化社会対策白書」", url: "https://www8.cao.go.jp/shoushi/shoushika/whitepaper/index.html" },
  { label: "総務省統計局「人口推計」", url: "https://www.stat.go.jp/data/jinsui/" },
];

const SEO_COLUMN_SLUGS = [
  "succession-local-successor-shortage",
  "population-decline-business-succession",
  "youth-decline-hiring-succession-risk",
  "aging-employees-succession-timing",
  "local-sales-decline-checkpoints",
  "owner-dependent-company-risk",
  "local-factory-successor-ma",
  "senior-owner-retirement-planning",
  "low-birthrate-sme-succession",
  "regional-labor-shortage-ma-options",
  "shrinking-local-market-exit-strategy",
  "owner-guarantee-succession-first-step",
  "family-succession-decision-points",
  "internal-succession-difficulty-options",
  "local-service-business-successor-shortage",
  "aging-customers-succession-risk",
  "avoid-local-business-closure",
  "business-inventory-population-decline",
  "hiring-difficulty-buyer-perspective",
  "third-party-succession-concerns",
  "owner-health-succession-preparation",
  "successor-candidate-but-stalled",
  "local-construction-succession",
  "local-retail-population-decline",
  "healthcare-care-business-succession",
  "food-business-successor-shortage",
  "solo-owner-ma-possibility",
  "protect-local-employment-ma",
  "remote-area-company-value",
  "profitable-company-early-succession",
  "loss-making-company-succession",
  "financial-institution-succession-consultation",
  "tax-accountant-succession-documents",
  "employee-explanation-local-ma",
  "confidential-ma-before-disclosure",
  "diagnose-before-selling-company",
  "family-outside-succession",
  "artisan-aging-technology-transfer",
  "local-brand-succession",
  "pre-closure-third-party-succession",
  "young-employees-five-year-risk",
  "sme-bcp-business-succession",
  "family-meeting-business-succession",
  "owner-personal-assets-company-succession",
  "old-equipment-investment-decision",
  "keep-company-name-after-ma",
  "continue-or-transfer-population-decline",
  "founder-letting-go-preparation",
  "early-information-gathering-local-sme",
  "delaying-succession-consequences",
];

const SEO_COLUMN_SEEDS = [
  ["2026.06.10", "地方で後継者が見つからない会社が、最初に整理すべきこと", "後継者候補の不在", "会社を誰に渡すかより先に、何を残したいかを整理する"],
  ["2026.05.28", "人口減少地域の会社は、なぜ早めの事業承継準備が必要なのか", "人口減少と市場縮小", "地域需要・採用・取引先の変化を早めに見える化する"],
  ["2026.05.14", "若者が減る地域で採用できない会社の事業承継リスク", "若者減少と採用難", "採用だけに頼らず、承継・提携・M&Aも選択肢に入れる"],
  ["2026.04.30", "従業員の高齢化が進む会社は、いつ承継を考えるべきか", "従業員の高齢化", "現場のキーパーソンと技能継承を棚卸しする"],
  ["2026.04.16", "地方の取引先が減っている会社が確認したい3つの数字", "取引先減少", "売上構成、粗利、主要顧客依存度を確認する"],
  ["2026.04.02", "社長しか営業できない会社の承継リスク", "営業の社長依存", "顧客情報と商談履歴を社内で共有する"],
  ["2026.03.19", "地方工場の後継者問題とM&Aの考え方", "製造現場の承継", "設備・技術・人材をセットで引き継げる状態にする"],
  ["2026.03.05", "高齢経営者が引退時期を決められないときの整理方法", "引退時期の未定", "生活資金、役割、譲渡後の関与を分けて考える"],
  ["2026.02.19", "出生率低下は中小企業の事業承継にどう影響するか", "出生率低下", "親族内承継に限定せず、社内承継・第三者承継を比較する"],
  ["2026.02.05", "地域の人手不足が続く会社は、M&Aで何を守れるのか", "人手不足", "雇用、取引先、地域サービスを守る条件を明確にする"],
  ["2026.01.22", "地方商圏が縮小する会社の出口戦略", "商圏縮小", "単独継続、提携、譲渡、廃業の条件を比較する"],
  ["2026.01.08", "経営者保証がある会社の事業承継で最初に見ること", "経営者保証", "借入、担保、保証人、金融機関対応を一覧化する"],
  ["2025.12.11", "親族に継がせるか迷う会社が確認すべきこと", "親族内承継の迷い", "本人の意思、株式、経営能力、家族関係を分けて確認する"],
  ["2025.10.23", "社内承継が難しい会社の次の選択肢", "社内承継の難しさ", "幹部の意思と資金力を確認し、第三者承継も比較する"],
  ["2025.09.25", "地方のサービス業で後継者不在が起きやすい理由", "サービス業の後継者不足", "属人化した接客・予約・顧客管理を見える化する"],
  ["2025.08.28", "主要取引先が高齢化している会社の注意点", "取引先の高齢化", "顧客側の承継リスクも売上見通しに入れる"],
  ["2025.07.31", "地方企業の廃業を避けるために早めにできること", "廃業リスク", "資産、負債、雇用、取引先への影響を早めに整理する"],
  ["2025.06.26", "人口減少時代の中小企業に必要な事業の棚卸し", "事業の棚卸し", "残す事業、縮小する事業、引き継ぐ事業を分ける"],
  ["2025.05.29", "採用難の会社が買い手から見られるポイント", "採用難", "人材定着、教育体制、業務標準化を説明できるようにする"],
  ["2025.03.27", "地方企業が第三者承継を検討するときの不安と対策", "第三者承継への不安", "情報管理、従業員説明、候補先選定の順番を決める"],
  ["2025.02.27", "社長の体調不安がある会社の承継準備", "経営者の健康不安", "緊急時の判断者、金融機関窓口、契約管理を確認する"],
  ["2025.01.30", "後継者候補がいるのに承継が進まない理由", "候補者はいるが進まない", "権限移譲、株式、保証、本人の不安を分解する"],
  ["2024.12.19", "地方の建設業で事業承継を考える前に見る論点", "地域インフラ事業", "許認可、人材、元請関係、現場管理を整理する"],
  ["2024.11.21", "地方の小売業が人口減少で受ける影響と承継", "小売業の商圏変化", "店舗、顧客層、在庫、賃貸借契約を確認する"],
  ["2024.10.24", "介護・医療周辺事業の承継で確認したいこと", "地域サービスの継続", "人員体制、許認可、利用者対応を引き継げる状態にする"],
  ["2024.08.22", "地方の食品関連企業が後継者不在になる前にできること", "食品関連の承継", "衛生管理、販路、製造ノウハウを整理する"],
  ["2024.07.25", "一人社長の会社はM&Aできるのか", "一人社長依存", "売上の再現性と引き継げる業務を切り分ける"],
  ["2024.06.27", "地元雇用を守りたい経営者のM&A準備", "地域雇用", "雇用継続条件と候補先の方針を早めに確認する"],
  ["2024.05.30", "過疎地域の会社が買い手に伝えるべき価値", "過疎地域の価値", "地域独占性、顧客基盤、許認可、技術を言語化する"],
  ["2024.04.25", "黒字でも後継者不在なら早めに考えるべき理由", "黒字企業の承継", "余裕がある時期ほど選択肢を比較しやすい"],
  ["2024.03.28", "赤字企業でも事業承継の可能性はあるのか", "赤字企業の承継", "赤字理由、固定費、資産、人材価値を分けて見る"],
  ["2024.01.25", "金融機関に事業承継を相談する前に整理すること", "金融機関相談", "借入、保証、資金繰り、承継方針をまとめる"],
  ["2023.12.21", "税理士に事業承継を相談する前に準備する資料", "税理士相談", "株式、役員報酬、退職金、相続関係を整理する"],
  ["2023.11.23", "地方企業のM&Aで従業員説明を急ぎすぎない理由", "従業員説明", "説明時期、説明者、伝える範囲を設計する"],
  ["2023.10.26", "取引先に知られずにM&Aを検討するには", "秘密保持", "情報開示の順番と候補先の範囲を絞る"],
  ["2023.09.28", "会社を売るか迷う前に、まず診断すべきこと", "売却前の診断", "社長依存、資料整備、承継候補を確認する"],
  ["2023.08.24", "地方の後継者不足は親族だけの問題ではない", "親族外承継", "社内外の担い手を広く比較する"],
  ["2023.06.22", "高齢化する職人組織の技術承継とM&A", "職人の高齢化", "技能、教育方法、品質判断を言語化する"],
  ["2023.05.25", "地域ブランドを残すための事業承継", "地域ブランド", "商標、屋号、顧客体験、品質を守る条件を決める"],
  ["2023.04.27", "地方企業が廃業前に確認したい第三者承継", "廃業前の第三者承継", "買い手探索前に事業価値を棚卸しする"],
  ["2023.03.23", "若手社員が少ない会社の5年後リスク", "若手不足", "年齢構成と教育体制を見える化する"],
  ["2023.02.23", "中小企業のBCPと事業承継を一緒に考える理由", "BCPと承継", "社長不在時の業務継続を確認する"],
  ["2022.12.22", "地方企業の事業承継で家族会議が必要な理由", "家族会議", "株式、保証、相続、生活資金を共有する"],
  ["2022.09.22", "社長の個人資産と会社の承継を分けて考える", "個人資産と会社", "会社資産、個人保証、相続財産を切り分ける"],
  ["2022.06.23", "古い設備を抱える会社の承継と投資判断", "設備老朽化", "更新投資、修繕費、買い手の投資余力を確認する"],
  ["2022.03.24", "地方企業のM&Aで社名を残せるのか", "社名の継続", "買い手の方針とブランド価値を確認する"],
  ["2021.12.23", "人口減少時代に事業を続けるか譲るかの判断軸", "継続か譲渡か", "市場、採用、利益、後継者を総合的に見る"],
  ["2021.09.23", "創業者が会社を手放せない理由と整理方法", "創業者心理", "感情、条件、役割、生活設計を分けて考える"],
  ["2021.06.24", "地方の中小企業が早めにM&Aを知っておく意味", "早期情報収集", "決断前に選択肢と手順を理解する"],
  ["2021.03.25", "事業承継を先延ばしにすると何が起きるか", "承継の先延ばし", "人材、顧客、金融機関、家族への影響を見る"],
];

function getImportantSeoBlocks(index, issue, action) {
  if (index > 7) return [];
  return [
    { type: "heading", level: 2, text: "4. 相談前に整理しておくとよいこと" },
    { type: "paragraph", text: `${issue}が気になり始めた段階では、まだM&Aや第三者承継を決める必要はありません。まずは、今の会社がどの程度社長や特定の従業員に依存しているのか、地域や取引先にとって何を残すべきなのかを整理することが先です。` },
    { type: "point", title: "無料相談や90日診断の前に見るポイント", items: ["社長が1か月不在でも回る業務と止まる業務", "主要取引先、許認可、金融機関対応の属人化", "後継者候補の有無と本人の意思", "従業員の年齢構成と採用見通し", action] },
    { type: "paragraph", text: "これらを整理しておくと、親族内承継、社内承継、第三者承継、M&Aのどれを優先して検討すべきかが見えやすくなります。NexusM&Aでは、いきなり売却を前提にせず、事業を残すための選択肢を比較するところから相談できます。" },
  ];
}

function buildSeoColumn(seed, index) {
  const [date, title, issue, action] = seed;
  return {
    id: 100 + index,
    slug: SEO_COLUMN_SLUGS[index],
    tag: "コラム",
    date,
    title,
    metaTitle: `${title} | 事業承継・M&Aコラム | NexusM&A`,
    metaDescription: `${issue}を背景に、中小企業経営者が事業承継・第三者承継・M&Aの前に整理すべき論点を解説します。`,
    excerpt: `${issue}を背景に、中小企業経営者が事業承継・M&Aの前に整理すべき論点を解説します。`,
    summaryImage: "assets/generated/president-90day-summary.svg",
    summaryAlt: `${title}の要点を整理した図`,
    body: [
      { type: "lead", text: `人口減少、若者減少、高齢化、人手不足は、地方の中小企業にとって一時的な問題ではありません。${issue}が進む会社では、事業承継やM&Aを「いつか考えること」ではなく、経営の選択肢として早めに整理する必要があります。` },
      { type: "quote", text: "重要なのは、会社を売るかどうかを急いで決めることではなく、選べる状態を残すことです。" },
      { type: "heading", level: 2, text: "1. なぜこのテーマが承継リスクになるのか" },
      { type: "paragraph", text: `${issue}は、採用、売上、現場運営、取引先対応、後継者候補の確保に影響します。社長が元気なうちは問題が表面化しにくくても、数年後に人材や顧客が同時に減ると、承継の選択肢は狭くなります。` },
      { type: "point", title: "最初に見るべきポイント", items: ["社長以外が判断できる業務はどれか", "主要取引先や顧客層に変化はあるか", "従業員の年齢構成と採用見通し", "借入・保証・資金繰りの状態", action] },
      { type: "heading", level: 2, text: "2. M&Aや事業承継にどうつながるか" },
      { type: "paragraph", text: "事業承継は、親族に継がせるか、社内の人材に任せるか、第三者に引き継ぐかを比較する作業です。人口減少が進む地域では、親族内承継だけに限定すると選択肢が少なくなるため、早い段階で社内承継・第三者承継・M&Aも横並びで確認することが現実的です。" },
      { type: "checklist", items: ["後継者候補の有無を確認した", "従業員の年齢構成を把握している", "社長不在時の意思決定者がいる", "主要契約・許認可・金融機関資料を整理している", "第三者承継やM&Aを選択肢として比較した"] },
      { type: "heading", level: 2, text: "3. まず行うべきこと" },
      { type: "paragraph", text: `まずは、${action}ことから始めます。そのうえで、会社を残すために必要な条件を整理し、親族内承継・社内承継・第三者承継のどれが現実的かを確認します。` },
      ...getImportantSeoBlocks(index, issue, action),
      { type: "source", items: GOV_SOURCES },
      { type: "closing", text: "M&Aは最後の手段ではなく、事業を残すための選択肢の一つです。まだ具体的に譲渡を考えていない段階でも、自社の現在地を診断し、早めに選択肢を見える化しておくことが重要です。" }
    ],
  };
}

const SEO_COLUMNS = SEO_COLUMN_SEEDS.map(buildSeoColumn);

const NEWS = [
  ...SEO_COLUMNS,
  {
    id: 12,
    tag: "コラム",
    date: "2026.06.18",
    title: "社長が90日不在でも会社は回るか — 事業承継の前に見るべき5つの領域",
    excerpt: "M&Aや事業承継を考える前に、会社がどれだけ社長に依存しているかを、意思決定・顧客対応・資金繰り・現場運営・資料管理から確認します。",
    featured: true,
    summaryImage: "assets/generated/president-90day-summary.svg",
    summaryAlt: "社長が90日不在でも会社が回るかを5つの領域で確認する要約図",
    body: [
      { type: "lead", text: "事業承継やM&Aを考える前に、まず確認したいことがあります。それは、社長が90日不在でも会社が回るかどうかです。" },
      { type: "quote", text: "社長不在でも会社が回る状態に近づけることは、M&Aの準備であると同時に、日々の経営改善でもあります。" },
      { type: "heading", level: 2, text: "1. 意思決定を誰ができるか" },
      { type: "paragraph", text: "価格決定、採用、仕入、設備投資、クレーム対応など、日々の判断がすべて社長に集まっている会社は少なくありません。社長が不在のときに、誰がどこまで判断できるのかを確認しましょう。" },
      { type: "point", title: "意思決定で確認すること", items: ["日常判断と重要判断の分担", "幹部に任せている範囲", "稟議や承認のルール", "緊急時の連絡先と判断者"] },
      { type: "heading", level: 2, text: "2. 主要取引先に対応できるか" },
      { type: "paragraph", text: "主要取引先との関係が社長個人に強く依存している場合、社長不在時に受注、価格交渉、納期調整、トラブル対応が止まる可能性があります。担当者、契約条件、過去の経緯を共有できているかが重要です。" },
      { type: "image" },
      { type: "heading", level: 2, text: "3. 資金繰りを把握できるか" },
      { type: "paragraph", text: "支払予定、入金予定、借入返済、税金、給与、賞与など、資金繰りの判断が社長だけに集中していると、短期間の不在でも混乱します。金融機関との連絡窓口や、経営者保証の状況も整理しておきましょう。" },
      { type: "heading", level: 2, text: "4. 現場運営が止まらないか" },
      { type: "paragraph", text: "現場の段取り、品質判断、仕入先への指示、従業員の配置など、社長が暗黙知で回している業務が多いほど、承継の難易度は上がります。業務の見える化は、売却のためだけでなく、会社を強くするためにも必要です。" },
      { type: "numbered", items: [{ title: "短期不在", text: "数日から1週間、社長がいなくても日常業務が回るか。" }, { title: "中期不在", text: "1か月程度、顧客対応・資金繰り・採用判断が滞らないか。" }, { title: "90日不在", text: "四半期をまたいでも、数字と意思決定を管理できるか。" }, { title: "承継可能性", text: "社長以外が説明し、判断し、外部と交渉できる状態か。" }] },
      { type: "heading", level: 2, text: "5. 資料・契約・IDが共有されているか" },
      { type: "paragraph", text: "決算書、月次資料、主要契約、保険、許認可、システムID、金融機関資料などが社長の頭の中や個人管理にあると、承継時に大きな負担になります。どこに何があるかを整理するだけでも、会社の見通しはよくなります。" },
      { type: "checklist", items: ["主要取引先と契約条件を一覧化している", "資金繰り表や借入一覧を確認できる", "社長以外が日常判断を代行できる", "契約書・許認可・保険・IDの所在が分かる", "幹部や後継候補と会社の3年後を話している"] },
      { type: "heading", level: 2, text: "社長依存を減らすと、選択肢が増える" },
      { type: "paragraph", text: "社長不在でも会社が回る状態に近づくと、親族内承継、社内承継、第三者承継、M&Aのいずれを選ぶ場合でも進めやすくなります。買い手から見ても、社長個人に依存しすぎない会社は検討しやすくなります。" },
      { type: "closing", text: "M&Aを考えるかどうかに関係なく、まずは社長不在90日診断で、自社の現在地を確認することから始めるのが現実的です。" }
    ],
  },
  {
    id: 10,
    tag: "コラム",
    date: "2026.06.17",
    title: "後継者不在の会社は、いつM&Aを考え始めるべきか",
    excerpt: "後継者がいない、候補者はいるが決めきれない。そんな中小企業経営者が、廃業・親族内承継・社内承継・M&Aを比較し始める時期を整理します。",
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
  {
    id: 2,
    tag: "コラム",
    date: "2025.11.20",
    title: "事業承継税制の改正ポイント — 経営者が今押さえるべき3つの論点",
    excerpt: "事業承継税制を検討する前に、後継者の意思、株式と議決権、資金繰り、承継方法の比較を整理します。",
    summaryImage: "assets/generated/tax-succession-summary.svg",
    summaryAlt: "事業承継税制を検討する前に整理する論点を示す要約図",
    body: [
      { type: "lead", text: "事業承継税制は、株式承継時の税負担を抑える可能性がある制度です。ただし、制度を使うかどうかだけを先に決めると、肝心の承継設計が置き去りになることがあります。" },
      { type: "quote", text: "税制は目的ではなく、承継を実現するための手段です。" },
      { type: "heading", level: 2, text: "1. 後継者の意思と経営体制を確認する" },
      { type: "paragraph", text: "制度の適用可否以前に、後継者本人が本当に経営を引き継ぐ意思を持っているか、経営判断を支える体制があるかを確認する必要があります。名前だけの後継者では、承継後の経営が不安定になります。" },
      { type: "heading", level: 2, text: "2. 株式と議決権の状態を整理する" },
      { type: "paragraph", text: "株式が親族や複数人に分散している場合、承継後の意思決定に支障が出ることがあります。誰が何株を持っているのか、議決権をどのように集約するのかを早めに確認しましょう。" },
      { type: "image" },
      { type: "heading", level: 2, text: "3. 資金繰りと保証への影響を見る" },
      { type: "paragraph", text: "税負担だけでなく、借入、担保、経営者保証、役員退職金、相続財産全体への影響も確認が必要です。承継は税務だけで完結せず、会社と家族の資金計画にも関わります。" },
      { type: "point", title: "税制検討前に確認すること", items: ["後継者本人の意思", "承継後の経営体制", "株式と議決権の分散状況", "借入・担保・経営者保証", "親族内承継・社内承継・第三者承継の比較"] },
      { type: "heading", level: 2, text: "4. 他の承継方法と比較する" },
      { type: "paragraph", text: "事業承継税制は、主に親族内承継や社内承継を検討する場面で関係します。一方で、後継者の意思が固まらない場合や、社内に引き継げる人材がいない場合は、第三者承継・M&Aも比較対象になります。" },
      { type: "checklist", items: ["後継者が経営責任を負えるか", "株式移転後の議決権に問題がないか", "納税・資金繰りの見通しがあるか", "制度要件を満たす可能性があるか", "M&Aや社内承継と比較したか"] },
      { type: "closing", text: "事業承継税制は有力な選択肢ですが、制度ありきで進めるものではありません。まずは会社を誰に、どのような形で託すのかを整理し、そのうえで税制の活用可能性を確認することが大切です。" }
    ],
  },
  {
    id: 3,
    tag: "コラム",
    date: "2025.04.10",
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
  {
    id: 5,
    tag: "コラム",
    date: "2024.09.18",
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
  {
    id: 6,
    tag: "コラム",
    date: "2024.02.14",
    title: "PEファンドへの売却 — メリットと注意点",
    excerpt: "PEファンドへの売却を、成長投資、経営者の残り方、従業員説明、投資期間、買い手との相性から整理します。",
    summaryImage: "assets/generated/pe-fund-sale-summary.svg",
    summaryAlt: "PEファンドへの売却で確認するポイントを示す要約図",
    body: [
      { type: "lead", text: "PEファンドは、事業の成長余地を評価して投資する買い手候補の一つです。事業会社とは異なり、投資後の成長計画や一定期間後の出口を意識して検討する点に特徴があります。" },
      { type: "quote", text: "PEファンドへの売却は、価格だけでなく、投資後にどのような会社を目指すのかを確認する取引です。" },
      { type: "heading", level: 2, text: "1. 成長投資を受けられる可能性がある" },
      { type: "paragraph", text: "人材採用、営業体制、管理部門、システム投資など、単独では踏み切りにくかった投資を進められる可能性があります。特に、事業の強みはあるが経営管理や採用に課題がある会社では、成長支援が期待される場合があります。" },
      { type: "heading", level: 2, text: "2. 経営者の残り方を決める必要がある" },
      { type: "paragraph", text: "PEファンドは、経営者に一定期間残ってもらうことを希望するケースがあります。完全に退任したいのか、数年残って引き継ぐのか、役割と期間を早めに確認することが重要です。" },
      { type: "image" },
      { type: "heading", level: 2, text: "3. 従業員への説明が重要になる" },
      { type: "paragraph", text: "投資会社という言葉に不安を持つ従業員もいます。買い手の方針、雇用継続、待遇、経営体制について、どのタイミングで誰が説明するかを検討する必要があります。" },
      { type: "point", title: "PEファンド検討時の確認項目", items: ["投資後の成長計画", "経営者の続投期間と役割", "従業員の雇用・待遇方針", "投資期間と次の出口", "事業会社への譲渡との違い"] },
      { type: "heading", level: 2, text: "4. 投資期間と出口を理解する" },
      { type: "paragraph", text: "PEファンドは、一定期間後に次の成長ステージへ移ることを想定する場合があります。再売却や上場など、将来の出口について基本的な考え方を確認しておくことが大切です。" },
      { type: "heading", level: 2, text: "5. 自社に合う買い手像と比較する" },
      { type: "paragraph", text: "PEファンドが向いている会社もあれば、事業会社への譲渡の方が合う会社もあります。自社が重視するものが、成長投資なのか、事業シナジーなのか、地域や社名の継続なのかによって、候補先の選び方は変わります。" },
      { type: "closing", text: "PEファンドへの売却は、会社を終わらせる話ではなく、成長計画を共有できる相手に託す選択肢です。価格、経営者の残り方、従業員への影響を総合的に確認しましょう。" }
    ],
  },
  {
    id: 7,
    tag: "コラム",
    date: "2023.07.12",
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
  {
    id: 9,
    tag: "コラム",
    date: "2022.10.05",
    title: "従業員の雇用継続を考えるM&A — 売り手が交渉で押さえるべきポイント",
    excerpt: "従業員の雇用継続を希望する売り手経営者が、候補先選定前から整理すべき待遇・勤務地・役職・説明時期を解説します。",
    summaryImage: "assets/generated/employee-retention-ma-summary.svg",
    summaryAlt: "M&Aで従業員の雇用継続を希望する場合に確認する条件を示す要約図",
    body: [
      { type: "lead", text: "従業員の雇用継続は、多くの売り手経営者が重視する条件です。ただし「雇用を守りたい」という思いだけでは交渉条件になりません。候補先選定の前から、何を守りたいのかを具体化する必要があります。" },
      { type: "quote", text: "雇用継続は、最後にお願いするものではなく、最初から候補先選定の条件に入れるものです。" },
      { type: "heading", level: 2, text: "1. 待遇をどこまで維持したいか" },
      { type: "paragraph", text: "給与、賞与、退職金、福利厚生、勤務時間など、従業員にとって重要な条件を整理します。すべてを完全に維持できるとは限りませんが、譲れない条件を明確にすることで候補先との交渉がしやすくなります。" },
      { type: "heading", level: 2, text: "2. 勤務地や店舗・工場の継続" },
      { type: "paragraph", text: "勤務地が変わると、従業員の生活に大きな影響が出ます。店舗、工場、事務所を継続するのか、転勤の可能性があるのか、候補先の方針を確認する必要があります。" },
      { type: "image" },
      { type: "heading", level: 2, text: "3. 幹部・キーパーソンの処遇" },
      { type: "paragraph", text: "現場を支えている幹部やキーパーソンが退職すると、譲渡後の事業継続に影響します。役職、権限、報酬、説明タイミングを個別に整理しておくことが大切です。" },
      { type: "point", title: "従業員に関して整理する条件", items: ["給与・賞与・福利厚生", "勤務地・転勤の有無", "役職と責任範囲", "雇用契約や就業規則", "説明時期と説明者"] },
      { type: "heading", level: 2, text: "4. 説明時期を間違えない" },
      { type: "paragraph", text: "早すぎる説明は不安や混乱を招き、遅すぎる説明は不信感につながります。基本合意前後、最終契約前後、クロージング後など、どの段階で誰に伝えるかを慎重に設計します。" },
      { type: "heading", level: 2, text: "5. 買い手の方針を確認する" },
      { type: "paragraph", text: "買い手が従業員をどのように見ているかは重要です。人材を評価しているのか、拠点を残す方針なのか、管理体制を変える予定があるのかを候補先選定の段階から確認しましょう。" },
      { type: "checklist", items: ["雇用継続を条件として明文化したか", "待遇・勤務地・役職を具体的に整理したか", "キーパーソンへの説明方針を決めたか", "買い手の雇用方針を確認したか", "従業員説明の時期と順番を設計したか"] },
      { type: "closing", text: "従業員を大切にしたいという思いは、M&Aにおいて非常に重要です。その思いを実現するためには、候補先選定の前から条件を整理し、交渉事項として扱うことが必要です。" }
    ],
  },
  { id: 11, tag: "お知らせ", date: "2021.11.15", title: "事業承継・M&A相談テーマの整理について", excerpt: "後継者不在、経営者保証、従業員の雇用継続など、相談時に整理する主なテーマを明確化しました。", body: ["事業承継・M&Aに関する初期相談で扱う主なテーマを整理しました。", "後継者不在、経営者保証、従業員の雇用継続、取引先への影響、候補先の考え方など、経営者が不安を感じやすい論点を確認します。", "譲渡を前提にせず、親族内承継・社内承継・第三者承継を比較しながら、現実的な選択肢を整理します。"] },
  { id: 1, tag: "お知らせ", date: "2020.11.01", title: "M&A・事業承継に関する相談業務開始のお知らせ", excerpt: "SASAERU合同会社として、中小企業の事業承継・M&Aに関する相談業務を開始しました。", body: ["SASAERU合同会社は、2020年11月より中小企業の事業承継・M&Aに関する相談業務を開始しました。", "後継者不在、事業の引き継ぎ、成長戦略としての譲受検討など、経営者の状況に応じて選択肢を整理します。", "初回相談では、譲渡を前提にせず、社内改善・親族内承継・社内承継・第三者承継など複数の可能性を確認します。"] },
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
    case "source":
      return (
        <aside className="article-source-box">
          <h3>参考にした公的情報</h3>
          <ul>
            {block.items.map((item) => (
              <li key={item.url}><a className="text-link" href={item.url} target="_blank" rel="noopener noreferrer">{item.label}</a></li>
            ))}
          </ul>
        </aside>
      );
    default:
      return <p key={index}>{block.text || ""}</p>;
  }
}

function getColumnUrl(article) {
  return article.slug ? `/columns/${article.slug}/` : `/#/news?article=${article.id}`;
}

function getArticleFromLocation() {
  const pathMatch = window.location.pathname.match(/^\/columns\/([^/]+)\/?$/);
  if (pathMatch) {
    const slug = decodeURIComponent(pathMatch[1]);
    return NEWS.find((n) => n.slug === slug) || null;
  }

  const query = window.location.hash.split("?")[1] || "";
  const id = Number(new URLSearchParams(query).get("article"));
  return NEWS.find((n) => n.id === id) || null;
}

function PageNews({ navigate }) {
  const [filter, setFilter] = useState("すべて");
  const [selectedNews, setSelectedNews] = useState(() => getArticleFromLocation());
  const tags = ["すべて", "お知らせ", "コラム"];
  const list = filter === "すべて" ? NEWS : NEWS.filter((n) => n.tag === filter);

  const featured = NEWS.find((n) => n.featured) || NEWS[0];
  const rest = list.filter((n) => n.id !== featured.id);
  const openArticle = (article) => {
    setSelectedNews(article);
    window.history.pushState(null, "", getColumnUrl(article));
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  const closeArticle = () => {
    setSelectedNews(null);
    window.history.pushState(null, "", "/#/news");
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  useEffect(() => {
    const syncArticle = () => setSelectedNews(getArticleFromLocation());
    window.addEventListener("hashchange", syncArticle);
    window.addEventListener("popstate", syncArticle);
    return () => {
      window.removeEventListener("hashchange", syncArticle);
      window.removeEventListener("popstate", syncArticle);
    };
  }, []);

  useEffect(() => {
    if (!selectedNews) return;
    const canonical = `https://sasa-eru.com${getColumnUrl(selectedNews)}`;
    const title = selectedNews.metaTitle || `${selectedNews.title} | NexusM&A`;
    const description = selectedNews.metaDescription || selectedNews.excerpt;
    document.title = title;
    if (typeof window.setNexusMeta === "function") {
      window.setNexusMeta("description", description);
      window.setNexusMeta("og:title", title, "property");
      window.setNexusMeta("og:description", description, "property");
      window.setNexusMeta("og:url", canonical, "property");
      window.setNexusMeta("og:type", "article", "property");
    }
    if (typeof window.setNexusCanonical === "function") {
      window.setNexusCanonical(canonical);
    }
  }, [selectedNews]);

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
