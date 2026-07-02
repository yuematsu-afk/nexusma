/* Free resources hub */

function PageResources({ navigate }) {
  const startResourceConsultation = () => {
    try {
      sessionStorage.setItem("nexusma_diagnosis_prefill", JSON.stringify({
        step: 1,
        data: {
          role: "seller",
          source: "resources",
          concerns: ["社長依存", "事業承継", "経営者保証の扱い", "会社借入・返済予定", "情報収集"],
          method: "email",
          message: "無料資料ページを見ました。売却を決めているわけではありませんが、社長不在、後継者、経営者保証、会社借入について現状を整理したいです。",
        },
      }));
    } catch (error) {
      // sessionStorage が使えない環境でも通常の問い合わせ導線へ進める。
    }
    navigate("contact");
  };

  const startFamilyConsultation = () => {
    try {
      sessionStorage.setItem("nexusma_diagnosis_prefill", JSON.stringify({
        step: 1,
        data: {
          role: "seller",
          source: "family_guarantee",
          concerns: ["経営者保証の扱い", "会社借入・返済予定", "家族への影響", "社長依存", "情報収集"],
          method: "email",
          message: "無料資料ページで家族と保証のPDFを見ました。経営者保証、会社借入、個人資産、家族への影響について整理したいです。",
        },
      }));
    } catch (error) {
      // sessionStorage が使えない環境でも通常の問い合わせ導線へ進める。
    }
    navigate("contact");
  };

  const resources = [
    {
      label: "PDF",
      title: "社長が倒れた時、家族が困る借入と保証",
      text: "経営者保証、会社借入、根保証、個人資産、家族への影響を整理する無料PDFです。売却前提ではなく、まず家族に残る負担を見える化します。",
      href: "/assets/downloads/family-guarantee-risk-guide.pdf",
      primary: "PDFを読む",
      external: true,
      secondary: "保証・借入を相談する",
      onSecondary: startFamilyConsultation,
    },
    {
      label: "PDF",
      title: "社長不在90日チェックガイド",
      text: "社長が90日不在でも会社が回るかを確認するための無料PDFです。資金繰り、取引先、従業員、判断権限の属人化を整理します。",
      href: "/assets/downloads/owner-90day-absence-guide.pdf",
      primary: "PDFを読む",
      external: true,
      secondary: "90日診断を受ける",
      onSecondary: () => navigate("diagnosis"),
    },
    {
      label: "チェックリスト",
      title: "社長が急に入院した時の会社チェックリスト",
      text: "給与、仕入先支払、借入返済、金融機関対応、家族への影響など、社長不在時に止まりやすい業務を確認できます。",
      href: "/owner-emergency-checklist/",
      primary: "チェックリストを見る",
      secondary: "匿名診断へ進む",
      onSecondary: () => navigate("diagnosis"),
    },
    {
      label: "匿名診断",
      title: "社長不在90日診断",
      text: "会社名・電話番号不要。10問に答えるだけで、社長依存、後継者、財務、取引先依存の準備度を確認できます。",
      href: "/#/diagnosis",
      primary: "診断を始める",
      secondary: "相談フォームへ進む",
      onSecondary: () => navigate("contact"),
    },
  ];

  const themes = [
    "経営者保証や会社借入を家族に残したくない",
    "社長が急に入院した時に会社が止まるか不安",
    "M&Aや売却を決める前に、まず現状を整理したい",
    "後継者不在だが、いきなり営業電話を受けたくない",
  ];

  const guideCards = [
    {
      title: "家族に保証や借入を残したくない",
      text: "まず「社長が倒れた時、家族が困る借入と保証」を読んで、借入先、保証人、担保、個人資産との関係を確認します。",
      action: "家族と保証のPDF",
      href: "/assets/downloads/family-guarantee-risk-guide.pdf",
      external: true,
    },
    {
      title: "社長が急に不在になると会社が止まりそう",
      text: "給与、支払、金融機関、主要取引先、重要IDの所在を確認します。会社名を出す前に90日診断で現在地を把握できます。",
      action: "90日診断",
      href: "/#/diagnosis",
    },
    {
      title: "M&Aを考える前に、何を整理すべきか知りたい",
      text: "社長依存、後継者候補、取引先依存、資金繰りを棚卸しすると、第三者承継、社内承継、廃業の比較がしやすくなります。",
      action: "チェックリスト",
      href: "/owner-emergency-checklist/",
    },
  ];

  const steps = [
    "PDFやチェックリストを読み、該当する項目に印を付ける",
    "借入、保証、支払予定、主要取引先、社長しか知らない情報を書き出す",
    "社長が30日・90日不在になった場合に、誰が何を判断するかを確認する",
    "自社だけで整理しづらい項目だけ、無料相談フォームから質問する",
  ];

  const faqs = [
    {
      q: "資料を読むと営業電話が来ますか。",
      a: "PDF閲覧だけでは連絡先を取得しません。相談フォームでも電話番号は任意です。まずはメール中心で、売却前提ではない整理相談として始められます。",
    },
    {
      q: "M&Aをまだ考えていなくても使えますか。",
      a: "使えます。このページは、いきなり売却を決めるためではなく、社長依存、借入、保証、家族への影響を整理するための入口です。",
    },
    {
      q: "家族や従業員に不安を与えずに整理できますか。",
      a: "可能です。最初から社内に共有する必要はありません。まず社長本人が情報を整理し、必要な範囲だけ家族や幹部に共有する順番が現実的です。",
    },
    {
      q: "相談すると必ずM&Aの提案になりますか。",
      a: "なりません。親族内承継、社内承継、第三者承継、廃業、現状維持を比較するための初期整理として扱います。",
    },
  ];

  return (
    <main>
      <PageHero
        eyebrow="Free Resources"
        title="売却を決める前に読める、無料資料"
        lead="NexusM&Aでは、いきなりM&A相談へ進む前に、社長依存、経営者保証、会社借入、家族への影響を整理できる無料資料を用意しています。登録不要で読めます。"
        crumbs={["無料資料"]}
        navigate={navigate}
      />

      <section style={{ background: "var(--paper)" }}>
        <div className="container">
          <SectionHead
            eyebrow="Start Before M&A"
            title="まず、会社が止まる場所と家族に残る負担を確認する"
            lead="後継者不足やM&Aの話を正面から出す前に、経営者本人が受け入れやすい入口として、会社と家族のリスク整理から始められます。"
          />

          <div className="article-numbered-grid" style={{ marginTop: 34 }}>
            {resources.map((item) => (
              <article className="article-numbered-card" key={item.title}>
                <span className="tag tag-gold">{item.label}</span>
                <h3 style={{ marginTop: 16 }}>{item.title}</h3>
                <p>{item.text}</p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
                  <a
                    className="btn btn-ghost"
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    style={{ textDecoration: "none" }}
                  >
                    {item.primary} <span className="arrow" />
                  </a>
                  <button className="btn btn-primary" onClick={item.onSecondary}>
                    {item.secondary} <span className="arrow" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <aside className="article-point-box" style={{ marginTop: 42 }}>
            <h3>この資料ページで想定している相談</h3>
            <ul>
              {themes.map((theme) => <li key={theme}>{theme}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container">
          <SectionHead
            eyebrow="How to Choose"
            title="悩み別に、最初に読む資料を選ぶ"
            lead="社長にとって受け入れやすい入口は、M&Aそのものではなく「会社と家族に残る困りごと」の整理です。"
          />
          <div className="article-numbered-grid" style={{ marginTop: 34 }}>
            {guideCards.map((card, i) => (
              <article className="article-numbered-card" key={card.title}>
                <span className="article-number">{String(i + 1).padStart(2, "0")}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <a
                  className="btn btn-ghost"
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  style={{ marginTop: 18, textDecoration: "none" }}
                >
                  {card.action}へ進む <span className="arrow" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--paper)" }}>
        <div className="container narrow">
          <SectionHead
            eyebrow="Practical Steps"
            title="資料を読んだ後にやること"
            lead="資料を読んで終わりにせず、社長しか分からない情報を少しずつ外に出すことで、承継やM&Aの前段階が整います。"
          />
          <ul className="article-checklist" style={{ marginTop: 34 }}>
            {steps.map((step) => <li key={step}>{step}</li>)}
          </ul>

          <aside className="article-point-box" style={{ marginTop: 34 }}>
            <h3>相談に進む目安</h3>
            <ul>
              <li>借入・保証・担保の一覧を家族が把握していない</li>
              <li>社長が1か月不在になると給与や支払判断が止まる</li>
              <li>後継者候補はいるが、金融機関や主要取引先への説明に不安がある</li>
              <li>会社を売るかどうかではなく、選択肢を先に比較したい</li>
            </ul>
            <div style={{ marginTop: 22 }}>
              <button className="btn btn-primary" onClick={startResourceConsultation}>
                無料資料をもとに相談する <span className="arrow" />
              </button>
            </div>
          </aside>
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container narrow">
          <SectionHead
            eyebrow="FAQ"
            title="無料資料についてよくある質問"
            lead="売却を決める前の情報整理として使えるよう、連絡先取得や営業電話を前提にしない導線にしています。"
          />
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <details className="faq-item" key={faq.q}>
                <summary>
                  <span className="faq-q-num">Q{String(i + 1).padStart(2, "0")}</span>
                  <span className="faq-q-text">{faq.q}</span>
                  <span className="faq-toggle">+</span>
                </summary>
                <div className="faq-a">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ConversionCTA
        navigate={navigate}
        eyebrow="No Sales Call First"
        title="資料を読んで、気になるところだけ相談できます。"
        lead="会社名や電話番号を出さずに始められる診断と、メール中心の相談フォームを用意しています。売却を決めていなくても利用できます。"
        primaryLabel="無料相談フォームへ"
        secondaryLabel="社長不在90日診断"
      />
    </main>
  );
}

window.PageResources = PageResources;
