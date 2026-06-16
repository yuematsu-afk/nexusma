/* Home page */
function PageHome({ navigate }) {
  const [tlStep, setTlStep] = useState(2);

  // auto-cycle timeline
  useEffect(() => {
    const id = setInterval(() => setTlStep((s) => (s + 1) % 6), 3500);
    return () => clearInterval(id);
  }, []);

  const stats = [
    { num: "0", suffix: "円", label: "着手金・中間金" },
    { num: "100", suffix: "%", label: "秘密厳守" },
    { num: "60", suffix: "以上", label: "対応可能業種数" },
    { num: "2020", suffix: "年", label: "創業" },
  ];

  const services = [
    {
      side: "Sellers",
      jp: "売り手の方へ",
      lead: "次代へ託す、最良の選択を。",
      points: ["事業承継・後継者問題の解決", "従業員・取引先を守る譲渡", "経営者保証の解除支援"],
      cta: "service-seller",
    },
    {
      side: "Buyers",
      jp: "買い手の方へ",
      lead: "戦略的成長のための、確かな案件を。",
      points: ["独自ソーシングによる非公開案件", "業界別マッチング精度", "PMIまで伴走"],
      cta: "service-buyer",
    },
  ];

  const featured = [
    { industry: "製造業", region: "関西", revenue: "12.4億円", profit: "1.8億円", emp: "48名", note: "創業52年・特殊金属加工", id: "C-1284" },
    { industry: "IT・SaaS", region: "東京", revenue: "5.6億円", profit: "1.2億円", emp: "22名", note: "BtoB業務SaaS／ARR成長率38%", id: "C-1311" },
    { industry: "調剤薬局", region: "中部", revenue: "8.9億円", profit: "0.9億円", emp: "31名", note: "5店舗ドミナント展開", id: "C-1297" },
  ];

  const news = [
    { tag: "プレスリリース", date: "2026.05.01", title: "NexusM&Aアドバイザリー、サービス開始のお知らせ" },
    { tag: "コラム", date: "2026.04.20", title: "事業承継税制の改正ポイント — 経営者が今押さえるべき3つの論点" },
    { tag: "コラム", date: "2026.04.05", title: "M&Aを検討し始めたら、最初にやるべき5つのこと" },
    { tag: "セミナー", date: "2026.03.15", title: "中小M&Aの『成約後』を考える経営者向けセミナー情報" },
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
            <div className="eyebrow">Private M&amp;A Advisory · Since 2020</div>
            <h1 className="hero-title font-serif-jp">
              企業の一生に、<br />
              <span className="hero-title-em">最善の選択肢</span>を。
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
                案件を見る
              </button>
            </div>
            <div className="hero-trust">
              <div className="trust-item">
                <div className="trust-num font-serif-en">完全<span style={{fontSize:14}}>成功報酬</span></div>
                <div className="trust-label">着手金・中間金 ¥0</div>
              </div>
              <div className="trust-sep" />
              <div className="trust-item">
                <div className="trust-num font-serif-en">秘密<span style={{fontSize:14}}>厳守</span></div>
                <div className="trust-label">守秘義務契約のもと対応</div>
              </div>
              <div className="trust-sep" />
              <div className="trust-item">
                <div className="trust-num font-serif-en">初回<span style={{fontSize:14}}>無料</span></div>
                <div className="trust-label">相談・企業評価無料</div>
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
                    <div className="font-serif-en" style={{ fontStyle: "italic", fontSize: 13, color: "var(--gold-400)" }}>Featured Mandate</div>
                    <div style={{ color: "var(--ivory)", fontSize: 15, marginTop: 4, fontFamily: "var(--serif-jp)" }}>関西・精密部品メーカー譲渡</div>
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
            私たちは、件数ではなく一件一件の質を、報酬ではなく経営者の納得を、最優先に考えます。<br />
            京都を拠点に、全国の中小企業経営者の重要な決断に、誠実に寄り添います。
          </p>
        </div>
      </section>

      {/* SERVICES — for sellers / for buyers */}
      <section style={{ background: "var(--white)" }}>
        <div className="container">
          <SectionHead
            eyebrow="Our Services"
            title="売り手にも、買い手にも、対等に。"
            lead="どちらか一方に偏らない助言体制。中立性こそが、双方にとっての最大価値だと考えています。"
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
              ご相談から成約・統合まで、平均8〜14ヶ月。すべての段階で専任チームが伴走します。
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
              <h2 style={{ fontSize: 38, marginTop: 16 }}>本日の注目案件。</h2>
            </div>
            <button className="btn btn-ghost" onClick={() => navigate("cases")}>
              すべての案件 <span className="arrow" />
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

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-inner">
            <div>
              <div className="eyebrow" style={{ color: "var(--gold-400)" }}>Confidential Consultation</div>
              <h2 style={{ color: "var(--ivory)", fontSize: 36, marginTop: 18, lineHeight: 1.6 }}>
                経営の重要な決断は、<br />信頼できる相手と。
              </h2>
              <p style={{ color: "rgba(247,242,233,0.7)", marginTop: 22, fontSize: 14, maxWidth: 480 }}>
                完全秘密厳守。情報は守秘義務契約のもとで取り扱います。初回のご相談は無料です。
              </p>
            </div>
            <div className="cta-actions">
              <button className="btn btn-ghost-light" onClick={() => navigate("diagnosis")}>
                まず匿名診断する
              </button>
              <button className="btn btn-primary" onClick={() => navigate("contact")}>
                無料相談を予約する <span className="arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>

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
