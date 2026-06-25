/* Company / CEO Message page */

function PageCompany({ navigate }) {
  const values = [
    { num: "01", title: "中立", en: "Neutrality", desc: "売り手と買い手、どちらに偏ることもなく、双方が納得できる合意点を見つけ出します。" },
    { num: "02", title: "誠実", en: "Integrity", desc: "短期的な成約数より、お客様の人生にとっての正しい意思決定を優先します。" },
    { num: "03", title: "専門", en: "Expertise", desc: "公認会計士・税理士・弁護士と連携した、専門家チームによる助言体制。" },
    { num: "04", title: "持続", en: "Continuity", desc: "成約後の移行も見据え、事業の継続性に配慮して論点を整理します。" },
  ];

  const infos = [
    { label: "屋号", val: "NexusM&A" },
    { label: "運営者", val: "SASAERU合同会社" },
    { label: "代表者", val: "植松 勇樹" },
    { label: "対象地域", val: "全国" },
    { label: "対象業種", val: "全業種" },
    { label: "登録", val: "M&A支援機関登録制度 登録支援機関" },
  ];

  return (
    <main>
      <PageHero
        eyebrow="Our Company"
        title="会社概要・代表メッセージ。"
        lead="全国の中小企業を対象に、事業承継・M&Aに関する相談を受け付ける独立系アドバイザリー。NexusM&Aの考え方をご紹介します。"
        crumbs={["会社概要"]}
        navigate={navigate}
      />

      {/* CEO Message */}
      <section style={css("background:#F5F3ED;padding:104px 40px")}>
        <div style={css("width:100%;max-width:1040px;margin:0 auto")}>
          <div className="company-ceo-grid" style={css("display:grid;grid-template-columns:1fr 1.7fr;gap:64px;align-items:start")}>
            <div>
              <div style={css("border-radius:16px;overflow:hidden;aspect-ratio:3/4;position:relative;max-width:300px;background:#0B1B30")}>
                <img
                  src="assets/generated/company-profile.webp"
                  alt="代表 植松 勇樹"
                  style={css("width:100%;height:100%;object-fit:cover;opacity:.85")}
                  loading="lazy"
                />
                <div style={css("position:absolute;bottom:0;left:0;right:0;padding:24px 20px;background:linear-gradient(transparent,rgba(7,19,31,.92))")}>
                  <div style={css("font-family:'Shippori Mincho';font-size:18px;color:#fff;letter-spacing:.08em")}>植松 勇樹</div>
                  <div style={css("font-family:'Cormorant Garamond';font-style:italic;font-size:13px;color:#C6A664;margin-top:4px")}>Yuuki Uematsu — Representative</div>
                </div>
              </div>
            </div>
            <div>
              <div style={css("font-family:'Cormorant Garamond';font-size:13px;letter-spacing:.1em;color:#A9853D;margin-bottom:12px")}>Message from CEO</div>
              <h2 style={css("font-family:'Shippori Mincho';font-weight:700;font-size:34px;line-height:1.75;color:#11192A;margin:0 0 32px")}>
                経営者の決断に、<br />誠実に寄り添うこと。
              </h2>
              <p style={css("font-size:14.5px;line-height:2.1;color:#5E687A;margin:0 0 20px")}>
                私たちが大切にしていることは、ただひとつ。「経営者の決断に、誠実に寄り添う」ということです。
              </p>
              <p style={css("font-size:14.5px;line-height:2.1;color:#5E687A;margin:0 0 20px")}>
                M&Aは、単なる取引ではありません。創業者にとっては数十年の人生を託す決断であり、従業員にとっては未来の生活を左右する出来事です。だからこそ、件数や報酬ではなく、一件一件の質と納得感を最優先に考えます。
              </p>
              <p style={css("font-size:14.5px;line-height:2.1;color:#5E687A;margin:0")}>
                派手な広告や強引な営業に頼らず、全国の中小企業経営者の重要な決断に、誠実に向き合います。次の章へ向かう、あなたの大切な決断に、お手伝いさせていただけましたら幸いです。
              </p>
              <div style={css("margin-top:36px;padding-top:28px;border-top:1px solid #E6E1D4")}>
                <div style={css("font-family:'Shippori Mincho';font-size:22px;color:#0B1B30;letter-spacing:.08em")}>植松 勇樹</div>
                <div style={css("font-family:'Cormorant Garamond';font-style:italic;color:#8A929E;font-size:13px;margin-top:4px")}>NexusM&A — Representative</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={css("background:#0B1B30;padding:104px 40px")}>
        <div style={css("width:100%;max-width:1240px;margin:0 auto")}>
          <div style={css("text-align:center;margin-bottom:56px")}>
            <div style={css("font-family:'Cormorant Garamond';font-size:17px;letter-spacing:.05em;font-style:italic;color:#C6A664;margin-bottom:16px")}>Our Values</div>
            <h2 style={css("font-family:'Shippori Mincho';font-weight:700;font-size:38px;color:#fff;margin:0")}>4つの行動指針。</h2>
          </div>
          <div className="company-values-grid" style={css("display:grid;grid-template-columns:repeat(4,1fr);gap:20px")}>
            {values.map((v) => (
              <div key={v.num} style={css("background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:36px 28px;display:flex;flex-direction:column")}>
                <div style={css("font-family:'Cormorant Garamond';font-weight:700;font-size:13px;letter-spacing:.12em;color:#C6A664;margin-bottom:8px")}>{v.num}</div>
                <div style={css("font-family:'Cormorant Garamond';font-style:italic;font-size:13px;color:#7C879A;margin-bottom:16px")}>{v.en}</div>
                <h3 style={css("font-family:'Shippori Mincho';font-weight:700;font-size:28px;color:#fff;margin:0 0 20px;letter-spacing:.1em")}>{v.title}</h3>
                <p style={css("font-size:13.5px;line-height:1.9;color:rgba(247,242,233,.65);margin:0;flex:1")}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section style={css("background:#FBFAF6;padding:104px 40px")}>
        <div style={css("width:100%;max-width:800px;margin:0 auto")}>
          <div style={css("text-align:center;margin-bottom:56px")}>
            <div style={css("font-family:'Cormorant Garamond';font-size:17px;letter-spacing:.05em;font-style:italic;color:#A9853D;margin-bottom:16px")}>Corporate Profile</div>
            <h2 style={css("font-family:'Shippori Mincho';font-weight:700;font-size:38px;color:#11192A;margin:0")}>会社概要。</h2>
          </div>
          <div style={css("background:#fff;border:1px solid #E6E1D4;border-radius:16px;overflow:hidden")}>
            {infos.map((r, i, arr) => (
              <div key={r.label} style={css("display:grid;grid-template-columns:160px 1fr;border-bottom:" + (i < arr.length - 1 ? "1px solid #EEE9DF" : "none"))}>
                <div style={css("padding:22px 28px;background:#FBFAF6;font-size:13.5px;font-weight:700;color:#0B1B30;display:flex;align-items:center;border-right:1px solid #EEE9DF")}>{r.label}</div>
                <div style={css("padding:22px 28px;font-size:14px;line-height:1.8;color:#5E687A")}>{r.val}</div>
              </div>
            ))}
            <div style={css("display:grid;grid-template-columns:160px 1fr;")}>
              <div style={css("padding:22px 28px;background:#FBFAF6;font-size:13.5px;font-weight:700;color:#0B1B30;display:flex;align-items:center;border-right:1px solid #EEE9DF")}>遵守方針</div>
              <div style={css("padding:22px 28px;font-size:14px;line-height:1.8;color:#5E687A")}>
                <span
                  onClick={() => navigate("guideline")}
                  style={css("color:#A9853D;text-decoration:underline;cursor:pointer")}
                >
                  中小M&Aガイドライン遵守方針
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConversionCTA
        navigate={navigate}
        eyebrow="Trust & Contact"
        title="運営者情報を確認したうえで、ご相談いただけます。"
        lead="中小M&Aガイドライン遵守方針、登録情報、秘密保持への配慮を確認したうえで、必要な範囲からご相談ください。"
      />
    </main>
  );
}

window.PageCompany = PageCompany;
