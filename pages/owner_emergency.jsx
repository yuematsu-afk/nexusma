/* M&A-light owner emergency landing page */

function PageOwnerEmergency({ navigate }) {
  const startConsultation = () => {
    try {
      sessionStorage.setItem("nexusma_diagnosis_prefill", JSON.stringify({
        step: 1,
        data: {
          role: "seller",
          source: "owner_emergency",
          concerns: ["社長依存", "事業承継", "経営者保証の扱い", "家族への影響", "情報収集"],
          method: "email",
          message: "「社長が急に不在になった時の会社チェックリスト」を見ました。自社で社長が入院・急病になった場合に止まりそうな業務と、今から整理すべきことを相談したいです。",
        },
      }));
    } catch (error) {
      // sessionStorageが使えない環境でも、通常の問い合わせ導線へ進める。
    }
    navigate("contact");
  };

  const risks = [
    {
      title: "お金が止まる",
      text: "給与、仕入先への支払い、借入返済、税金、保険料など、社長しか資金繰りを把握していない会社では、数週間で判断が詰まります。",
    },
    {
      title: "取引先対応が止まる",
      text: "主要顧客、仕入先、外注先、金融機関との関係が社長個人に集中していると、誰が何を説明するか分からなくなります。",
    },
    {
      title: "家族に負担が移る",
      text: "経営者保証、担保、会社借入、個人資産との関係が整理されていないと、配偶者や家族が急に判断を迫られる可能性があります。",
    },
  ];

  const checklist = [
    "金融機関の担当者、借入、返済予定、担保、保証人を一覧にしている",
    "給与支払、仕入支払、税金、社会保険の支払予定を社長以外が確認できる",
    "主要顧客・仕入先・外注先の連絡先と、通常の対応者が分かる",
    "契約書、許認可、保険、リース、重要IDの保管場所が分かる",
    "社長不在時に、誰が従業員へ説明するか決まっている",
    "家族が会社の借入や保証の概要を把握している",
    "社長が戻れない場合の、代表変更・休業・譲渡・廃業の選択肢を比較したことがある",
  ];

  return (
    <main>
      <PageHero
        eyebrow="Owner Emergency Checklist"
        title="社長が急に入院したら、会社は何日止まらずに動けますか。"
        lead="M&Aや売却を考える前に、まず確認すべきことがあります。社長が急病・事故・長期不在になった時、資金繰り、従業員、取引先、家族に何が起きるかを整理するためのページです。"
        crumbs={["社長不在チェックリスト"]}
        navigate={navigate}
      />

      <section style={{ background: "var(--paper)" }}>
        <div className="container narrow">
          <div className="article-detail">
            <p className="article-lead">
              多くの中小企業では、社長が売上、資金繰り、金融機関対応、重要な判断を一人で抱えています。普段はそれで回っていても、社長が急に不在になると、会社は「誰に聞けばよいか分からない状態」になります。
            </p>

            <h2 className="article-heading">最初に起きやすい3つの停止</h2>
            <div className="article-numbered-grid">
              {risks.map((risk, i) => (
                <section className="article-numbered-card" key={risk.title}>
                  <span className="article-number">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{risk.title}</h3>
                  <p>{risk.text}</p>
                </section>
              ))}
            </div>

            <h2 className="article-heading">会社が止まるかを確認するチェックリスト</h2>
            <ul className="article-checklist">
              {checklist.map((item) => <li key={item}>{item}</li>)}
            </ul>

            <aside className="article-point-box">
              <h3>重要なのは「売るかどうか」ではありません</h3>
              <ul>
                <li>社長が戻れる場合は、業務を止めない仕組みを作る</li>
                <li>社長が戻れない場合は、家族・従業員・取引先への影響を減らす</li>
                <li>会社を残す、縮小する、誰かに引き継ぐ、第三者へ承継する選択肢を比較する</li>
              </ul>
            </aside>

            <h2 className="article-heading">今すぐできる現実的な対応</h2>
            <p>
              まずは、社長しか知らない情報を減らすことです。銀行、給与、支払、主要取引先、契約書、許認可、保険、重要IDの所在を一覧にするだけでも、社長不在時の混乱は下げられます。
            </p>
            <p>
              そのうえで、社長が会社に残り続ける場合、役割を軽くする場合、親族や社内に引き継ぐ場合、第三者に承継する場合を比較します。最初からM&Aを決める必要はありません。
            </p>

            <div className="article-related-box">
              <div className="article-related-head">
                <span className="section-kicker">Related</span>
                <h3>家族と保証も確認する</h3>
              </div>
              <div className="article-related-grid">
                <a className="article-related-card" href="/family-guarantee-risk/">
                  <span>家族と保証</span>
                  <strong>社長が倒れた時、家族が困る借入・保証の整理</strong>
                </a>
                <a className="article-related-card" href="/columns/owner-guarantee-succession-first-step/">
                  <span>経営者保証</span>
                  <strong>経営者保証がある会社の事業承継で最初に見ること</strong>
                </a>
                <a className="article-related-card" href="/resources/">
                  <span>無料資料</span>
                  <strong>社長不在・保証・借入を整理する資料一覧</strong>
                </a>
              </div>
            </div>

            <div className="article-cta">
              <h3>社長不在時に止まる業務を整理しませんか。</h3>
              <p>会社名や電話番号を出さずに、まずは匿名診断で現在地を確認できます。具体的に相談したい場合は、メール中心で初期整理から対応します。</p>
              <button className="btn btn-ghost" onClick={() => navigate("diagnosis")}>社長不在90日診断を受ける <span className="arrow" /></button>
              <a className="btn btn-ghost" href="/assets/downloads/family-guarantee-risk-guide.pdf" target="_blank" rel="noopener noreferrer">家族と保証のPDFを読む <span className="arrow" /></a>
              <a className="btn btn-ghost" href="/resources/">無料資料一覧を見る <span className="arrow" /></a>
              <button className="btn btn-primary" onClick={startConsultation}>チェックリストをもとに相談する <span className="arrow" /></button>
              <p className="article-cta-note">売却前提ではなく、社長依存・資金繰り・家族への影響を整理する相談として送信できます。</p>
            </div>
          </div>
        </div>
      </section>

      <ConversionCTA
        navigate={navigate}
        eyebrow="Prepare Before Trouble"
        title="問題が起きる前に、会社が止まる場所を確認する。"
        lead="社長が元気なうちに整理しておくほど、選択肢は広がります。診断だけなら連絡先不要です。"
        primaryLabel="無料相談で整理する"
        secondaryLabel="90日診断を受ける"
      />
    </main>
  );
}

window.PageOwnerEmergency = PageOwnerEmergency;
