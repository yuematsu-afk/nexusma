/* News / Column page */

const NEWS = [
  { id: 1, tag: "プレスリリース", date: "2026.05.01", title: "NexusM&Aアドバイザリー、サービス開始のお知らせ", excerpt: "京都府京都市を拠点に、中小企業の事業承継・M&Aを専門とする独立系アドバイザリーサービスを開始いたしました。", featured: true, body: ["NexusM&Aは、中小企業の事業承継と成長戦略M&Aを支援する独立系アドバイザリーとしてサービス提供を開始しました。", "売り手・買い手のいずれか一方に偏らず、経営者の納得と取引後の継続性を重視します。", "初回相談では、譲渡を前提にせず、社内改善・提携・第三者承継など複数の選択肢を整理します。"] },
  { id: 2, tag: "コラム", date: "2026.04.20", title: "事業承継税制の改正ポイント — 経営者が今押さえるべき3つの論点", excerpt: "事業承継税制の特例措置について、経営者目線で押さえるべき要点を解説。", body: ["事業承継税制は、株式承継時の税負担を抑えるための制度ですが、要件や手続きは複雑です。", "重要なのは、税制の適用可否だけでなく、後継者の意思、経営体制、資金繰りを同時に確認することです。", "制度利用を検討する前に、親族内承継、社内承継、第三者承継のどれが現実的かを整理しましょう。"] },
  { id: 3, tag: "コラム", date: "2026.04.05", title: "M&Aを検討し始めたら、最初にやるべき5つのこと", excerpt: "M&Aを意識し始めた段階で経営者が取るべきステップを順を追って解説します。", body: ["最初に必要なのは、売却価格を調べることではなく、何を守りたいかを明確にすることです。", "従業員、取引先、社名、経営者保証、引退時期の優先順位を整理すると、候補先の選び方が変わります。", "そのうえで、財務資料、主要契約、組織図、事業の強みを準備していきます。"] },
  { id: 4, tag: "セミナー", date: "2026.03.15", title: "中小M&Aの『成約後』を考える経営者向けセミナー情報", excerpt: "PMIの実務と、経営者として準備すべき事項を解説します。", body: ["M&Aは成約がゴールではありません。従業員、顧客、管理体制が自然に移行するまでが重要です。", "セミナーでは、成約後100日で確認すべき論点と、売り手経営者が残る場合の役割設計を扱います。", "参加希望の方は、お問い合わせページからご連絡ください。"] },
  { id: 5, tag: "コラム", date: "2026.03.05", title: "後継者不在の中小企業がM&Aを選ぶ理由", excerpt: "M&Aが事業承継の有力な選択肢になった背景を解説します。", body: ["後継者不在は、廃業か売却かの二択ではありません。段階的な承継や資本提携も選択肢になります。", "重要なのは、会社を誰に渡すかより先に、何を残したいかを決めることです。", "早い段階で選択肢を比較すれば、社内育成や外部採用と並行して検討できます。"] },
  { id: 6, tag: "コラム", date: "2026.02.20", title: "PEファンドへの売却 — メリットと注意点", excerpt: "PEファンドへの売却を経営の継続性・社員雇用・企業価値向上の観点から解説します。", body: ["PEファンドは、事業の成長余地を評価して投資する買い手候補の一つです。", "一方で、投資期間や成長計画への期待があるため、経営者の残り方や社員への説明が重要になります。", "事業会社への譲渡と比較し、自社に合う買い手像を整理することが必要です。"] },
  { id: 7, tag: "コラム", date: "2026.02.08", title: "M&Aにかかる費用を徹底解説 — レーマン方式とは", excerpt: "報酬体系として広く使われるレーマン方式と完全成功報酬制のメリットを解説します。", body: ["M&A仲介・FAの報酬は、着手金、中間金、成功報酬に分かれることがあります。", "レーマン方式は、譲渡金額などに応じて段階的に料率を定める計算方法です。", "契約前には、最低報酬、対象金額、支払時期を必ず確認しましょう。"] },
  { id: 8, tag: "セミナー", date: "2026.01.25", title: "IT・SaaS企業のためのM&A戦略セミナー情報", excerpt: "SaaSベンチャーの資本政策・事業売却・アライアンスの選択肢を整理します。", body: ["SaaS企業のM&Aでは、売上規模だけでなくARR、解約率、顧客獲得効率が重視されます。", "資本業務提携や一部株式譲渡など、創業者が残る形も検討できます。", "成長資金と経営自由度のバランスを見ながら選択肢を比較します。"] },
  { id: 9, tag: "コラム", date: "2026.01.12", title: "従業員の雇用を守るM&A — 売り手が交渉で押さえるべきポイント", excerpt: "従業員の雇用継続を交渉で実現するためのポイントを解説。", body: ["従業員の雇用継続は、多くの売り手経営者が重視する条件です。", "候補先選定の段階から、待遇、勤務地、役職、説明時期を確認する必要があります。", "条件を守るには、希望事項を早期に明文化し、基本合意前から交渉に組み込むことが重要です。"] },
];

function PageNews({ navigate }) {
  const [filter, setFilter] = useState("すべて");
  const [selectedNews, setSelectedNews] = useState(null);
  const tags = ["すべて", "プレスリリース", "コラム", "セミナー", "メディア"];
  const list = filter === "すべて" ? NEWS : NEWS.filter((n) => n.tag === filter);

  const featured = NEWS.find((n) => n.featured) || NEWS[0];
  const rest = list.filter((n) => n.id !== featured.id);

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
            <button className="btn btn-ghost" onClick={() => setSelectedNews(null)}>← 一覧へ戻る</button>
            <article className="article-detail">
              <div className={`ph visual article-detail-img ${getNewsVisual(selectedNews.tag)}`} />
              <div className="news-meta">
                <span className={`tag ${selectedNews.tag === "プレスリリース" ? "tag-navy" : selectedNews.tag === "コラム" ? "tag-gold" : ""}`}>{selectedNews.tag}</span>
                <span className="news-date-inline font-serif-en">{selectedNews.date}</span>
              </div>
              {selectedNews.body.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
              <div className="article-cta">
                <h3>関連するご相談</h3>
                <p>この記事の内容について、自社に当てはめて確認したい場合は無料相談をご利用ください。</p>
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
                <span className="tag tag-navy">{featured.tag}</span>
                <span className="news-date-inline font-serif-en">{featured.date}</span>
              </div>
              <h3 className="font-serif-jp" style={{ fontSize: 34, lineHeight: 1.55, margin: "24px 0 24px" }}>{featured.title}</h3>
              <p style={{ color: "var(--ink-500)", lineHeight: 2, fontSize: 14.5 }}>{featured.excerpt}</p>
              <div style={{ marginTop: 32 }}>
                <button className="btn btn-ghost" onClick={() => setSelectedNews(featured)}>続きを読む <span className="arrow" /></button>
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
              <article key={n.id} className="news-card card" onClick={() => setSelectedNews(n)}>
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
    </main>
  );
}

window.PageNews = PageNews;
