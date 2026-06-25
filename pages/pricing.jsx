/* Pricing page — new design */

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
      dark: true,
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
      dark: false,
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
      dark: false,
    },
  ];

  const faqs = [
    { q: "具体的な手数料はどこで確認できますか？", a: "契約締結前に、業務範囲、算定基準、金額、最低手数料の有無、支払時期などを書面又は電磁的方法で説明します。" },
    { q: "初回相談だけでも可能ですか？", a: "可能です。譲渡・買収を前提にせず、現状整理や選択肢の確認からご相談いただけます。" },
    { q: "外部専門家の費用はどうなりますか？", a: "弁護士、公認会計士、税理士等の外部専門家が必要となる場合、費用の種類や支払時期を事前に確認します。" },
    { q: "他の支援機関に相談できますか？", a: "セカンド・オピニオンの可否や情報管理の条件は、契約前に説明します。必要に応じて公的機関や士業等への相談も選択肢として整理します。" },
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

      {/* 重要事項の事前説明 */}
      <section style={css("background:#F5F3ED;padding:104px 40px")}>
        <div style={css("width:100%;max-width:960px;margin:0 auto")}>
          <div style={css("text-align:center;margin-bottom:56px")}>
            <div style={css("font-family:'Cormorant Garamond';font-size:17px;letter-spacing:.05em;font-style:italic;color:#A9853D;margin-bottom:16px")}>Policy</div>
            <h2 style={css("font-family:'Shippori Mincho';font-weight:700;font-size:38px;color:#11192A;margin:0 0 18px")}>契約前に、重要事項を説明します。</h2>
            <p style={css("font-size:15px;line-height:2;color:#5E687A;margin:0 auto;max-width:640px")}>M&A支援機関として、中小M&Aガイドラインの趣旨に沿い、依頼者が十分に検討できるよう必要事項を整理して説明します。</p>
          </div>
          <div style={css("background:#fff;border:1px solid #E6E1D4;border-radius:16px;overflow:hidden")}>
            {[
              { label: "業務形態", val: "仲介者とFAの違い、提供する業務の範囲を説明します。" },
              { label: "手数料", val: "算定基準、金額、最低手数料の有無、支払時期等を説明します。" },
              { label: "外部費用", val: "士業等の専門家費用、調査費用等が発生する場合は事前に確認します。" },
              { label: "契約条項", val: "専任条項、直接交渉制限、テール条項、中途解約等を説明します。" },
            ].map((r, i, arr) => (
              <div key={r.label} style={css("display:grid;grid-template-columns:160px 1fr;border-bottom:" + (i < arr.length - 1 ? "1px solid #EEE9DF" : "none"))}>
                <div style={css("padding:22px 28px;background:#FBFAF6;font-size:13.5px;font-weight:700;color:#0B1B30;display:flex;align-items:center;border-right:1px solid #EEE9DF")}>{r.label}</div>
                <div style={css("padding:22px 28px;font-size:14px;line-height:1.8;color:#5E687A")}>{r.val}</div>
              </div>
            ))}
          </div>
          <p style={css("font-size:12px;color:#9AA0AB;margin-top:18px;line-height:1.7;text-align:center")}>※ 具体的な報酬体系・金額は、案件内容・業務範囲・契約形態に応じて個別に提示します。</p>
        </div>
      </section>

      {/* Plan cards */}
      <section style={css("background:#0B1B30;padding:104px 40px")}>
        <div style={css("width:100%;max-width:1240px;margin:0 auto")}>
          <div style={css("text-align:center;margin-bottom:56px")}>
            <div style={css("font-family:'Cormorant Garamond';font-size:17px;letter-spacing:.05em;font-style:italic;color:#C6A664;margin-bottom:16px")}>Plans</div>
            <h2 style={css("font-family:'Shippori Mincho';font-weight:700;font-size:38px;color:#fff;margin:0")}>相談・契約の進め方。</h2>
          </div>
          <div style={css("display:grid;grid-template-columns:repeat(3,1fr);gap:20px")} className="pricing-cards-grid">
            {policies.map((p) => (
              <div key={p.name} style={css(
                p.dark
                  ? "background:linear-gradient(160deg,#1B3252,#0D2038);border:1px solid rgba(198,166,100,.4);border-radius:16px;padding:36px;display:flex;flex-direction:column;position:relative;overflow:hidden"
                  : "background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:36px;display:flex;flex-direction:column"
              )}>
                {p.dark && <div style={css("position:absolute;right:-24px;top:-24px;width:120px;height:120px;border-radius:50%;background:radial-gradient(circle,rgba(198,166,100,.18),transparent 70%)")}></div>}
                {p.dark && <div style={css("font-size:11px;font-weight:700;color:#07131F;background:#C6A664;padding:4px 12px;border-radius:100px;align-self:flex-start;margin-bottom:20px")}>最初の入口</div>}
                <div style={css("font-family:'Cormorant Garamond';font-size:13px;letter-spacing:.1em;color:" + (p.dark ? "#C6A664" : "#9AA7B5") + ";margin-bottom:10px")}>{p.en}</div>
                <h3 style={css("font-family:'Shippori Mincho';font-weight:700;font-size:22px;color:#fff;margin:0 0 6px")}>{p.name}</h3>
                <div style={css("font-size:12.5px;color:" + (p.dark ? "rgba(247,242,233,.6)" : "#7C879A") + ";margin-bottom:24px")}>{p.tag}</div>
                <div style={css("font-family:'Cormorant Garamond';font-weight:700;font-size:44px;line-height:1;color:" + (p.dark ? "#E7CE92" : "#fff") + ";margin-bottom:4px")}>{p.price}</div>
                <div style={css("font-size:12px;color:" + (p.dark ? "rgba(247,242,233,.55)" : "#7C879A") + ";margin-bottom:24px")}>{p.priceSub}</div>
                <p style={css("font-size:13.5px;line-height:1.9;color:" + (p.dark ? "rgba(247,242,233,.75)" : "#A9B4C2") + ";margin:0 0 24px;flex:1")}>{p.desc}</p>
                <div style={css("display:flex;flex-direction:column;gap:10px;margin-bottom:28px;border-top:1px solid " + (p.dark ? "rgba(255,255,255,.12)" : "rgba(255,255,255,.07)") + ";padding-top:20px")}>
                  {p.features.map((f) => (
                    <div key={f.label} style={css("display:flex;justify-content:space-between;font-size:13px")}>
                      <span style={css("color:" + (p.dark ? "rgba(247,242,233,.6)" : "#7C879A"))}>{f.label}</span>
                      <span style={css("color:" + (p.dark ? "#E7CE92" : "#C2CAD6") + ";font-weight:600")}>{f.val}</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => navigate("contact")} style={css(
                  p.dark
                    ? "display:flex;align-items:center;justify-content:center;gap:8px;background:#C6A664;color:#07131F;border:none;cursor:pointer;font-family:'Noto Sans JP';font-size:14px;font-weight:700;padding:14px 20px;border-radius:8px"
                    : "display:flex;align-items:center;justify-content:center;gap:8px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);color:#fff;cursor:pointer;font-family:'Noto Sans JP';font-size:14px;font-weight:600;padding:14px 20px;border-radius:8px"
                )}>{p.cta}<span style={css("font-family:'Cormorant Garamond'")}>→</span></button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={css("background:#FBFAF6;padding:104px 40px")}>
        <div style={css("width:100%;max-width:800px;margin:0 auto")}>
          <div style={css("text-align:center;margin-bottom:56px")}>
            <div style={css("font-family:'Cormorant Garamond';font-size:17px;letter-spacing:.05em;font-style:italic;color:#A9853D;margin-bottom:16px")}>FAQ</div>
            <h2 style={css("font-family:'Shippori Mincho';font-weight:700;font-size:38px;color:#11192A;margin:0")}>料金・契約条件に関するご質問。</h2>
          </div>
          <div>
            {faqs.map((f, i) => (
              <details key={i} style={css("border-top:1px solid #E6E1D4" + (i === faqs.length - 1 ? ";border-bottom:1px solid #E6E1D4" : ""))}>
                <summary style={css("display:flex;align-items:center;gap:20px;padding:22px 4px;cursor:pointer;list-style:none")}>
                  <span style={css("font-family:'Cormorant Garamond';font-weight:700;font-size:14px;color:#C6A664;flex-shrink:0")}>{"Q" + String(i + 1).padStart(2, "0")}</span>
                  <span style={css("font-size:15px;font-weight:500;color:#2A3446;flex:1")}>{f.q}</span>
                  <span style={css("font-family:'Cormorant Garamond';font-size:20px;color:#A9853D;flex-shrink:0")}>+</span>
                </summary>
                <div style={css("padding:4px 4px 24px 54px;font-size:14px;line-height:2;color:#5E687A")}>{f.a}</div>
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
