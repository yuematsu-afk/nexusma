/* News / Column page */

const NEWS = [
  { id: 1, tag: "プレスリリース", date: "2026.05.01", title: "NexusM&Aアドバイザリー、サービス開始のお知らせ", excerpt: "京都府京都市を拠点に、中小企業の事業承継・M&Aを専門とする独立系アドバイザリーサービスを開始いたしました。", featured: true },
  { id: 2, tag: "コラム", date: "2026.04.20", title: "事業承継税制の改正ポイント — 経営者が今押さえるべき3つの論点", excerpt: "2026年度税制改正により、事業承継税制の特例措置に重要な変更が加わりました。経営者目線で押さえるべき要点を解説。" },
  { id: 3, tag: "コラム", date: "2026.04.05", title: "M&Aを検討し始めたら、最初にやるべき5つのこと", excerpt: "突然の譲渡打診、漠然とした引退検討。M&Aを意識し始めた段階で経営者が取るべきステップを順を追って解説します。" },
  { id: 4, tag: "セミナー", date: "2026.03.15", title: "中小M&Aの『成約後』を考える経営者向けセミナー情報", excerpt: "成約はゴールではなくスタート。PMI（統合プロセス）の実務と、経営者として準備すべき事項を解説します。" },
  { id: 5, tag: "コラム", date: "2026.03.05", title: "後継者不在の中小企業がM&Aを選ぶ理由", excerpt: "日本の中小企業の約半数が後継者不在といわれています。M&Aが事業承継の有力な選択肢になった背景を解説します。" },
  { id: 6, tag: "コラム", date: "2026.02.20", title: "PEファンドへの売却 — メリットと注意点", excerpt: "事業会社への譲渡とは異なる、PEファンドへの売却。経営の継続性・社員雇用・企業価値向上の観点から解説します。" },
  { id: 7, tag: "コラム", date: "2026.02.08", title: "M&Aにかかる費用を徹底解説 — レーマン方式とは", excerpt: "M&Aの報酬体系として広く使われるレーマン方式。計算方法と、完全成功報酬制のメリットをわかりやすく解説します。" },
  { id: 8, tag: "セミナー", date: "2026.01.25", title: "IT・SaaS企業のためのM&A戦略セミナー情報", excerpt: "成長期SaaSベンチャーが直面する、資本政策・事業売却・アライアンスの選択肢を整理します。" },
  { id: 9, tag: "コラム", date: "2026.01.12", title: "従業員の雇用を守るM&A — 売り手が交渉で押さえるべきポイント", excerpt: "M&Aにおいて、従業員の雇用継続は多くの経営者が最も重視する条件です。交渉で実現するための実践的なポイントを解説。" },
];

function PageNews({ navigate }) {
  const [filter, setFilter] = useState("すべて");
  const tags = ["すべて", "プレスリリース", "コラム", "セミナー", "メディア"];
  const list = filter === "すべて" ? NEWS : NEWS.filter((n) => n.tag === filter);

  const featured = NEWS.find((n) => n.featured) || NEWS[0];
  const rest = list.filter((n) => n.id !== featured.id);

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
            <div className="ph ph-dark featured-news-img" data-label="Featured image — placeholder" />
            <div className="featured-news-body">
              <div className="news-meta">
                <span className="tag tag-navy">{featured.tag}</span>
                <span className="news-date-inline font-serif-en">{featured.date}</span>
              </div>
              <h3 className="font-serif-jp" style={{ fontSize: 34, lineHeight: 1.55, margin: "24px 0 24px" }}>{featured.title}</h3>
              <p style={{ color: "var(--ink-500)", lineHeight: 2, fontSize: 14.5 }}>{featured.excerpt}</p>
              <div style={{ marginTop: 32 }}>
                <button className="btn btn-ghost">続きを読む <span className="arrow" /></button>
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
              <article key={n.id} className="news-card card">
                <div className="ph news-card-img" data-label="thumbnail" />
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

          <div className="pagination">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span style={{ color: "var(--ink-300)" }}>…</span>
            <button className="page-btn">12</button>
            <button className="page-btn">→</button>
          </div>
        </div>
      </section>
    </main>
  );
}

window.PageNews = PageNews;
