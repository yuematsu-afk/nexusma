const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const today = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Tokyo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

function htmlEscape(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function updateMeta(relativeFile, title, description, type = "website", url = "https://sasa-eru.com/") {
  const file = path.join(root, relativeFile);
  let html = fs.readFileSync(file, "utf8");
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${htmlEscape(title)}</title>`);
  html = html.replace(
    /<meta name="description" content=[\s\S]*?\/>/,
    `<meta name="description" content="${htmlEscape(description)}" />`,
  );
  html = html.replace(
    /<meta property="og:type" content="[^"]*" \/>/,
    `<meta property="og:type" content="${type}" />`,
  );
  html = html.replace(
    /<meta property="og:title" content=[\s\S]*?\/>/,
    `<meta property="og:title" content="${htmlEscape(title)}" />`,
  );
  html = html.replace(
    /<meta property="og:description" content=[\s\S]*?\/>/,
    `<meta property="og:description" content="${htmlEscape(description)}" />`,
  );
  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${htmlEscape(url)}" />`,
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${htmlEscape(url)}" />`,
  );
  fs.writeFileSync(file, html, "utf8");
}

function updateOgImage(relativeFile, imagePath) {
  const file = path.join(root, relativeFile);
  let html = fs.readFileSync(file, "utf8");
  const imageUrl = `https://sasa-eru.com/${imagePath.replace(/^\//, "")}`;
  html = html.replace(
    /<meta property="og:image" content="[^"]*" \/>/,
    `<meta property="og:image" content="${htmlEscape(imageUrl)}" />`,
  );
  fs.writeFileSync(file, html, "utf8");
}

function extractArray(source, constName) {
  const match = source.match(new RegExp(`const ${constName} = (\\[[\\s\\S]*?\\]);`));
  if (!match) {
    throw new Error(`Could not find ${constName}`);
  }
  return Function(`return ${match[1]}`)();
}

updateMeta(
  "index.html",
  "NexusM&A — 社長がいないと回らない会社の事業承継・M&A相談",
  "NexusM&Aは、社長依存・後継者不在・経営者保証に悩む中小企業向けに、売却前提ではない事業承継・M&A相談を行います。会社名・電話番号不要の社長不在90日診断も利用できます。",
);
updateOgImage("owner-emergency-checklist/index.html", "assets/generated/existing-owner-emergency-summary.webp");

updateMeta(
  "owner-emergency-checklist/index.html",
  "社長が病気・入院で長期不在になったら？会社経営と資金繰りの対応 | NexusM&A",
  "社長・代表取締役が病気や入院で長期不在になった場合、会社経営と資金繰りをどう継続するか。24時間・7日・30日・90日の対応、給与、取引先、銀行、家族への影響を解説します。",
  "article",
  "https://sasa-eru.com/owner-emergency-checklist/",
);
updateOgImage("family-guarantee-risk/index.html", "assets/generated/existing-family-guarantee-summary.webp");

updateMeta(
  "family-guarantee-risk/index.html",
  "社長が倒れた時、家族が困る借入・保証の整理 | NexusM&A",
  "社長が急病・長期不在になった時、配偶者や家族が困りやすい会社借入、経営者保証、個人資産、従業員対応を整理するページです。売却前提ではなく、家族に残る負担を減らすための確認ができます。",
  "article",
  "https://sasa-eru.com/family-guarantee-risk/",
);

updateMeta(
  "resources/index.html",
  "無料資料 | NexusM&A",
  "社長不在、経営者保証、会社借入、家族への影響を整理できる無料PDF・チェックリスト・匿名診断をまとめた資料ページです。登録不要で読めます。",
  "website",
  "https://sasa-eru.com/resources/",
);

const newsSource = fs.readFileSync(path.join(root, "pages/news.jsx"), "utf8");
const slugs = extractArray(newsSource, "SEO_COLUMN_SLUGS");
const seeds = extractArray(newsSource, "SEO_COLUMN_SEEDS");

