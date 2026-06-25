/* Shared components: Header, Footer, Brand, ProcessTimeline, etc. */
const { useState, useEffect, useRef } = React;

/* css() — converts a CSS string to a React style object (camelCase keys) */
const css = (str) =>
  Object.fromEntries(
    String(str).split(";").filter((r) => r.trim()).map((r) => {
      const i = r.indexOf(":");
      const key = r.slice(0, i).trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      return [key, r.slice(i + 1).trim()];
    })
  );

function Brand({ size = "default", onClick }) {
  return (
    <div className="brand" onClick={onClick} style={{ cursor: onClick ? "pointer" : "default" }}>
      <div className="brand-mark">N</div>
      <div className="brand-name">
        NexusM&amp;A
        <span className="sub">PRIVATE ADVISORY</span>
      </div>
    </div>
  );
}

function Header({ route, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setMobileOpen(false); }, [route]);
  const go = (id) => {
    setMobileOpen(false);
    navigate(id);
  };
  const links = [
    { id: "service-seller", label: "売り手の方へ" },
    { id: "service-buyer", label: "買い手の方へ" },
    { id: "cases", label: "案件イメージ" },
    { id: "results", label: "事例イメージ" },
    { id: "pricing", label: "料金・契約条件" },
    { id: "company", label: "会社概要" },
    { id: "news", label: "ニュース" },
    { id: "diagnosis", label: "匿名診断" },
  ];
  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-inner">
        <Brand onClick={() => go("home")} />
        <button
          className={`menu-toggle ${mobileOpen ? "open" : ""}`}
          aria-label={mobileOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`primary ${mobileOpen ? "mobile-open" : ""}`}>
          {links.map((l) => (
            <span
              key={l.id}
              className={`nav-link ${route === l.id ? "active" : ""}`}
              onClick={() => go(l.id)}
            >
              {l.label}
            </span>
          ))}
          <button className="nav-cta" onClick={() => go("contact")}>
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

function ConversionCTA({
  navigate,
  eyebrow = "Confidential Consultation",
  title = "まずは、現状を整理するところから。",
  lead = "会社名・電話番号を出さずに始められる匿名診断と、具体的なご相談を送れる無料相談フォームを用意しています。",
  primaryLabel = "無料相談を予約する",
  secondaryLabel = "まず匿名診断する",
  note = "診断だけでは連絡先を取得しません。営業電話を前提にしない導線です。",
}) {
  return (
    <section className="cta-band">
      <div className="container">
        <div className="cta-inner">
          <div>
            <div className="eyebrow" style={{ color: "var(--gold-400)" }}>{eyebrow}</div>
            <h2 style={{ color: "var(--ivory)", fontSize: 34, marginTop: 18, lineHeight: 1.6 }}>{title}</h2>
            {lead && (
              <p style={{ color: "rgba(247,242,233,0.7)", marginTop: 22, fontSize: 14, maxWidth: 560 }}>
                {lead}
              </p>
            )}
          </div>
          <div className="cta-actions">
            <button className="btn btn-ghost-light" onClick={() => navigate("diagnosis")}>
              {secondaryLabel}
            </button>
            <button className="btn btn-primary" onClick={() => navigate("contact")}>
              {primaryLabel} <span className="arrow" />
            </button>
            {note && <div className="cta-note">{note}</div>}
          </div>
        </div>
      </div>
    </section>
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
  const lk = (label, route) => (
    <a key={route + label} onClick={() => navigate(route)} style={{ color: "#9AA7B5", textDecoration: "none", fontSize: "13.5px", cursor: "pointer", display: "block" }}>{label}</a>
  );
  return (
    <footer style={{ background: "#07131F", color: "#fff", padding: "70px 32px 40px", borderTop: "1px solid rgba(255,255,255,.07)" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        <div className="footer-grid-v2" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: "40px", paddingBottom: "48px", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
              <span style={{ width: "32px", height: "32px", border: "1.5px solid #C6A664", display: "flex", alignItems: "center", justifyContent: "center", color: "#C6A664", fontFamily: "var(--serif-en)", fontWeight: 700, fontSize: "16px" }}>N</span>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "17px", letterSpacing: ".05em" }}>NexusM&A</span>
            </div>
            <p style={{ fontSize: "13px", lineHeight: 1.9, color: "#7C879A", margin: 0, maxWidth: "320px" }}>中小企業の事業承継・譲渡を、着手金・中間金0円の完全成功報酬で支援する独立系M&A仲介。納得できる承継を、成約まで伴走します。</p>
          </div>
          <div>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "#C6A664", letterSpacing: ".1em", marginBottom: "18px" }}>サービス</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {lk("売り手の方へ", "service-seller")}
              {lk("買い手の方へ", "service-buyer")}
              {lk("案件イメージ", "cases")}
              {lk("社長不在90日診断", "diagnosis")}
              {lk("料金・契約条件", "pricing")}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "#C6A664", letterSpacing: ".1em", marginBottom: "18px" }}>事例 &amp; 知見</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {lk("事例イメージ", "results")}
              {lk("コラム・ニュース", "news")}
              {lk("匿名セルフチェック", "diagnosis")}
              {lk("用語集", "glossary")}
            </div>
          </div>
          <div>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "#C6A664", letterSpacing: ".1em", marginBottom: "18px" }}>会社情報</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {lk("会社概要", "company")}
              {lk("代表メッセージ", "company")}
              {lk("お問い合わせ", "contact")}
              {lk("採用情報", "careers")}
            </div>
          </div>
        </div>
        <div style={{ marginTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ fontSize: "11.5px", color: "#5C6775" }}>© 2026 NexusM&amp;A All rights reserved.</div>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {[["個人情報保護方針","privacy"],["中小M&Aガイドライン遵守","guideline"],["反社会的勢力排除","antisocial"],["サイトマップ","sitemap"]].map(([t,r]) => (
              <a key={r} onClick={() => navigate(r)} style={{ color: "#5C6775", textDecoration: "none", fontSize: "11.5px", cursor: "pointer" }}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Animated process timeline — full M&A flow */
function ProcessTimeline({ active = 0, onStep }) {
  const steps = [
    { num: "01", phase: "Inquiry", jp: "ご相談", desc: "秘密保持に配慮しながら、現状と検討目的を整理します。", days: "初期整理" },
    { num: "02", phase: "Valuation", jp: "企業評価", desc: "評価手法や前提条件を説明したうえで、参考となる価格感を整理します。", days: "方針確認" },
    { num: "03", phase: "Matching", jp: "マッチング", desc: "譲り渡し側の同意と秘密保持を前提に、候補先への段階的な情報開示を行います。", days: "個別進行" },
    { num: "04", phase: "Negotiation", jp: "交渉・基本合意", desc: "条件、役割、スケジュールを確認しながら、基本合意に向けた調整を支援します。", days: "個別進行" },
    { num: "05", phase: "Due Diligence", jp: "デュー・ディリジェンス", desc: "専門家の活用も含め、必要資料の準備と確認プロセスを支援します。", days: "個別進行" },
    { num: "06", phase: "Closing", jp: "最終契約・成約", desc: "最終契約、決済、成約後の移行に向けた確認を支援します。", days: "最終確認" },
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

Object.assign(window, { css, Brand, Header, PageHero, SectionHead, ConversionCTA, Footer, ProcessTimeline, getVisualClass, getNewsVisual });
