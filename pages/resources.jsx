/* Free resources hub */

function PageResources({ navigate }) {
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
