/* Pricing page */

function PagePricing({ navigate }) {
  const plans = [
    {
      name: "セラー・スタンダード",
      en: "Seller — Standard",
      tag: "売り手の方向け",
      price: "完全成功報酬",
      priceSub: "成約時のみ／レーマン方式",
      desc: "ご相談から成約まで一切の着手金・中間金は不要。成約に至らなかった場合の費用は発生しません。",
      features: [
        { label: "初回相談", val: "無料" },
        { label: "簡易企業評価", val: "無料" },
        { label: "着手金", val: "無料" },
        { label: "中間金", val: "無料" },
        { label: "成功報酬", val: "レーマン方式" },
        { label: "最低報酬", val: "800万円〜" },
      ],
      cta: "無料相談を予約する",
      featured: true,
    },
    {
      name: "バイヤー・アドバイザリー",
      en: "Buyer — Advisory",
      tag: "買い手の方向け",
      price: "月額固定 + 成功報酬",
      priceSub: "FA契約／レーマン方式",
      desc: "投資戦略に基づくターゲット選定からPMIまで、買い手側の専属アドバイザーとして伴走します。",
      features: [
        { label: "戦略コンサルティング", val: "月額50万円〜" },
        { label: "ロングリスト作成", val: "含む" },
        { label: "アプローチ実行", val: "含む" },
        { label: "成功報酬", val: "レーマン方式" },
        { label: "PMI支援", val: "オプション" },
        { label: "最低契約期間", val: "6ヶ月" },
      ],
      cta: "FA契約を相談する",
    },
    {
      name: "プレミア・コンシェルジュ",
      en: "Premier — Concierge",
      tag: "大型・複雑案件",
      price: "個別見積",
      priceSub: "完全カスタム",
      desc: "30億円超のクロスボーダー案件や、ファミリービジネスの複雑な再編など、特殊案件向けの最上位サービス。",
      features: [
        { label: "専任シニアパートナー", val: "含む" },
        { label: "クロスボーダー対応", val: "含む" },
        { label: "税務・法務スキーム設計", val: "含む" },
        { label: "ファミリーガバナンス", val: "オプション" },
        { label: "資産承継統合相談", val: "含む" },
        { label: "ご相談", val: "個別" },
      ],
      cta: "個別相談する",
    },
  ];

  return (
    <main>
      <PageHero
        eyebrow="Fee Structure"
        title="料金プラン。"
        lead="完全成功報酬制を基本とし、着手金・中間金は一切いただきません。明朗で、お客様のリスクを最小化する料金体系をご用意しています。"
        crumbs={["料金プラン"]}
        navigate={navigate}
      />

      {/* Lehman explanation */}
      <section style={{ background: "var(--ivory)" }}>
        <div className="container narrow">
          <SectionHead
            eyebrow="Lehman Formula"
            title="レーマン方式について。"
            lead="日本のM&A仲介業界で標準的に採用されている、譲渡金額に応じた逓減型の報酬体系です。"
          />
          <div className="lehman-table-wrap">
            <table className="lehman-table">
              <thead>
                <tr>
                  <th>譲渡金額（株式譲渡対価＋負債）</th>
                  <th>料率</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1億円以下の部分</td><td className="font-serif-en"><em>10</em>%</td></tr>
                <tr><td>1億円超 〜 2億円以下の部分</td><td className="font-serif-en"><em>10</em>%</td></tr>
                <tr><td>2億円超 〜 5億円以下の部分</td><td className="font-serif-en"><em>8</em>%</td></tr>
                <tr><td>5億円超 〜 10億円以下の部分</td><td className="font-serif-en"><em>6</em>%</td></tr>
                <tr><td>10億円超 〜 50億円以下の部分</td><td className="font-serif-en"><em>4</em>%</td></tr>
                <tr><td>50億円超の部分</td><td className="font-serif-en"><em>4</em>%</td></tr>
              </tbody>
            </table>
            <p className="lehman-note">※ 最低報酬：800万円（消費税別）／実費（出張費・印紙代等）はお客様にご負担いただきます。</p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section style={{ background: "var(--white)" }}>
        <div className="container">
          <SectionHead
            eyebrow="Plans"
            title="3つのサービスプラン。"
          />
          <div className="plans-grid">
            {plans.map((p) => (
              <div key={p.name} className={`plan-card ${p.featured ? "featured" : ""}`}>
                {p.featured && <div className="plan-ribbon">最もご利用が多いプラン</div>}
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

      {/* FAQ snippet */}
      <section style={{ background: "var(--paper)" }}>
        <div className="container narrow">
          <SectionHead eyebrow="FAQ" title="料金に関する、よくあるご質問。" />
          <div className="faq-list">
            {[
              { q: "本当に成約まで費用は発生しませんか？", a: "セラー向けプランでは、初回相談・簡易企業評価・着手金・中間金すべて無料です。最終契約締結時にのみ成功報酬が発生します。実費（出張費・印紙代等）のみご負担いただきます。" },
              { q: "成約に至らなかった場合の費用は？", a: "セラー向けプランでは費用は一切発生しません。バイヤー向けFA契約の場合は、月額アドバイザリーフィーのみ発生し、成功報酬は不要です。" },
              { q: "最低報酬800万円とは？", a: "レーマン方式による計算結果が800万円を下回る場合でも、最低報酬として800万円をご請求させていただきます。小規模案件が該当する可能性があります。" },
              { q: "他社との相見積もりは可能ですか？", a: "もちろん可能です。サービス内容と料金体系の透明性には自信がございます。ご検討の上、ご判断ください。" },
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

      <section className="cta-band">
        <div className="container">
          <div className="cta-inner">
            <div>
              <div className="eyebrow" style={{ color: "var(--gold-400)" }}>Get Started</div>
              <h2 style={{ color: "var(--ivory)", fontSize: 34, marginTop: 18, lineHeight: 1.6 }}>まずは、無料相談から。</h2>
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

window.PagePricing = PagePricing;
