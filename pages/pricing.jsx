/* Pricing page */

function PagePricing({ navigate }) {
  const policies = [
    {
      name: "初回相談",
      en: "Initial Consultation",
      tag: "まず状況整理から",
      price: "無料",
      priceSub: "会社名を出す前の相談も可能",
      desc: "譲渡・買収を前提にせず、現状、目的、検討時期、守りたい条件を整理します。",
      features: [
        { label: "相談方法", val: "メール / オンライン" },
        { label: "電話番号", val: "任意" },
        { label: "秘密保持", val: "個別に配慮" },
        { label: "営業停止意思", val: "尊重" },
      ],
      cta: "無料相談をする",
      featured: true,
    },
    {
      name: "仲介・FA契約",
      en: "Advisory Contract",
      tag: "契約前に明確説明",
      price: "個別提示",
      priceSub: "業務範囲・報酬体系を事前説明",
      desc: "業務内容、手数料、支払時期、最低手数料の有無、専任条項、テール条項などを、契約前に書面又は電磁的方法で説明します。",
      features: [
        { label: "業務範囲", val: "契約前に説明" },
        { label: "手数料", val: "個別提示" },
        { label: "直接交渉制限", val: "有無を説明" },
        { label: "テール条項", val: "有無を説明" },
      ],
      cta: "契約条件を相談する",
    },
    {
      name: "専門家連携",
      en: "Expert Support",
      tag: "必要に応じて連携",
      price: "個別確認",
      priceSub: "士業等の費用は別途確認",
      desc: "弁護士、公認会計士、税理士、司法書士等の専門家が必要となる場合、費用の種類や支払時期を事前に確認します。",
      features: [
        { label: "法務", val: "必要に応じて" },
        { label: "税務・会計", val: "必要に応じて" },
        { label: "登記・労務", val: "必要に応じて" },
        { label: "外部費用", val: "事前確認" },
      ],
      cta: "専門家連携を相談する",
    },
  ];

  return (
    <main>
      <PageHero
        eyebrow="Fee Structure"
        title="料金・契約条件。"
        lead="NexusM&Aでは、仲介契約・FA契約の締結前に、業務範囲、手数料、支払時期、最低手数料の有無、専任条項、直接交渉制限、テール条項などの重要事項を明確に説明します。"
        crumbs={["料金・契約条件"]}
        navigate={navigate}
      />

      <section style={{ background: "var(--ivory)" }}>
        <div className="container narrow">
          <SectionHead
            eyebrow="Policy"
            title="契約前に、重要事項を説明します。"
            lead="M&A支援機関として、中小M&Aガイドラインの趣旨に沿い、依頼者が十分に検討できるよう必要事項を整理して説明します。"
          />
          <div className="lehman-table-wrap">
            <table className="lehman-table">
              <tbody>
                <tr><td>業務形態</td><td>仲介者とFAの違い、提供する業務の範囲を説明します。</td></tr>
                <tr><td>手数料</td><td>算定基準、金額、最低手数料の有無、支払時期等を説明します。</td></tr>
                <tr><td>外部費用</td><td>士業等の専門家費用、調査費用等が発生する場合は事前に確認します。</td></tr>
                <tr><td>契約条項</td><td>専任条項、直接交渉制限、テール条項、中途解約等を説明します。</td></tr>
              </tbody>
            </table>
            <p className="lehman-note">※ 具体的な報酬体系・金額は、案件内容・業務範囲・契約形態に応じて個別に提示します。</p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)" }}>
        <div className="container">
          <SectionHead
            eyebrow="Plans"
            title="相談・契約の進め方。"
          />
          <div className="plans-grid">
            {policies.map((p) => (
              <div key={p.name} className={`plan-card ${p.featured ? "featured" : ""}`}>
                {p.featured && <div className="plan-ribbon">最初の入口</div>}
                <div className="plan-header">
                  <div className="eyebrow" style={{ color: p.featured ? "var(--gold-400)" : "var(--gold-600)" }}>{p.en}</div>
                  <h3 className="font-serif-jp" style={{ fontSize: 26, marginTop: 14, color: p.featured ? "var(--ivory)" : "var(--navy-900)" }}>{p.name}</h3>
                  <div className="plan-tag" style={{ color: p.featured ? "rgba(247,242,233,0.6)" : "var(--ink-500)" }}>{p.tag}</div>
                </div>
                <div className="plan-price-block">
                  <div className="plan-price font-serif-jp" style={{ color: p.featured ? "var(--gold-400)" : "var(--navy-800)" }}>{p.price}</div>
                  <div className="plan-price-sub" style={{ color: p.featured ? "rgba(247,242,233,0.55)" : "var(--ink-500)" }}>{p.priceSub}</div>
                </div>
                <p className="plan-desc" style={{ color: p.featured ? "rgba(247,242,233,0.75)" : "var(--ink-500)" }}>{p.desc}</p>
                <ul className="plan-features">
                  {p.features.map((f) => (
                    <li key={f.label}>
                      <span className="feature-label">{f.label}</span>
                      <span className="feature-val">{f.val}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`btn ${p.featured ? "btn-primary" : "btn-ghost"}`}
                  style={{ width: "100%", justifyContent: "center" }}
                  onClick={() => navigate("contact")}
                >
                  {p.cta} <span className="arrow" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--paper)" }}>
        <div className="container narrow">
          <SectionHead eyebrow="FAQ" title="料金・契約条件に関するご質問。" />
          <div className="faq-list">
            {[
              { q: "具体的な手数料はどこで確認できますか？", a: "契約締結前に、業務範囲、算定基準、金額、最低手数料の有無、支払時期などを書面又は電磁的方法で説明します。" },
              { q: "初回相談だけでも可能ですか？", a: "可能です。譲渡・買収を前提にせず、現状整理や選択肢の確認からご相談いただけます。" },
              { q: "外部専門家の費用はどうなりますか？", a: "弁護士、公認会計士、税理士等の外部専門家が必要となる場合、費用の種類や支払時期を事前に確認します。" },
              { q: "他の支援機関に相談できますか？", a: "セカンド・オピニオンの可否や情報管理の条件は、契約前に説明します。必要に応じて公的機関や士業等への相談も選択肢として整理します。" },
            ].map((f, i) => (
              <details key={i} className="faq-item">
                <summary>
                  <span className="faq-q-num font-serif-en">Q{String(i + 1).padStart(2, "0")}</span>
                  <span className="faq-q-text">{f.q}</span>
                  <span className="faq-toggle">+</span>
                </summary>
                <div className="faq-a">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ConversionCTA
        navigate={navigate}
        eyebrow="Get Started"
        title="料金を確認したうえで、無料相談から始められます。"
        lead="契約形態、報酬体系、外部専門家費用、テール条項などは契約前に説明します。まずは状況整理だけでも可能です。"
        primaryLabel="料金を踏まえて相談する"
      />
    </main>
  );
}

window.PagePricing = PagePricing;
