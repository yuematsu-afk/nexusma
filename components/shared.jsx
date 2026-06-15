/* Shared components: Header, Footer, Brand, ProcessTimeline, etc. */
const { useState, useEffect, useRef } = React;

function Brand({ size = "default", onClick }) {
  return (
    <div className="brand" onClick={onClick} style={{ cursor: onClick ? "pointer" : "default" }}>
      <div className="brand-mark">N</div>
      <div className="brand-name">
        NexusM&amp;A
        <span className="sub">PRIVATE ADVISORY · EST. 2020</span>
      </div>
    </div>
  );
}

function Header({ route, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { id: "service-seller", label: "売り手の方へ" },
    { id: "service-buyer", label: "買い手の方へ" },
    { id: "cases", label: "案件一覧" },
    { id: "results", label: "成約実績" },
    { id: "pricing", label: "料金プラン" },
    { id: "company", label: "会社概要" },
    { id: "news", label: "ニュース" },
    { id: "diagnosis", label: "匿名診断" },
  ];
  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <Brand onClick={() => navigate("home")} />
        <nav className="primary">
          {links.map((l) => (
            <span
              key={l.id}
              className={`nav-link ${route === l.id ? "active" : ""}`}
              onClick={() => navigate(l.id)}
            >
              {l.label}
            </span>
          ))}
          <button className="nav-cta" onClick={() => navigate("contact")}>
            無料相談
          </button>
        </nav>
      </div>
    </header>
  );
}

function PageHero({ eyebrow, title, lead, crumbs, navigate }) {
  return (
    <div className="page-hero">
      <div className="container">
        {crumbs && (
          <div className="breadcrumb">
            <a onClick={() => navigate("home")}>Home</a>
            {crumbs.map((c, i) => (
              <React.Fragment key={i}>
                <span className="sep">/</span>
                <span>{c}</span>
              </React.Fragment>
            ))}
          </div>
        )}
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="font-serif-jp" style={{ marginTop: 22 }}>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </div>
  );
}

function SectionHead({ eyebrow, title, lead, align = "center" }) {
  return (
    <div className="section-head" style={{ textAlign: align }}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="font-serif-jp" style={{ marginTop: 16 }}>{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

function getVisualClass(industry = "") {
  if (industry.includes("IT") || industry.includes("SaaS")) return "visual-saas";
  if (industry.includes("製造") || industry.includes("建設") || industry.includes("卸売")) return "visual-manufacturing";
  if (industry.includes("薬局") || industry.includes("医療") || industry.includes("介護")) return "visual-healthcare";
  if (industry.includes("物流")) return "visual-logistics";
  if (industry.includes("食品") || industry.includes("農業") || industry.includes("飲食")) return "visual-food";
  return "visual-office";
}

function getNewsVisual(tag = "") {
  if (tag.includes("セミナー")) return "visual-boardroom";
  if (tag.includes("コラム")) return "visual-office";
  if (tag.includes("プレス")) return "visual-saas";
  return "visual-office";
}

function Footer({ navigate }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>
              京都を拠点に、中小企業の事業承継・M&amp;Aを専門とする独立系アドバイザリー・ファームです。経営者の重要な決断に、誠実に寄り添います。
            </p>
          </div>
          <div>
            <h5>サービス</h5>
            <ul>
              <li><a onClick={() => navigate("service-seller")}>売り手の方へ</a></li>
              <li><a onClick={() => navigate("service-buyer")}>買い手の方へ</a></li>
              <li><a onClick={() => navigate("cases")}>案件一覧</a></li>
              <li><a onClick={() => navigate("diagnosis")}>社長不在90日診断</a></li>
              <li><a onClick={() => navigate("pricing")}>料金プラン</a></li>
            </ul>
          </div>
          <div>
            <h5>事例 & 知見</h5>
            <ul>
              <li><a onClick={() => navigate("results")}>成約実績</a></li>
              <li><a onClick={() => navigate("news")}>コラム・ニュース</a></li>
              <li><a onClick={() => navigate("diagnosis")}>匿名セルフチェック</a></li>
              <li><a onClick={() => navigate("glossary")}>用語集</a></li>
            </ul>
          </div>
          <div>
            <h5>会社情報</h5>
            <ul>
              <li><a onClick={() => navigate("company")}>会社概要</a></li>
              <li><a onClick={() => navigate("company")}>代表メッセージ</a></li>
              <li><a onClick={() => navigate("contact")}>お問い合わせ</a></li>
              <li><a onClick={() => navigate("careers")}>採用情報</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 NexusM&amp;A All rights reserved.</div>
          <div className="legal">
            <a onClick={() => navigate("privacy")}>個人情報保護方針</a>
            <a onClick={() => navigate("antisocial")}>反社会的勢力排除</a>
            <a onClick={() => navigate("sitemap")}>サイトマップ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Animated process timeline — full M&A flow */
function ProcessTimeline({ active = 0, onStep }) {
  const steps = [
    { num: "01", phase: "Inquiry", jp: "ご相談", desc: "守秘義務契約のもと、現状ヒアリングと初期方針の策定。", days: "1〜2週間" },
    { num: "02", phase: "Valuation", jp: "企業評価", desc: "財務・事業・無形資産を多角的に分析し、適正価値を算定。", days: "2〜4週間" },
    { num: "03", phase: "Matching", jp: "マッチング", desc: "ノンネームシートを広範なネットワークへ照会し、最適な候補先を探索。", days: "1〜3ヶ月" },
    { num: "04", phase: "Negotiation", jp: "交渉・基本合意", desc: "意向表明、トップ面談、条件交渉、基本合意書（LOI）の締結。", days: "2〜3ヶ月" },
    { num: "05", phase: "Due Diligence", jp: "デュー・ディリジェンス", desc: "財務・法務・税務・事業の精査を専門家と連携して支援。", days: "1〜2ヶ月" },
    { num: "06", phase: "Closing", jp: "最終契約・成約", desc: "最終契約締結、決済、PMI（統合プロセス）まで伴走。", days: "1ヶ月〜" },
  ];

  const [tick, setTick] = useState(active);
  useEffect(() => { setTick(active); }, [active]);

  return (
    <div className="timeline">
      <div className="timeline-track">
        <div className="timeline-line" />
        <div className="timeline-line-fill" style={{ width: `${(tick / (steps.length - 1)) * 100}%` }} />
        {steps.map((s, i) => (
          <button
            key={s.num}
            className={`timeline-node ${i <= tick ? "active" : ""} ${i === tick ? "current" : ""}`}
            onClick={() => { setTick(i); onStep && onStep(i); }}
            style={{ left: `${(i / (steps.length - 1)) * 100}%` }}
          >
            <div className="timeline-dot" />
            <div className="timeline-num">{s.num}</div>
          </button>
        ))}
      </div>
      <div className="timeline-detail">
        <div className="timeline-detail-eyebrow font-serif-en">{steps[tick].phase}</div>
        <div className="timeline-detail-title font-serif-jp">{steps[tick].jp}</div>
        <div className="timeline-detail-meta">
          <span className="tag tag-gold">期間目安 — {steps[tick].days}</span>
        </div>
        <div className="timeline-detail-desc">{steps[tick].desc}</div>
      </div>
    </div>
  );
}

Object.assign(window, { Brand, Header, PageHero, SectionHead, Footer, ProcessTimeline, getVisualClass, getNewsVisual });
