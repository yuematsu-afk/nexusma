/* Results / Case Studies page */

const CASE_STUDIES = [
  {
    id: "study-001",
    industry: "製造業",
    region: "関西",
    year: "Sample",
    headline: "創業68年・特殊金属加工メーカー、大手商社グループへ。",
    summary: "後継者不在に悩む創業家が、技術・雇用・取引先への影響を確認しながら第三者承継を検討するケース。",
    sellerType: "創業家",
    buyerType: "上場商社グループ",
    revenue: "18.4億円",
    period: "個別進行",
    quote: "検討論点：雇用継続、技術承継、経営者保証、取引先への説明時期。",
    quoter: "掲載イメージ",
  },
  {
    id: "study-002",
    industry: "IT・SaaS",
    region: "東京",
    year: "Sample",
    headline: "成長期SaaSベンチャー、戦略投資家とのアライアンス。",
    summary: "SaaS企業が、販路拡大や資本政策の選択肢として資本業務提携を検討するケース。",
    sellerType: "創業株主",
    buyerType: "PEファンド",
    revenue: "6.2億円",
    period: "個別進行",
    quote: "検討論点：成長資金、創業者の残り方、顧客基盤、プロダクト開発体制。",
    quoter: "掲載イメージ",
  },
  {
    id: "study-003",
    industry: "調剤薬局",
    region: "中部",
    year: "Sample",
    headline: "5店舗ドミナント展開の調剤チェーン、地域医療プラットフォーマーへ。",
    summary: "地域医療との関係を維持しながら、調剤薬局チェーンの承継を検討するケース。",
    sellerType: "オーナー経営者",
    buyerType: "事業会社",
    revenue: "11.8億円",
    period: "個別進行",
    quote: "検討論点：地域医療との関係、薬剤師の雇用、店舗ブランド、情報開示範囲。",
    quoter: "掲載イメージ",
  },
];

function PageResults({ navigate }) {
  const [tab, setTab] = useState("all");
  const filtered = tab === "all" ? CASE_STUDIES : CASE_STUDIES.filter((c) => c.industry === tab);
  const industries = ["all", ...new Set(CASE_STUDIES.map((c) => c.industry))];

  return (
    <main>
      <PageHero
        eyebrow="Case Studies"
        title="事例イメージ。"
        lead="掲載事例は、相談内容をイメージしやすくするためのサンプルです。実際の成約実績を示すものではありません。"
        crumbs={["成約実績"]}
        navigate={navigate}
      />

      {/* Stats strip */}
      <section style={{ background: "var(--ivory)", padding: "60px 0" }}>
        <div className="container">
          <div className="results-stats">
            <div className="result-stat">
              <div className="ticker-num" style={{ fontSize: 42 }}>秘密</div>
              <div className="result-stat-label">秘密厳守</div>
            </div>
            <div className="result-stat">
              <div className="ticker-num" style={{ fontSize: 42 }}>全国</div>
              <div className="result-stat-label">対象地域</div>
            </div>
            <div className="result-stat">
              <div className="ticker-num" style={{ fontSize: 42 }}>全業種</div>
              <div className="result-stat-label">相談対象</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample notice */}
      <section style={{ background: "var(--gold-100)", padding: "16px 0", borderBottom: "1px solid var(--gold-400)" }}>
        <div className="container">
          <p style={{ margin: 0, fontSize: 13, color: "var(--gold-700)", textAlign: "center", letterSpacing: "0.05em" }}>
            ※ 掲載事例はイメージです。実際の成約実績、取引条件、顧客の声を示すものではありません。
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section style={{ background: "var(--paper)", paddingTop: 80, paddingBottom: 40 }}>
        <div className="container">
          <div className="tabs">
            {industries.map((i) => (
              <button key={i} className={`tab ${tab === i ? "active" : ""}`} onClick={() => setTab(i)}>
                {i === "all" ? "すべての事例" : i}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section style={{ background: "var(--paper)", paddingTop: 40 }}>
        <div className="container">
          {filtered.map((c, i) => (
            <article key={c.id} className={`study-row ${i % 2 === 1 ? "reverse" : ""}`}>
              <div className="study-img-wrap">
                <div className={`ph ph-dark visual study-img ${getVisualClass(c.industry)}`} data-label={`${c.industry}`}>
                  <div className="study-img-num font-serif-en">N°{String(i + 1).padStart(2, "0")}</div>
                </div>
                <div className="study-img-bar">
                  <span className="font-serif-en" style={{ fontStyle: "italic", color: "var(--gold-400)", fontSize: 13 }}>{c.year}</span>
                  <span style={{ color: "rgba(247,242,233,0.5)", fontSize: 11, letterSpacing: "0.12em" }}>SAMPLE</span>
                </div>
              </div>
              <div className="study-body">
                <div className="study-tags">
                  <span className="tag tag-gold">{c.industry}</span>
                  <span className="tag">{c.region}</span>
                  <span className="tag tag-success">掲載イメージ</span>
                </div>
                <h3 className="font-serif-jp" style={{ fontSize: 30, lineHeight: 1.65, margin: "28px 0 24px" }}>{c.headline}</h3>
                <p className="study-summary">{c.summary}</p>
                <div className="study-deal-meta">
                  <div className="meta-item">
                    <div className="meta-label">譲渡側</div>
                    <div className="meta-val">{c.sellerType}</div>
                  </div>
                  <div className="meta-item">
                    <div className="meta-label">譲受側</div>
                    <div className="meta-val">{c.buyerType}</div>
                  </div>
                  <div className="meta-item">
                    <div className="meta-label">売上規模</div>
                    <div className="meta-val font-serif-en" style={{ fontStyle: "italic" }}>{c.revenue}</div>
                  </div>
                  <div className="meta-item">
                    <div className="meta-label">想定期間</div>
                    <div className="meta-val font-serif-en" style={{ fontStyle: "italic" }}>{c.period}</div>
                  </div>
                </div>
                <blockquote className="study-quote">
                  <p>{c.quote}</p>
                  <cite>— {c.quoter}</cite>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ConversionCTA
        navigate={navigate}
        eyebrow="Next Chapter"
        title={<React.Fragment>あなたの会社の物語を、<br />次の章へ。</React.Fragment>}
        lead="売却・承継・成長戦略のどれが合うか、最初の段階から整理できます。まだ決めていない状態でも大丈夫です。"
      />
    </main>
  );
}

window.PageResults = PageResults;
