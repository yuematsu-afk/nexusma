/* Results / Case Studies page */

const CASE_STUDIES = [
  {
    id: "study-001",
    industry: "製造業",
    region: "関西",
    year: "2025",
    headline: "創業68年・特殊金属加工メーカー、大手商社グループへ。",
    summary: "後継者不在に悩む創業家から、技術と雇用を継承する商社グループへ。譲渡後3年間の経営継続条件を実現。",
    sellerType: "創業家",
    buyerType: "上場商社グループ",
    revenue: "18.4億円",
    period: "9ヶ月",
    quote: "従業員一人ひとりに納得してもらえる承継先を、最後まで諦めず探してくれた。30年来の決断に、これ以上ない伴走でした。",
    quoter: "前代表取締役・S様（70代）",
  },
  {
    id: "study-002",
    industry: "IT・SaaS",
    region: "東京",
    year: "2025",
    headline: "成長期SaaSベンチャー、戦略投資家とのアライアンス。",
    summary: "ARR成長率45%のSaaS企業が、エンタープライズチャネル獲得のため資本業務提携を選択。創業者は引き続き経営。",
    sellerType: "創業株主",
    buyerType: "PEファンド",
    revenue: "6.2億円",
    period: "6ヶ月",
    quote: "売却ではなく、次の成長のための資本構造再編という選択肢を提示してくれた点が決め手でした。",
    quoter: "代表取締役CEO・K様（40代）",
  },
  {
    id: "study-003",
    industry: "調剤薬局",
    region: "中部",
    year: "2024",
    headline: "5店舗ドミナント展開の調剤チェーン、地域医療プラットフォーマーへ。",
    summary: "地域医療連携を強化したい中堅チェーンへの譲渡。薬剤師全員の雇用継続と店舗ブランドの維持を実現。",
    sellerType: "オーナー経営者",
    buyerType: "事業会社",
    revenue: "11.8億円",
    period: "8ヶ月",
    quote: "店舗ごとに地域とのつながりがある。それを理解してくれる買い手を選べたのは、本当に大きかった。",
    quoter: "前代表・M様（60代）",
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
        title="成約実績・事例。"
        lead="掲載事例はイメージです。実際の事例は随時更新予定です。経営者の決断の背景と、成約後の歩みをお伝えします。"
        crumbs={["成約実績"]}
        navigate={navigate}
      />

      {/* Stats strip */}
      <section style={{ background: "var(--ivory)", padding: "60px 0" }}>
        <div className="container">
          <div className="results-stats">
            <div className="result-stat">
              <div className="ticker-num" style={{ fontSize: 56 }}>0<span style={{ fontSize: 28, color: "var(--ink-500)" }}>円</span></div>
              <div className="result-stat-label">着手金・中間金</div>
            </div>
            <div className="result-stat">
              <div className="ticker-num" style={{ fontSize: 56 }}>100<span style={{ fontSize: 28, color: "var(--ink-500)" }}>%</span></div>
              <div className="result-stat-label">秘密厳守</div>
            </div>
            <div className="result-stat">
              <div className="ticker-num" style={{ fontSize: 56 }}>60<span style={{ fontSize: 24, color: "var(--ink-500)" }}>以上</span></div>
              <div className="result-stat-label">対応可能業種数</div>
            </div>
            <div className="result-stat">
              <div className="ticker-num" style={{ fontSize: 56 }}>2020</div>
              <div className="result-stat-label">創業年</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample notice */}
      <section style={{ background: "var(--gold-100)", padding: "16px 0", borderBottom: "1px solid var(--gold-400)" }}>
        <div className="container">
          <p style={{ margin: 0, fontSize: 13, color: "var(--gold-700)", textAlign: "center", letterSpacing: "0.05em" }}>
            ※ 掲載事例はイメージです。実際の成約事例は随時更新予定です。
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
                  <span style={{ color: "rgba(247,242,233,0.5)", fontSize: 11, letterSpacing: "0.12em" }}>COMPLETED</span>
                </div>
              </div>
              <div className="study-body">
                <div className="study-tags">
                  <span className="tag tag-gold">{c.industry}</span>
                  <span className="tag">{c.region}</span>
                  <span className="tag tag-success">成約済</span>
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
                    <div className="meta-label">成約期間</div>
                    <div className="meta-val font-serif-en" style={{ fontStyle: "italic" }}>{c.period}</div>
                  </div>
                </div>
                <blockquote className="study-quote">
                  <div className="quote-mark font-serif-en">"</div>
                  <p>{c.quote}</p>
                  <cite>— {c.quoter}</cite>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-inner">
            <div>
              <div className="eyebrow" style={{ color: "var(--gold-400)" }}>Next Chapter</div>
              <h2 style={{ color: "var(--ivory)", fontSize: 34, marginTop: 18, lineHeight: 1.6 }}>あなたの会社の物語を、<br />次の章へ。</h2>
            </div>
            <div className="cta-actions">
              <button className="btn btn-primary" onClick={() => navigate("contact")}>
                無料相談を予約する <span className="arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

window.PageResults = PageResults;
