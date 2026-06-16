/* Company / CEO Message page */

function PageCompany({ navigate }) {
  const values = [
    { num: "01", title: "中立", jp: "Neutrality", desc: "売り手と買い手、どちらに偏ることもなく、双方が納得できる合意点を見つけ出します。" },
    { num: "02", title: "誠実", jp: "Integrity", desc: "短期的な成約数より、お客様の人生にとっての正しい意思決定を優先します。" },
    { num: "03", title: "専門", jp: "Expertise", desc: "公認会計士・税理士・弁護士と連携した、専門家チームによる助言体制。" },
    { num: "04", title: "持続", jp: "Continuity", desc: "成約後の移行も見据え、事業の継続性に配慮して論点を整理します。" },
  ];

  const members = [
    { name: "植松 勇樹", en: "Yuuki Uematsu", role: "代表", bio: "中小企業の事業承継・M&Aに関する相談を受け、経営者の重要な意思決定に寄り添う支援を行います。" },
  ];

  const milestones = [
    { year: "01", title: "全国対応", desc: "全国の中小企業を対象に、事業承継・成長戦略M&Aに関する相談を受け付けています。" },
    { year: "02", title: "全業種対応", desc: "業種を限定せず、初期相談の段階で状況や検討目的を整理します。" },
  ];

  return (
    <main>
      <PageHero
        eyebrow="Our Company"
        title="会社概要・代表メッセージ。"
        lead="全国の中小企業を対象に、事業承継・M&Aに関する相談を受け付ける独立系アドバイザリー。私たちNexusM&Aの考え方をご紹介します。"
        crumbs={["会社概要"]}
        navigate={navigate}
      />

      {/* CEO Message */}
      <section style={{ background: "var(--paper)" }}>
        <div className="container">
          <div className="ceo-grid">
            <div className="ceo-portrait-wrap">
              <div className="ph ph-dark visual visual-portrait ceo-portrait" data-label="Portrait" />
              <div className="ceo-portrait-cap">
                <div className="font-serif-jp" style={{ fontSize: 18, color: "var(--ivory)", letterSpacing: "0.08em" }}>植松 勇樹</div>
                <div className="font-serif-en" style={{ fontStyle: "italic", fontSize: 13, color: "var(--gold-400)", marginTop: 4 }}>Yuuki Uematsu — Representative</div>
              </div>
            </div>
            <div className="ceo-message">
              <div className="eyebrow">Message from CEO</div>
              <h2 className="font-serif-jp" style={{ fontSize: 36, lineHeight: 1.7, margin: "20px 0 40px" }}>
                経営者の決断に、<br />誠実に寄り添うこと。
              </h2>
              <p>
                私たちが大切にしていることは、ただひとつ。<em>「経営者の決断に、誠実に寄り添う」</em>ということです。
              </p>
              <p>
                M&Aは、単なる取引ではありません。創業者にとっては数十年の人生を託す決断であり、従業員にとっては未来の生活を左右する出来事です。だからこそ、件数や報酬ではなく、一件一件の質と納得感を最優先に考えます。
              </p>
              <p>
                派手な広告や強引な営業に頼らず、全国の中小企業経営者の重要な決断に、誠実に向き合います。
              </p>
              <p>
                次の章へ向かう、あなたの大切な決断に、お手伝いさせていただけましたら幸いです。
              </p>
              <div className="ceo-sig">
                <div className="font-serif-jp" style={{ fontSize: 22, color: "var(--navy-900)", letterSpacing: "0.08em" }}>植松 勇樹</div>
                <div className="font-serif-en" style={{ fontStyle: "italic", color: "var(--ink-500)", fontSize: 13, marginTop: 4 }}>NexusM&amp;A — Representative</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "var(--white)" }}>
        <div className="container">
          <SectionHead eyebrow="Our Values" title="4つの行動指針。" />
          <div className="values-grid">
            {values.map((v) => (
              <div key={v.num} className="value-card">
                <div className="value-num font-serif-en">{v.num}</div>
                <div className="value-en font-serif-en">{v.jp}</div>
                <h4 className="font-serif-jp" style={{ fontSize: 30, margin: "16px 0 22px", letterSpacing: "0.12em" }}>{v.title}</h4>
                <p style={{ color: "var(--ink-500)", fontSize: 13.5, lineHeight: 2 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section style={{ background: "var(--ivory)" }}>
        <div className="container">
          <SectionHead eyebrow="Service Area" title="対応範囲。" />
          <div className="milestone-wrap">
            {milestones.map((m, i) => (
              <div key={m.year} className="milestone">
                <div className="milestone-line" />
                <div className="milestone-dot" />
                <div className="milestone-year font-serif-en">{m.year}</div>
                <div className="milestone-content">
                  <h4 className="font-serif-jp" style={{ fontSize: 19, marginBottom: 10 }}>{m.title}</h4>
                  <p style={{ color: "var(--ink-500)", fontSize: 13.5, lineHeight: 1.9 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: "var(--white)" }}>
        <div className="container">
          <SectionHead eyebrow="Leadership" title="経営陣・主要メンバー。" />
          <div className="team-grid">
            {members.map((m) => (
              <div key={m.name} className="member-card">
                <div className="ph ph-dark visual visual-portrait member-portrait" data-label="Portrait" />
                <div className="member-info">
                  <div className="member-role">{m.role}</div>
                  <div className="member-name font-serif-jp">{m.name}</div>
                  <div className="member-en font-serif-en">{m.en}</div>
                  <p className="member-bio">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company info table */}
      <section style={{ background: "var(--paper)" }}>
        <div className="container narrow">
          <SectionHead eyebrow="Corporate Profile" title="会社概要。" />
          <table className="profile-table">
            <tbody>
              <tr><th>屋号</th><td>NexusM&amp;A</td></tr>
              <tr><th>運営者</th><td>SASAERU合同会社</td></tr>
              <tr><th>代表者</th><td>植松 勇樹</td></tr>
              <tr><th>対象地域</th><td>全国</td></tr>
              <tr><th>対象業種</th><td>全業種</td></tr>
              <tr><th>登録</th><td>M&amp;A支援機関登録制度 登録支援機関</td></tr>
              <tr><th>遵守方針</th><td><button className="text-link" onClick={() => navigate("guideline")}>中小M&amp;Aガイドライン遵守方針</button></td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

window.PageCompany = PageCompany;
