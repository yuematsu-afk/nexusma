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
    { icon: "i", title: "事業承継問題の整理", desc: "後継者不在に悩む経営者へ、親族内承継・社内承継・第三者承継などの選択肢を整理します。" },
    { icon: "ii", title: "従業員・取引先への配慮", desc: "雇用継続や取引維持に関する希望条件を確認し、候補先との協議事項として整理します。" },
    { icon: "iii", title: "経営者保証の扱い", desc: "個人保証や担保の扱いについて、専門家・金融機関への相談も含めて検討事項を整理します。" },
    { icon: "iv", title: "納得感のある条件整理", desc: "評価手法や前提条件を説明し、譲渡条件を検討するための材料を整理します。" },
  ];

  const concerns = [
    "後継者がいない／親族内承継が難しい",
    "従業員の雇用を譲渡後も守りたい",
    "個人保証の扱いを整理しておきたい",
    "業績が良いうちに次のオーナーへ託したい",
    "取引先・お客様への迷惑を最小化したい",
    "創業者として相応の対価を得たい",
  ];

  return (
    <main>
      <PageHero
        eyebrow="For Sellers"
        title="次代へ託す選択肢を、静かに整理する。"
        lead="創業から築き上げてきた事業を、誰に、どのように託すか。後継者問題に悩む経営者の重要な決断を、初期相談から丁寧に整理します。"
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

      {/* Why us — policy */}
      <section style={{ background: "var(--paper)" }}>
        <div className="container">
          <SectionHead
            eyebrow="Why NexusM&A"
            title="安心して相談いただくための方針。"
          />
          <div className="why-grid">
            <div className="why-card">
              <div className="why-num"><span className="ticker-num" style={{ fontSize: 56 }}>01</span></div>
              <div className="why-label">秘密保持</div>
              <p>具体的な候補先への開示は、譲り渡し側の同意と秘密保持を前提に段階的に進めます。</p>
            </div>
            <div className="why-card">
              <div className="why-num"><span className="ticker-num" style={{ fontSize: 56 }}>02</span></div>
              <div className="why-label">重要事項説明</div>
              <p>業務範囲、手数料、専任条項、テール条項などを契約前に書面等で説明します。</p>
            </div>
            <div className="why-card">
              <div className="why-num"><span className="ticker-num" style={{ fontSize: 56 }}>03</span></div>
              <div className="why-label">停止意思の尊重</div>
              <p>営業・案内を希望しない意思表示があった場合には、その意思を尊重して対応します。</p>
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
                ご相談内容は秘密保持に配慮して取り扱います。情報を出していただく前に、まずはお話を伺います。
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
    { icon: "i", title: "投資方針の整理", desc: "希望業種、地域、規模、投資目的を伺い、検討対象となる企業像を整理します。" },
    { icon: "ii", title: "戦略適合度の確認", desc: "貴社の事業戦略を起点に、顧客基盤・地域・人材・技術などの補完性を確認します。" },
    { icon: "iii", title: "検討資料の整理", desc: "検討に必要な情報を段階的に整理し、意思決定に必要な論点を明確にします。" },
    { icon: "iv", title: "成約後の移行論点", desc: "成約後の運営体制、人材、管理、引継ぎに関する論点を事前に整理します。" },
  ];

  const usecases = [
    { tag: "戦略類型 A", title: "事業領域の拡張", desc: "既存事業に隣接する商材・顧客チャネルを獲得し、クロスセルで売上を伸ばす。" },
    { tag: "戦略類型 B", title: "地理的拡張", desc: "未進出エリアの顧客基盤や運営体制を持つ企業との組み合わせを検討する。" },
    { tag: "戦略類型 C", title: "技術・人材の獲得", desc: "希少な技術ノウハウや専門人材をチームごと迎え入れる。" },
    { tag: "戦略類型 D", title: "ロールアップ", desc: "断片化された業界で、複数の中小企業を順次取得して市場シェアを形成。" },
  ];

  return (
    <main>
      <PageHero
        eyebrow="For Buyers"
        title="戦略的成長のための、検討材料を。"
        lead="自社の成長戦略に合う可能性のある選択肢を、ノンネーム段階から丁寧に確認します。"
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
              貴社の事業戦略を起点に、候補先の検討から成約後の移行論点まで整理します。
            </p>
          </div>
          <div className="buyer-flow">
            {[
              { num: "01", title: "戦略の確認", desc: "中期経営計画とM&A方針のすり合わせ。" },
              { num: "02", title: "ターゲットの選定", desc: "ロングリスト〜ショートリストの作成。" },
              { num: "03", title: "アプローチ", desc: "ノンネーム→打診→トップ面談の段階的接触。" },
              { num: "04", title: "DD・契約", desc: "デュー・ディリジェンス、最終契約まで。" },
              { num: "05", title: "PMI", desc: "成約後の移行方針や確認事項を整理。" },
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
                希望する業種・規模・地域などをご登録いただき、条件に合う可能性がある場合に個別にご案内します。
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
