const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const schedule = JSON.parse(fs.readFileSync(path.join(root, "data", "scheduled-columns.json"), "utf8"));
const today = (process.env.PUBLISH_DATE || new Date(Date.now() + (9 * 60 * 60 * 1000)).toISOString().slice(0, 10));
const templateFile = path.join(root, "columns", "president-stay-after-ma", "index.html");
const template = fs.readFileSync(templateFile, "utf8");

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function setMeta(html, item, published) {
  const url = `https://sasa-eru.com/columns/${item.slug}/`;
  const title = escapeHtml(item.metaTitle);
  const description = escapeHtml(item.description);
  let result = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content=[\s\S]*?\/>/, `<meta name="description" content="${description}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:title" content=[\s\S]*?\/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content=[\s\S]*?\/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${url}" />`)
    .replace(/\n\s*<meta name="robots" content="noindex, nofollow" \/>/, "");

  if (!published) {
    result = result.replace(
      /(<meta name="description"[^>]*\/>)/,
      `$1\n  <meta name="robots" content="noindex, nofollow" />`,
    );
  }
  return result;
}

for (const item of schedule) {
  const published = item.publishDate <= today;
  const directory = path.join(root, "columns", item.slug);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, "index.html"), setMeta(template, item, published), "utf8");
}

const sitemapFile = path.join(root, "sitemap.xml");
let sitemap = fs.readFileSync(sitemapFile, "utf8");
for (const item of schedule) {
  const url = `https://sasa-eru.com/columns/${item.slug}/`;
  const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  sitemap = sitemap.replace(new RegExp(`\\s*<url><loc>${escapedUrl}</loc><lastmod>[^<]+</lastmod></url>`), "");
  if (item.publishDate <= today) {
    sitemap = sitemap.replace(
      "</urlset>",
      `  <url><loc>${url}</loc><lastmod>${item.publishDate}</lastmod></url>\n</urlset>`,
    );
  }
}
fs.writeFileSync(sitemapFile, sitemap, "utf8");

console.log(`Scheduled columns checked for ${today}.`);
