/* Seller & Buyer service pages */

function Pillar({ icon, title, desc }) {
  return (
    <div className="pillar">
      <div className="pillar-icon">{icon}</div>
      <h4 className="font-serif-jp" style={{ fontSize: 19, marginBottom: 14 }}>{title}</h4>
      <p style={{ color: "var(--ink-500)", fontSize: 14, lineHeight: 2 }}>{desc}</p>
    </div>
  );
}

function PageSeller({ navigate }) {
  const pillars = [
    { icon: "i", title: "事業承継問題の解決", desc: "後継者不在に悩む経営者へ、社内外を問わず最適な承継先をご提案します。" },
    { icon: "ii", title: "従業員・取引先の保護", desc: "雇用継続・取引維持を最優先条件として交渉。譲渡後も従業員が安心して働ける体制を守ります。" },
    { icon: "iii", title: "経営者保証の解除", desc: "個人保証や担保の解除を譲渡条件に組み込み、経営者ご自身とご家族の人生を守ります。" },
    { icon: "iv", title: "創業者利潤の最大化", desc: "適正な企業価値評価と複数候補先からの提案により、納得感のある条件を引き出します。" },
  ];

  const concerns = [
    "後継者がいない／親族内承継が難しい",
    "従業員の雇用を譲渡後も守りたい",
    "個人保証を外して引退したい",
    "業績が良いうちに次のオーナーへ託したい",
    "取引先・お客様への迷惑を最小化したい",
    "創業者として相応の対価を得たい",
  ];

  return (
    <main>
      <PageHero
        eyebrow="For Sellers"
        title="次代へ託す、最良の選択を。"
        lead="創業から築き上げてきた事業を、誰に、どのように託すか。後継者問題に悩む経営者の重要な決断を、最初のご相談から成約後まで、専任チームが伴走します。"
        crumbs={["売り手の方へ"]}
        navigate={navigate}
      />

      {/* Concerns */}
      <section style={{ background: "var(--ivory)" }}>
        <div className="container">
          <SectionHead
            eyebrow="Common Concerns"
            title="このようなお悩みは、ありませんか。"
          />
          <div className="concerns-grid">
            {concerns.map((c, i) => (
              <div key={i} className="concern-item">
                <div className="concern-num font-serif-en">{`0${i + 1}`}</div>
                <div className="concern-text">{c}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 60 }}>
            <button className="btn btn-primary" onClick={() => navigate("contact")}>
              無料で個別相談する <span className="arrow" />
            </button>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section style={{ background: "var(--white)" }}>
        <div className="container">
          <SectionHead
            eyebrow="Our Commitments"
            title="4つのお約束。"
            lead="価格よりも先に、守るべきものがあります。"
          />
          <div className="pillars-grid">
            {pillars.map((p) => <Pillar key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* Why us — quantitative */}
      <section style={{ background: "var(--paper)" }}>
        <div className="container">
          <SectionHead
            eyebrow="Why NexusM&A"
            title="数字で見る、選ばれる理由。"
          />
          <div className="why-grid">
            <div className="why-card">
              <div className="why-num"><span className="ticker-num" style={{ fontSize: 80 }}>92</span><span style={{ fontFamily: "var(--serif-jp)", fontSize: 22, color: "var(--ink-500)" }}>%</span></div>
              <div className="why-label">譲渡条件達成率</div>
              <p>当社が伴走した案件のうち、ご相談時に経営者が掲げた希望条件を達成した割合。</p>
            </div>
            <div className="why-card">
              <div className="why-num"><span className="ticker-num" style={{ fontSize: 80 }}>3,200</span><span style={{ fontFamily: "var(--serif-jp)", fontSize: 22, color: "var(--ink-500)" }}>社</span></div>
              <div className="why-label">買い手候補ネットワーク</div>
              <p>事業会社・PEファンド・地方銀行系投資会社まで、多様な譲渡先候補にアプローチ可能。</p>
            </div>
            <div className="why-card">
              <div className="why-num"><span className="ticker-num" style={{ fontSize: 80 }}>11.4</span><span style={{ fontFamily: "var(--serif-jp)", fontSize: 22, color: "var(--ink-500)" }}>ヶ月</span></div>
              <div className="why-label">平均成約期間</div>
              <p>初回ご相談から最終契約締結まで。業種・規模により変動しますが、業界平均より約30%短縮。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <div className="cta-inner">
            <div>
              <div className="eyebrow" style={{ color: "var(--gold-400)" }}>Confidential</div>
              <h2 style={{ color: "var(--ivory)", fontSize: 34, marginTop: 18, lineHeight: 1.6 }}>
                まずは、現状をお聞かせください。
              </h2>
              <p style={{ color: "rgba(247,242,233,0.7)", marginTop: 22, fontSize: 14, maxWidth: 520 }}>
                秘密厳守。簡易企業評価（無料）も承ります。情報を出していただく前に、まずはお話を伺います。
              </p>
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

function PageBuyer({ navigate }) {
  const pillars = [
    { icon: "i", title: "非公開案件への独自ソーシング", desc: "国内3,200社のネットワークと自社オリジネーションチームによる、表に出ない案件を継続的にご紹介。" },
    { icon: "ii", title: "戦略適合度の高いマッチング", desc: "貴社の中期経営計画・KPIを起点に、地理・事業・顧客基盤の補完性から候補を絞り込みます。" },
    { icon: "iii", title: "投資仮説の構築支援", desc: "市場・競合・財務・人材の4軸で投資仮説を共同設計。社内稟議で説得力を持つレポートを作成。" },
    { icon: "iv", title: "PMI（統合）まで伴走", desc: "成約後の100日プランから1年目の振り返りまで、人事・会計・ITの統合を継続支援。" },
  ];

  const usecases = [
    { tag: "戦略類型 A", title: "事業領域の拡張", desc: "既存事業に隣接する商材・顧客チャネルを獲得し、クロスセルで売上を伸ばす。" },
    { tag: "戦略類型 B", title: "地理的拡張", desc: "未進出エリアの地盤を持つ企業を取り込み、全国展開を一気に加速。" },
    { tag: "戦略類型 C", title: "技術・人材の獲得", desc: "希少な技術ノウハウや専門人材をチームごと迎え入れる。" },
    { tag: "戦略類型 D", title: "ロールアップ", desc: "断片化された業界で、複数の中小企業を順次取得して市場シェアを形成。" },
  ];

  return (
    <main>
      <PageHero
        eyebrow="For Buyers"
        title="戦略的成長のための、確かな案件を。"
        lead="自社単独では到達できない速度と確実性で、企業の中長期成長を実現する。ノンネームから最終契約・PMIまで、買い手側のプロセス全体をサポートします。"
        crumbs={["買い手の方へ"]}
        navigate={navigate}
      />

      {/* Strategic use-cases */}
      <section style={{ background: "var(--ivory)" }}>
        <div className="container">
          <SectionHead
            eyebrow="Strategic Patterns"
            title="どのような戦略目的にも、対応します。"
          />
          <div className="usecase-grid">
            {usecases.map((u, i) => (
              <div key={i} className="usecase-card">
                <div className="usecase-tag font-serif-en">{u.tag}</div>
                <h4 className="font-serif-jp" style={{ fontSize: 22, margin: "20px 0 16px" }}>{u.title}</h4>
                <p style={{ color: "var(--ink-500)", fontSize: 14, lineHeight: 1.9 }}>{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--white)" }}>
        <div className="container">
          <SectionHead
            eyebrow="Our Capabilities"
            title="4つの提供価値。"
          />
          <div className="pillars-grid">
            {pillars.map((p) => <Pillar key={p.title} {...p} />)}
          </div>
        </div>
      </section>

      {/* Process for buyers */}
      <section style={{ background: "var(--navy-900)", color: "var(--ivory)" }}>
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" style={{ color: "var(--gold-400)" }}>Buyer's Process</div>
            <h2 style={{ color: "var(--ivory)", fontSize: 38, marginTop: 16 }}>戦略策定から、統合まで。</h2>
            <p className="lead" style={{ color: "rgba(247,242,233,0.65)" }}>
              貴社の事業戦略を起点に、ターゲット選定からPMIまで一気通貫でサポートします。
            </p>
          </div>
          <div className="buyer-flow">
            {[
              { num: "01", title: "戦略の確認", desc: "中期経営計画とM&A方針のすり合わせ。" },
              { num: "02", title: "ターゲットの選定", desc: "ロングリスト〜ショートリストの作成。" },
              { num: "03", title: "アプローチ", desc: "ノンネーム→打診→トップ面談の段階的接触。" },
              { num: "04", title: "DD・契約", desc: "デュー・ディリジェンス、最終契約まで。" },
              { num: "05", title: "PMI", desc: "成約後100日プランで統合を加速。" },
            ].map((s, i) => (
              <div key={i} className="buyer-step">
                <div className="buyer-num font-serif-en">{s.num}</div>
                <div className="buyer-title font-serif-jp">{s.title}</div>
                <div className="buyer-desc">{s.desc}</div>
                {i < 4 && <div className="buyer-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <div className="cta-inner">
            <div>
              <div className="eyebrow" style={{ color: "var(--gold-400)" }}>Buyer Registration</div>
              <h2 style={{ color: "var(--ivory)", fontSize: 34, marginTop: 18, lineHeight: 1.6 }}>
                投資基準をご登録ください。
              </h2>
              <p style={{ color: "rgba(247,242,233,0.7)", marginTop: 22, fontSize: 14, maxWidth: 520 }}>
                希望する業種・規模・地域などをご登録いただくと、要件に合致する案件を優先的にご紹介します。
              </p>
            </div>
            <div className="cta-actions">
              <button className="btn btn-primary" onClick={() => navigate("contact")}>
                買い手登録を行う <span className="arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

window.PageSeller = PageSeller;
window.PageBuyer = PageBuyer;
