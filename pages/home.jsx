/* Home page */
function PageHome({ navigate }) {
  const [tlStep, setTlStep] = useState(2);

  // auto-cycle timeline
  useEffect(() => {
    const id = setInterval(() => setTlStep((s) => (s + 1) % 6), 3500);
    return () => clearInterval(id);
  }, []);

  const stats = [
    { num: "全国", suffix: "", label: "対象エリア" },
    { num: "全", suffix: "業種", label: "相談対象" },
    { num: "登録", suffix: "", label: "M&A支援機関" },
    { num: "無料", suffix: "", label: "初回相談" },
  ];

  const services = [
    {
      side: "Sellers",
      jp: "売り手の方へ",
      lead: "次代へ託す選択肢を、静かに整理する。",
      points: ["事業承継・後継者問題の整理", "従業員・取引先への影響確認", "経営者保証の扱いの検討"],
      cta: "service-seller",
    },
    {
      side: "Buyers",
      jp: "買い手の方へ",
      lead: "成長戦略に合う可能性を、丁寧に検討する。",
      points: ["投資方針・希望条件の整理", "候補案件の段階的な確認", "成約後の移行論点の整理"],
      cta: "service-buyer",
    },
  ];

  const featured = [
    { industry: "製造業", region: "関西", revenue: "12.4億円", profit: "1.8億円", emp: "48名", note: "創業52年・特殊金属加工", id: "C-1284" },
    { industry: "IT・SaaS", region: "東京", revenue: "5.6億円", profit: "1.2億円", emp: "22名", note: "BtoB業務SaaS／ARR成長率38%", id: "C-1311" },
    { industry: "調剤薬局", region: "中部", revenue: "8.9億円", profit: "0.9億円", emp: "31名", note: "5店舗ドミナント展開", id: "C-1297" },
  ];

  const news = [
    { tag: "コラム", date: "2026.06.18", title: "社長が90日不在でも会社は回るか — 事業承継の前に見るべき5つの領域" },
    { tag: "コラム", date: "2026.06.17", title: "後継者不在の会社は、いつM&Aを考え始めるべきか" },
    { tag: "コラム", date: "2026.06.10", title: "地方で後継者が見つからない会社が、最初に整理すべきこと" },
    { tag: "コラム", date: "2026.05.28", title: "人口減少地域の会社は、なぜ早めの事業承継準備が必要なのか" },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-stars" />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Private M&amp;A Advisory</div>
            <h1 className="hero-title font-serif-jp">
              企業の一生に、<br />
              <span className="hero-title-em">納得できる選択肢</span>を。
            </h1>
            <p className="hero-lead">
              中小企業の事業承継・成長戦略M&amp;Aに特化した独立系アドバイザリー。<br />
              経営者の決断に、最後まで誠実に寄り添います。
            </p>
            <div className="hero-ctas">
              <button className="btn btn-primary" onClick={() => navigate("diagnosis")}>
                匿名診断をする <span className="arrow" />
              </button>
              <button className="btn btn-primary" onClick={() => navigate("contact")}>
                無料で相談する <span className="arrow" />
              </button>
              <button className="btn btn-ghost-light" onClick={() => navigate("cases")}>
                案件イメージを見る
              </button>
            </div>
            <div className="hero-trust">
              <div className="trust-item">
                <div className="trust-num font-serif-en">事前<span style={{fontSize:14}}>説明</span></div>
                <div className="trust-label">手数料・業務範囲を明確化</div>
              </div>
              <div className="trust-sep" />
              <div className="trust-item">
                <div className="trust-num font-serif-en">秘密<span style={{fontSize:14}}>厳守</span></div>
                <div className="trust-label">秘密保持に配慮して対応</div>
              </div>
              <div className="trust-sep" />
              <div className="trust-item">
                <div className="trust-num font-serif-en">初回<span style={{fontSize:14}}>無料</span></div>
                <div className="trust-label">まずはメールでも相談可能</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card-frame">
              <div className="hero-frame-corner tl" />
              <div className="hero-frame-corner tr" />
              <div className="hero-frame-corner bl" />
              <div className="hero-frame-corner br" />
              <div className="ph ph-dark visual visual-boardroom hero-ph" data-label="Boardroom" style={{ height: 560 }}>
                <div className="hero-overlay-mark">
                  <div className="hero-overlay-num font-serif-en">N°08</div>
                  <div className="hero-overlay-text">
                    <div className="font-serif-en" style={{ fontStyle: "italic", fontSize: 13, color: "var(--gold-400)" }}>Advisory Theme</div>
                    <div style={{ color: "var(--ivory)", fontSize: 15, marginTop: 4, fontFamily: "var(--serif-jp)" }}>事業承継・成長戦略M&amp;A</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="font-serif-en">scroll</div>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section className="home-diagnosis-band">
        <div className="container">
          <div className="home-diagnosis-grid">
            <div>
              <div className="eyebrow">90 Days Continuity Check</div>
              <h2 className="font-serif-jp">
                明日から社長が90日不在でも、<br />
                会社は回りますか。
              </h2>
              <p>
                M&amp;Aを検討する前に、意思決定、顧客関係、資金情報、後継体制の偏りを10問で確認できます。
                会社名・電話番号は不要。診断しただけで営業連絡が来ることはありません。
              </p>
            </div>
            <div className="home-diagnosis-card">
              <div className="font-serif-en">Anonymous Check</div>
              <strong>10 Questions</strong>
              <span>社内改善・採用・提携・第三者承継を横並びで比較</span>
              <button className="btn btn-primary" onClick={() => navigate("diagnosis")}>
                社長不在90日診断へ <span className="arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION STATEMENT */}
      <section style={{ background: "var(--ivory)" }}>
        <div className="container narrow" style={{ textAlign: "center" }}>
          <div className="eyebrow">Our Philosophy</div>
          <h2 style={{ fontSize: 32, lineHeight: 1.9, marginTop: 30, fontWeight: 400 }}>
            M&amp;Aは、終わりではなく、<br />
            次の時代への<em style={{ fontFamily: "var(--serif-en)", color: "var(--gold-600)", fontStyle: "italic", fontWeight: 500 }}>静かな出発</em>である。
          </h2>
          <div className="gold-rule" style={{ margin: "48px auto" }} />
          <p style={{ color: "var(--ink-500)", fontSize: 15, lineHeight: 2, maxWidth: 680, margin: "0 auto" }}>
            私たちは、件数だけではなく一件一件の質を、報酬だけではなく経営者の納得を大切に考えます。<br />
            全国の中小企業経営者の重要な決断に、誠実に寄り添います。
          </p>
        </div>
      </section>

      {/* SERVICES — for sellers / for buyers */}
      <section style={{ background: "var(--white)" }}>
        <div className="container">
          <SectionHead
            eyebrow="Our Services"
            title="売り手にも、買い手にも、対等に。"
            lead="どちらか一方に偏らない助言体制。中立性を大切にしながら、双方が納得できる接点を探します。"
          />
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card" key={s.side}>
                <div className={`ph visual service-card-visual ${s.side === "Sellers" ? "visual-seller" : "visual-buyer"}`} />
                <div className="service-num font-serif-en">{`0${i + 1}`}</div>
                <div className="eyebrow">For {s.side}</div>
                <h3 className="font-serif-jp" style={{ fontSize: 28, marginTop: 18 }}>{s.jp}</h3>
                <div className="service-lead font-serif-jp">{s.lead}</div>
                <ul className="service-points">
                  {s.points.map((p) => (
                    <li key={p}><span className="point-mark">◆</span>{p}</li>
                  ))}
                </ul>
                <button className="btn btn-ghost" onClick={() => navigate(s.cta)}>
                  詳細を見る <span className="arrow" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — animated */}
      <section style={{ background: "var(--navy-900)", color: "var(--ivory)" }} className="process-section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" style={{ color: "var(--gold-400)" }}>The Process</div>
            <h2 style={{ color: "var(--ivory)", fontSize: 38, marginTop: 16 }}>成約までの、6つの歩み。</h2>
            <p className="lead" style={{ color: "rgba(247,242,233,0.65)" }}>
              期間や進め方は案件ごとに異なります。各段階で必要な確認事項を整理しながら進めます。
            </p>
          </div>
          <ProcessTimeline active={tlStep} onStep={setTlStep} />
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "var(--paper)" }}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((s) => (
              <div className="stat-item" key={s.label}>
                <div className="stat-num">
                  <span className="ticker-num" style={{ fontSize: 76 }}>{s.num}</span>
                  <span className="stat-suffix font-serif-jp">{s.suffix}</span>
                </div>
                <div className="gold-rule" style={{ margin: "20px 0" }} />
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED MANDATES */}
      <section style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="section-head" style={{ textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64 }}>
            <div>
              <div className="eyebrow">Featured Mandates</div>
              <h2 style={{ fontSize: 38, marginTop: 16 }}>掲載イメージ案件。</h2>
            </div>
            <button className="btn btn-ghost" onClick={() => navigate("cases")}>
              案件イメージを見る <span className="arrow" />
            </button>
          </div>
          <div className="feature-grid">
            {featured.map((c) => (
              <article key={c.id} className="feature-card card" onClick={() => navigate("cases")}>
                <div className={`ph visual feature-img ${getVisualClass(c.industry)}`} data-label="Industry photograph" />
                <div className="feature-body">
                  <div className="feature-meta">
                    <span className="tag tag-gold">{c.industry}</span>
                    <span className="tag">{c.region}</span>
                  </div>
                  <h4 className="font-serif-jp" style={{ fontSize: 17, lineHeight: 1.7, margin: "20px 0 24px" }}>
                    {c.note}
                  </h4>
                  <div className="feature-figs">
                    <div className="fig">
                      <div className="fig-label">売上高</div>
                      <div className="fig-val font-serif-en">{c.revenue}</div>
                    </div>
                    <div className="fig">
                      <div className="fig-label">営業利益</div>
                      <div className="fig-val font-serif-en">{c.profit}</div>
                    </div>
                    <div className="fig">
                      <div className="fig-label">従業員</div>
                      <div className="fig-val font-serif-en">{c.emp}</div>
                    </div>
                  </div>
                  <div className="feature-foot">
                    <span className="font-mono" style={{ fontSize: 11, color: "var(--ink-300)", letterSpacing: "0.1em" }}>{c.id}</span>
                    <span style={{ fontSize: 12, color: "var(--gold-700)" }}>詳細を見る →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ConversionCTA
        navigate={navigate}
        title={<React.Fragment>経営の重要な決断は、<br />信頼できる相手と。</React.Fragment>}
        lead="ご相談内容は秘密保持に配慮して取り扱います。必要に応じて守秘義務契約を締結します。初回のご相談は無料です。"
      />

      {/* NEWS */}
      <section style={{ background: "var(--paper)" }}>
        <div className="container">
          <div className="section-head" style={{ textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56 }}>
            <div>
              <div className="eyebrow">News & Insights</div>
              <h2 style={{ fontSize: 38, marginTop: 16 }}>お知らせ・コラム。</h2>
            </div>
            <button className="btn btn-ghost" onClick={() => navigate("news")}>
              一覧を見る <span className="arrow" />
            </button>
          </div>
          <div className="news-list">
            {news.map((n, i) => (
              <a key={i} className="news-row" onClick={() => navigate("news")}>
                <span className="news-date font-serif-en">{n.date}</span>
                <span className={`tag ${n.tag === "プレスリリース" ? "tag-navy" : n.tag === "コラム" ? "tag-gold" : ""}`}>{n.tag}</span>
                <span className="news-title">{n.title}</span>
                <span className="news-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

window.PageHome = PageHome;
