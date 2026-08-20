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
        title="社長・代表取締役が急病で不在になったら、会社は何日動けますか。"
        lead="病気・入院・事故・長期療養で代表者が不在になった時、資金繰り、給与、取引先、金融機関、家族に起きることを時系列で確認するチェックリストです。"
        crumbs={["社長不在チェックリスト"]}
        navigate={navigate}
      />

      <section style={{ background: "var(--paper)" }}>
        <div className="container narrow">
          <div className="article-detail">
            <p className="article-lead">
              多くの中小企業では、社長が売上、資金繰り、金融機関対応、重要な判断を一人で抱えています。普段はそれで回っていても、社長が急に不在になると、会社は「誰に聞けばよいか分からない状態」になります。
            </p>

            <figure className="article-summary-figure">
              <img src="/assets/generated/existing-owner-emergency-summary.webp" alt="社長不在後の24時間、7日、30日、90日の対応を示す図" />
              <figcaption>社長不在直後は連絡と緊急支払、7日以内は給与・取引先、30日以内は代表権・契約、90日以降は承継を含む選択肢を確認します。</figcaption>
            </figure>

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

            <figure className="article-summary-figure">
              <img src="/assets/generated/existing-owner-emergency-actions.webp" alt="社長不在時に連絡、支払、社内外説明、銀行と契約、継続判断を進める順序" loading="lazy" />
              <figcaption>社長不在時は、連絡、緊急支払、社内外への説明、銀行・契約、会社の継続判断の順に確認します。</figcaption>
            </figure>

            <h2 className="article-heading">社長不在後の24時間・7日・30日・90日</h2>
            <div className="article-numbered-grid">
              {[
                { title: "24時間以内", text: "代表者の容体と意思決定可否を確認し、家族・役員・幹部の連絡経路と、緊急支払・重要取引への対応者を決めます。" },
                { title: "7日以内", text: "給与、仕入、税金、借入返済の予定を確認し、金融機関・主要取引先・従業員へ誰が何を伝えるかを整理します。" },
                { title: "30日以内", text: "代表権、契約、許認可、銀行取引、重要判断を継続できる体制を確認し、復帰までの暫定運営方針を決めます。" },
                { title: "90日を超える場合", text: "復帰、代表変更、社内承継、外部との提携、第三者承継・M&A、休廃業を比較し、家族と従業員への影響を整理します。" },
              ].map((item, i) => (
                <section className="article-numbered-card" key={item.title}>
                  <span className="article-number">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </section>
              ))}
            </div>

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

            <h2 className="article-heading">よくある質問</h2>
            <div className="article-related-grid">
              <section className="article-related-card">
                <span>Q1</span>
                <strong>代表取締役が入院しただけで会社は止まりますか。</strong>
                <p>入院だけで直ちに会社が止まるとは限りません。ただし、銀行取引、契約、重要判断、印章・ID管理が代表者一人に集中していると、実務が止まる可能性があります。</p>
              </section>
              <section className="article-related-card">
                <span>Q2</span>
                <strong>社長が意思表示できない場合、最初に何を確認しますか。</strong>
                <p>役員構成、定款、代表権、緊急支払、借入・保証、重要契約、許認可の順に確認します。法的判断が必要な場合は弁護士・司法書士等へ相談してください。</p>
              </section>
              <section className="article-related-card">
                <span>Q3</span>
                <strong>M&Aを考えていなくても相談できますか。</strong>
                <p>相談できます。まず社長不在時に止まる業務を整理し、社内承継、業務分散、提携、第三者承継を比較します。</p>
              </section>
            </div>

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
