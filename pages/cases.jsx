/* Cases listing — filterable card grid */

const ALL_CASES = [
  { id: "C-1311", industry: "IT・SaaS", region: "東京", revenue: "5.6億円", profit: "1.2億円", emp: "22名", years: "創業9年", note: "BtoB業務SaaS／ARR成長率38%・解約率1.2%", tags: ["成長企業", "海外展開可"], status: "新着" },
  { id: "C-1297", industry: "調剤薬局", region: "中部", revenue: "8.9億円", profit: "0.9億円", emp: "31名", years: "創業22年", note: "5店舗ドミナント展開・近隣医療機関との関係良好", tags: ["事業承継", "安定収益"] },
  { id: "C-1284", industry: "製造業", region: "関西", revenue: "12.4億円", profit: "1.8億円", emp: "48名", years: "創業52年", note: "特殊金属加工／航空宇宙向け一次サプライヤー認定", tags: ["技術力", "事業承継"] },
  { id: "C-1276", industry: "建設・設備", region: "九州", revenue: "6.2億円", profit: "0.6億円", emp: "26名", years: "創業38年", note: "公共インフラ向け電気設備工事／自治体との取引実績多数", tags: ["地域密着"] },
  { id: "C-1268", industry: "食品製造", region: "東北", revenue: "3.8億円", profit: "0.5億円", emp: "18名", years: "創業65年", note: "地域ブランド和菓子／百貨店・空港免税店に販路", tags: ["ブランド力", "事業承継"] },
  { id: "C-1253", industry: "物流・倉庫", region: "東京", revenue: "21.5億円", profit: "2.4億円", emp: "78名", years: "創業31年", note: "首都圏冷蔵倉庫・3PL／大手食品メーカー取引", tags: ["インフラ"] },
  { id: "C-1241", industry: "教育・スクール", region: "関西", revenue: "4.4億円", profit: "0.7億円", emp: "29名", years: "創業18年", note: "受験指導塾・教室数12／講師定着率高", tags: ["成長企業"], status: "成約間近" },
  { id: "C-1234", industry: "美容・サロン", region: "東京", revenue: "9.1億円", profit: "1.4億円", emp: "55名", years: "創業14年", note: "都内ヘアサロン8店舗／顧客リピート率82%", tags: ["ブランド力"] },
  { id: "C-1228", industry: "農業・食品", region: "北海道", revenue: "7.3億円", profit: "0.8億円", emp: "24名", years: "創業27年", note: "有機野菜直販／首都圏レストラン直接取引", tags: ["6次産業化"] },
  { id: "C-1219", industry: "ITサービス", region: "東京", revenue: "11.2億円", profit: "1.6億円", emp: "63名", years: "創業16年", note: "受託開発・SES／自社プロダクトへのピボット途上", tags: ["成長企業", "技術力"] },
  { id: "C-1208", industry: "卸売・商社", region: "中部", revenue: "18.7億円", profit: "1.1億円", emp: "37名", years: "創業46年", note: "産業資材専門商社／中部圏シェア上位", tags: ["事業承継"] },
  { id: "C-1195", industry: "医療・介護", region: "関西", revenue: "14.6億円", profit: "1.9億円", emp: "90名程度", years: "設立20年程度", note: "訪問介護＋デイサービス4拠点／黒字経営継続", tags: ["安定収益"], status: "新着" },
];

const INDUSTRIES = ["すべて", "IT・SaaS", "製造業", "調剤薬局", "建設・設備", "食品製造", "物流・倉庫", "教育・スクール", "美容・サロン", "農業・食品", "ITサービス", "卸売・商社", "医療・介護"];
const REGIONS = ["すべて", "東京", "関西", "中部", "九州", "東北", "北海道"];
const REVENUE_BANDS = ["すべて", "〜3億円", "3〜10億円", "10〜30億円", "30億円〜"];

function inBand(rev, band) {
  if (band === "すべて") return true;
  const n = parseFloat(rev);
  if (band === "〜3億円") return n < 3;
  if (band === "3〜10億円") return n >= 3 && n < 10;
  if (band === "10〜30億円") return n >= 10 && n < 30;
  if (band === "30億円〜") return n >= 30;
  return true;
}