const overrides = {
  3: [
    "従業員の高齢化と事業承継 | 退職・技能消失に備える時期 | NexusM&A",
    "従業員の高齢化が進む中小企業向けに、年齢構成、退職時期、技能・顧客対応の属人化を整理し、事業承継やM&Aを始めるタイミングを解説します。",
  ],
  1: [
    "人口減少で売上・採用が減る地方企業へ | 廃業前の確認事項 | NexusM&A",
    "人口減少で売上、採用、取引先が減り始めた地方企業向けに、廃業前に確認したい数字と、縮小・提携・第三者承継・M&Aの選択肢を整理します。",
  ],
  4: [
    "売上が減ってきた地方企業へ | 廃業前に確認すべき5項目 | NexusM&A",
    "地方で売上や取引先が減ってきた中小企業向けに、廃業前に確認したい売上構成、粗利、固定費、主要顧客依存、第三者承継・M&Aの可能性を解説します。",
  ],
  5: [
    "社長がいないと回らない会社は売れるのか | 買い手が見る社長依存 | NexusM&A",
    "社長依存の会社は売れるのか。顧客、営業、技術、判断、金融機関対応、地域信用の依存度を分け、承継・M&A前に整理すべきポイントを解説します。",
  ],
  7: [
    "社長・経営者の引退タイミングはいつか | 事業承継の判断軸 | NexusM&A",
    "社長・経営者は何歳で引退すべきか。年齢だけで決めず、健康、後継者、生活資金、肩書、収入、譲渡後の関与から引退タイミングを判断する方法を解説します。",
  ],
  9: [
    "求人しても人が来ない会社はどう事業を守るべきか | NexusM&A",
    "求人しても採用できない地方企業向けに、業務整理、外注、提携、第三者承継、M&Aを比較し、雇用・取引先・地域サービスを守る考え方を解説します。",
  ],
};

const columnImages = {
  "succession-local-successor-shortage": "assets/generated/existing-successor-shortage-summary.webp",
  "population-decline-business-succession": "assets/generated/existing-population-decline-summary.webp",
  "youth-decline-hiring-succession-risk": "assets/generated/existing-youth-decline-summary.webp",
  "aging-employees-succession-timing": "assets/generated/existing-aging-employees-summary.webp",
  "local-sales-decline-checkpoints": "assets/generated/existing-sales-decline-checkpoints.webp",
  "owner-dependent-company-risk": "assets/generated/existing-owner-dependency-map.webp",
  "senior-owner-retirement-planning": "assets/generated/existing-senior-owner-retirement-summary.webp",
  "regional-labor-shortage-ma-options": "assets/generated/existing-labor-shortage-options.webp",
};

slugs.forEach((slug, index) => {
  const seed = seeds[index];
  const [title, description] =
    overrides[index] ||
    [
      `${seed[1]} | 事業承継・M&Aコラム | NexusM&A`,
      `${seed[2]}を背景に、中小企業経営者が事業承継・第三者承継・M&Aの前に整理すべき論点を解説します。`,
    ];
  updateMeta(
    `columns/${slug}/index.html`,
    title,
    description,
    "article",
    `https://sasa-eru.com/columns/${slug}/`,
  );
  if (columnImages[slug]) {
    updateOgImage(`columns/${slug}/index.html`, columnImages[slug]);
  }
});

updateMeta(
  "columns/president-stay-after-ma/index.html",
  "社長を続けながら会社を譲渡できるのか | 段階承継とM&A | NexusM&A",
  "会社を譲渡すると社長を辞めなければならないのか。譲渡後も会長・顧問・営業支援として関与する段階承継の考え方と注意点を解説します。",
  "article",
  "https://sasa-eru.com/columns/president-stay-after-ma/",
);

const sitemapFile = path.join(root, "sitemap.xml");
let sitemap = fs.readFileSync(sitemapFile, "utf8");
const updatedLocs = [
  "https://sasa-eru.com/owner-emergency-checklist/",
  "https://sasa-eru.com/family-guarantee-risk/",
  ...Object.keys(columnImages).map((slug) => `https://sasa-eru.com/columns/${slug}/`),
];

updatedLocs.forEach((loc) => {
  const escapedLoc = loc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  sitemap = sitemap.replace(
    new RegExp(`(<url><loc>${escapedLoc}</loc><lastmod>)[^<]+(</lastmod></url>)`),
    `$1${today}$2`,
  );
});
fs.writeFileSync(sitemapFile, sitemap, "utf8");

console.log(`Updated static metadata for ${slugs.length + 5} pages.`);
