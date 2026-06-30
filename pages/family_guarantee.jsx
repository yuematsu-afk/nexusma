/* M&A-light family and owner guarantee landing page */

function PageFamilyGuarantee({ navigate }) {
  const startConsultation = () => {
    try {
      sessionStorage.setItem("nexusma_diagnosis_prefill", JSON.stringify({
        step: 1,
        data: {
          role: "seller",
          concerns: ["経営者保証の扱い", "社長依存", "事業承継", "情報収集"],
          method: "email",
          message: "「社長が倒れた時、家族が困ること」を見ました。経営者保証、会社借入、個人資産、家族への影響について、売却前提ではなく整理したいです。",
        },
      }));
    } catch (error) {
      // sessionStorageが使えない環境でも、通常の問い合わせ導線へ進める。
    }
    navigate("contact");
  };

  const troubleCards = [
    {
      title: "保証と借入の全体像が分からない",
      text: "どの金融機関にいくら借入があり、誰が保証し、何が担保に入っているかが分からないと、家族は最初の判断から止まります。",
    },
    {
      title: "会社のお金と個人のお金が混ざる",
      text: "役員貸付、役員借入、社長個人の立替、会社名義と個人名義の資産が混在していると、相続や承継時に整理が難しくなります。",
    },
    {
      title: "会社を続けるか畳むかを急に迫られる",
      text: "従業員、取引先、金融機関、家族の生活が同時に関わるため、事前整理がないと冷静な比較ができません。",
    },
  ];

  const checklist = [
    "会社の借入先、残高、返済予定、保証人、担保を一覧化している",
    "配偶者や家族が、経営者保証の有無と概要を把握している",
    "会社名義と個人名義の不動産、車両、保険、口座を分けて整理している",
    "役員貸付金・役員借入金・社長立替金の有無を確認している",
    "会社が止まった場合に、給与・仕入・借入返済を何日分支払えるか分かる",
    "社長不在時に金融機関へ誰が連絡するか決まっている",
    "親族内承継、社内承継、第三者承継、廃業の違いを家族で一度話したことがある",
  ];

  return (
    <main>
      <PageHero
        eyebrow="Family & Guarantee Risk"
        title="社長が倒れた時、家族が最初に困るのは会社の借入と保証です。"
        lead="会社のことは社長に任せきり。そうした状態で社長が急に動けなくなると、配偶者や家族が借入、保証、従業員、取引先への対応を迫られることがあります。売却前提ではなく、家族に残る負担を減らすための整理ページです。"
        crumbs={["家族と経営者保証の整理"]}
        navigate={navigate}
      />

      <section style={{ background: "var(--paper)" }}>
        <div className="container narrow">
          <div className="article-detail">
            <p className="article-lead">
              経営者にとって会社の借入や保証は日常業務の一部でも、家族にとっては突然知らされる重い問題になり得ます。特に中小企業では、会社の信用と社長個人の信用が強く結びついていることが多く、社長不在時の混乱は家族にも広がります。
            </p>

            <h2 className="article-heading">家族が困りやすい3つの場面</h2>
            <div className="article-numbered-grid">
              {troubleCards.map((card, i) => (
                <section className="article-numbered-card" key={card.title}>
                  <span className="article-number">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </section>
              ))}
            </div>

            <h2 className="article-heading">家族に負担を残さないためのチェックリスト</h2>
            <ul className="article-checklist">
              {checklist.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <aside className="article-point-box">
              <h3>家族に話すべきことは、売却の話ではありません</h3>
              <ul>
                <li>会社にどの借入と保証があるか</li>
                <li>社長が動けない時、誰が金融機関と従業員へ説明するか</li>
                <li>会社を続ける、縮小する、引き継ぐ、畳む場合の違い</li>
              </ul>
            </aside>

            <h2 className="article-heading">まず整理すべき順番</h2>
            <p>
              最初に確認すべきなのは、借入残高、保証、担保、支払予定、会社と個人の資産の区分です。ここが分からないと、親族内承継、社内承継、第三者承継、廃業のどれを選ぶ場合でも、判断が後手に回ります。
            </p>
            <p>
              逆に、保証や借入の全体像が整理されていれば、社長が会社に残りながら責任を軽くする方法、家族に負担を移さない方法、外部への承継を含めた比較がしやすくなります。
            </p>

            <div className="article-related-box">
              <div className="article-related-head">
                <span className="section-kicker">Related</span>
                <h3>あわせて確認する</h3>
              </div>
              <div className="article-related-grid">
                <a className="article-related-card" href="/owner-emergency-checklist/">
                  <span>社長不在</span>
                  <strong>社長が急に入院した時の会社チェックリスト</strong>
                </a>
                <a className="article-related-card" href="/columns/owner-guarantee-succession-first-step/">
                  <span>経営者保証</span>
                  <strong>経営者保証がある会社の事業承継で最初に見ること</strong>
                </a>
              </div>
            </div>

            <div className="article-cta">
              <h3>家族に残る保証・借入の負担を整理しませんか。</h3>
              <p>売却を決める前に、会社の借入、経営者保証、個人資産、社長不在時の対応を整理できます。まずはメール中心の無料相談から始められます。</p>
              <a className="btn btn-ghost" href="/assets/downloads/family-guarantee-risk-guide.pdf" target="_blank" rel="noopener noreferrer">無料PDFを読む <span className="arrow" /></a>
              <button className="btn btn-ghost" onClick={() => navigate("diagnosis")}>社長不在90日診断を受ける <span className="arrow" /></button>
              <button className="btn btn-primary" onClick={startConsultation}>保証と家族への影響を相談する <span className="arrow" /></button>
              <p className="article-cta-note">PDFは登録不要で読めます。相談フォームには、このページを見た前提の相談内容が自動で反映されます。電話番号は任意です。</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

window.PageFamilyGuarantee = PageFamilyGuarantee;