function PageCases({ navigate }) {
  const [ind, setInd] = useState("すべて");
  const [reg, setReg] = useState("すべて");
  const [band, setBand] = useState("すべて");
  const [sort, setSort] = useState("新着順");
  const [selectedCase, setSelectedCase] = useState(null);

  let cases = ALL_CASES.filter((c) =>
    (ind === "すべて" || c.industry === ind) &&
    (reg === "すべて" || c.region === reg) &&
    inBand(c.revenue, band)
  );
  if (sort === "売上高 高い順") {
    cases = [...cases].sort((a, b) => parseFloat(b.revenue) - parseFloat(a.revenue));
  } else if (sort === "売上高 低い順") {
    cases = [...cases].sort((a, b) => parseFloat(a.revenue) - parseFloat(b.revenue));
  }

  if (selectedCase) {
    return (
      <main>
        <PageHero
          eyebrow="Mandate Detail"
          title={`${selectedCase.industry}案件の掲載イメージ。`}
          lead="掲載内容はイメージです。実際の取り扱い案件は、ご相談後に個別にご案内します。"
          crumbs={["案件イメージ", selectedCase.id]}
          navigate={navigate}
        />
        <section style={{ background: "var(--paper)" }}>
          <div className="container">
            <button className="btn btn-ghost" onClick={() => setSelectedCase(null)}>← 案件イメージへ戻る</button>
            <div className="case-detail-layout">
              <div className={`ph visual case-detail-image ${getVisualClass(selectedCase.industry)}`} />
              <div className="case-detail-panel">
                <div className="case-meta">
                  <span className="tag tag-gold">{selectedCase.industry}</span>
                  <span className="tag">{selectedCase.region}</span>
                  <span className="tag">{selectedCase.years}</span>
                  {selectedCase.status && <span className="tag tag-new">{selectedCase.status}</span>}
                </div>
                <h2>{selectedCase.note}</h2>
                <p>
                  当該情報は、業種・規模・論点を理解しやすくするための掲載イメージです。
                  実際の案件情報は、秘密保持や開示範囲を確認したうえで個別にご案内します。
                </p>
                <div className="case-detail-metrics">
                  <div><span>売上高</span><strong>{selectedCase.revenue}</strong></div>
                  <div><span>営業利益</span><strong>{selectedCase.profit}</strong></div>
                  <div><span>従業員</span><strong>{selectedCase.emp}</strong></div>
                  <div><span>地域</span><strong>{selectedCase.region}</strong></div>
                </div>
                <h3>想定される買い手像</h3>
                <ul className="detail-list">
                  <li>既存事業と隣接する顧客基盤・技術を取り込みたい企業</li>
                  <li>地域展開またはロールアップを進めたい企業</li>
                  <li>雇用と取引先関係の維持を重視できる企業</li>
                </ul>
                <h3>次のステップ</h3>
                <p>
                  買い手としての希望条件がある場合は、問い合わせフォームからご相談ください。
                  条件に合う可能性がある場合に、段階的に確認を進めます。
                </p>
                <button className="btn btn-primary" onClick={() => navigate("contact")}>詳細確認を相談する <span className="arrow" /></button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <PageHero
        eyebrow="Mandates"
        title="M&A案件イメージ。"
        lead="掲載案件はイメージ表示です。実際の取り扱い案件は、ご相談後に個別にご案内いたします。"
        crumbs={["案件イメージ"]}
        navigate={navigate}
      />

      {/* Filters */}
      <section style={{ background: "var(--ivory)", padding: "60px 0 40px" }}>
        <div className="container">
          <div className="filter-bar">
            <div className="filter-group">
              <label>業種</label>
              <div className="chips">
                {INDUSTRIES.slice(0, 8).map((x) => (
                  <button key={x} className={`chip ${ind === x ? "selected" : ""}`} onClick={() => setInd(x)}>{x}</button>
                ))}
              </div>
            </div>
            <div className="filter-row">
              <div className="filter-group">
                <label>地域</label>
                <div className="chips">
                  {REGIONS.map((x) => (
                    <button key={x} className={`chip ${reg === x ? "selected" : ""}`} onClick={() => setReg(x)}>{x}</button>
                  ))}
                </div>
              </div>
              <div className="filter-group">
                <label>売上規模</label>
                <div className="chips">
                  {REVENUE_BANDS.map((x) => (
                    <button key={x} className={`chip ${band === x ? "selected" : ""}`} onClick={() => setBand(x)}>{x}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample notice */}
      <section style={{ background: "var(--gold-100)", padding: "16px 0", borderBottom: "1px solid var(--gold-400)" }}>
        <div className="container">
          <p style={{ margin: 0, fontSize: 13, color: "var(--gold-700)", textAlign: "center", letterSpacing: "0.05em" }}>
            ※ 掲載案件はイメージです。実際の取り扱い案件は、ご相談後に個別にご案内いたします。
          </p>
        </div>
      </section>

      {/* Result count + sort */}
      <section style={{ background: "var(--paper)", padding: "32px 0" }}>
        <div className="container">
          <div className="result-bar">
            <div className="result-count">
              <span className="ticker-num" style={{ fontSize: 32, color: "var(--gold-700)" }}>{cases.length}</span>
              <span style={{ marginLeft: 8, color: "var(--ink-500)", fontSize: 13, letterSpacing: "0.1em" }}>件の案件</span>
            </div>
            <div className="sort-box">
              <label style={{ fontSize: 12, color: "var(--ink-500)", letterSpacing: "0.1em", marginRight: 12 }}>並び替え</label>
              <select value={sort} onChange={(e) => setSort(e.target.value)} style={{ padding: "8px 14px", border: "1px solid var(--ink-200)", background: "var(--white)", fontSize: 13 }}>
                <option>新着順</option>
                <option>売上高 高い順</option>
                <option>売上高 低い順</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section style={{ background: "var(--paper)", paddingTop: 0 }}>
        <div className="container">
          <div className="case-grid">
            {cases.map((c) => (
              <article key={c.id} className="case-card card">
                <div className={`case-img ph visual ${getVisualClass(c.industry)}`} data-label="Industry photograph">
                  {c.status && <span className={`case-status tag ${c.status === "新着" ? "tag-new" : "tag-success"}`}>{c.status}</span>}
                </div>
                <div className="case-body">
                  <div className="case-meta">
                    <span className="tag tag-gold">{c.industry}</span>
                    <span className="tag">{c.region}</span>
                    <span className="tag">{c.years}</span>
                  </div>
                  <h4 className="font-serif-jp" style={{ fontSize: 16, lineHeight: 1.8, margin: "20px 0 22px" }}>{c.note}</h4>
                  <div className="case-figs">
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
                  <div className="case-extra-tags">
                    {c.tags.map((t) => <span key={t} className="extra-tag">#{t}</span>)}
                  </div>
                  <div className="case-foot">
                    <span className="font-mono" style={{ fontSize: 11, color: "var(--ink-300)", letterSpacing: "0.1em" }}>{c.id}</span>
                    <button className="case-detail-btn" onClick={() => setSelectedCase(c)}>詳細を見る →</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {cases.length === 0 && (
            <div style={{ textAlign: "center", padding: "100px 0", color: "var(--ink-500)" }}>
              条件に合致する案件がありません。フィルタを調整してください。
            </div>
          )}
        </div>
      </section>

      <ConversionCTA
        navigate={navigate}
        eyebrow="Premium Mandates"
        title="買い手候補としてのご相談。"
        lead="掲載案件はイメージです。投資基準をご登録いただき、条件に合う可能性がある場合に個別にご案内します。"
        primaryLabel="買い手登録を行う"
        secondaryLabel="まず匿名診断を見る"
        note="実在案件の詳細は、秘密保持と開示範囲を確認したうえで個別に取り扱います。"
      />
    </main>
  );
}

window.PageCases = PageCases;
