/* 90-day president absence diagnosis */
const diagnosisQuestions = [
  { text: "社長以外にも、重要な経営判断を任せられる人がいますか？", area: "decision" },
  { text: "社長が不在でも、主要顧客との商談を進められる人がいますか？", area: "sales" },
  { text: "社長以外にも、銀行対応や資金繰りの状況を把握している人がいますか？", area: "finance" },
  { text: "主要顧客との関係を、社長以外の人も築けていますか？", area: "sales" },
  { text: "見積価格や値引きを、社長以外が一定範囲で決裁できていますか？", area: "decision" },
  { text: "採用、退職、評価などの人事判断を任せられる人がいますか？", area: "people" },
  { text: "重要な契約、パスワード、取引情報を、必要な人と共有できていますか？", area: "operations" },
  { text: "会社の3年後について、後継者候補や幹部と話し合えていますか？", area: "succession" },
  { text: "社長が1週間不在でも、売上や日常業務を維持できる状態ですか？", area: "operations" },
  { text: "社長自身が、現在の働き方を今後5年以上続けられる状態ですか？", area: "succession" }
];

const diagnosisChoices = [
  { label: "概ねできている", score: 0 },
  { label: "一部できている", score: 1 },
  { label: "できていない", score: 2 }
];

const diagnosisAreaAdvice = {
  general: { title: "現在の体制を維持する", copy: "大きな偏りは見られません。担当者の退職や異動後も同じ体制が続くか、半年ごとに確認してください。" },
  multiple: { title: "複数領域を一つずつ切り分ける", copy: "同じ水準の課題が複数あります。最も短時間で移せる判断や情報を一つ選び、改善後に再診断してください。" },
  decision: { title: "意思決定の分散", copy: "金額や案件種別ごとの決裁基準を決め、社長以外が判断できる範囲を少しずつ広げることが第一歩です。" },
  sales: { title: "顧客関係の組織化", copy: "主要顧客との接点を複数人に増やし、商談履歴や重要情報を会社の資産として残す必要があります。" },
  finance: { title: "資金情報の共有", copy: "資金繰り表、借入条件、金融機関の窓口を、信頼できる幹部と共有するところから始めます。" },
  people: { title: "幹部と後継者の育成", copy: "役職だけでなく、任せる判断と責任範囲を明文化し、実際の経営判断を経験してもらう必要があります。" },
  operations: { title: "業務と情報の標準化", copy: "社長しか知らない情報を洗い出し、緊急時に必要な順番で共有・文書化することが有効です。" },
  succession: { title: "5年後の経営体制", copy: "親族・社内・第三者を含め、誰に何を引き継ぐかを決める前に、希望条件と期限を整理しましょう。" }
};

const diagnosisOptions = [
  ["権限移譲と業務標準化", "社内で決裁基準と業務手順を整え、社長不在でも回る範囲を増やす。"],
  ["幹部採用・後継者育成", "社内外から経営を担える人材を確保し、時間をかけて判断を移す。"],
  ["外部専門家への委託", "財務、人事、法務など、社長に集中する専門業務を外へ切り出す。"],
  ["業務提携・資本提携", "独立性を保ちながら、他社の人材、販路、資金を活用する。"],
  ["第三者への経営承継", "雇用や社名などの希望条件を定め、外部の企業や経営者へ段階的に引き継ぐ。"]
];

function getDiagnosisAssessment(answers) {
  const total = answers.reduce((sum, score) => sum + score, 0);
  let level = "低";
  let summary = "社長以外にも判断と情報が分散されており、比較的継続性の高い状態です。ただし、点数が高かった領域は緊急時に止まる可能性があります。";
  if (total > 12) {
    level = "高";
    summary = "社長の長期不在が、売上、資金、従業員のいずれかに大きく影響する可能性があります。緊急対応と5年後の体制を分けて考えることが重要です。";
  } else if (total > 5) {
    level = "中";
    summary = "日常業務は回っていても、重要な判断や関係が社長に集中しています。今から一つずつ分散すれば、承継や提携を急いで決める必要はありません。";
  }

  const scores = {};
  const counts = {};
  diagnosisQuestions.forEach((q, i) => {
    scores[q.area] = (scores[q.area] || 0) + answers[i];
    counts[q.area] = (counts[q.area] || 0) + 1;
  });
  const normalized = Object.entries(scores).map(([area, score]) => [area, score / (counts[area] * 2)]);
  const highest = Math.max(...normalized.map((entry) => entry[1]));
  const priorityAreas = highest === 0 ? [] : normalized.filter((entry) => entry[1] === highest).map((entry) => entry[0]);
  if (level === "低" && highest >= 0.75) {
    level = "中";
    summary = "全体の点数は低い一方、特定の領域が社長に集中しています。その領域が止まると会社全体へ影響するため、先に分散することが重要です。";
  }

  const priorityKey = priorityAreas.length === 0 ? "general" : priorityAreas.length > 1 ? "multiple" : priorityAreas[0];
  return { total, level, summary, priority: diagnosisAreaAdvice[priorityKey] };
}

function PageDiagnosis({ navigate }) {
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [memoOpen, setMemoOpen] = useState(false);
  const [memo, setMemo] = useState("");
  const [need, setNeed] = useState("社長に業務が集中している");
  const [timing, setTiming] = useState("まだ決めていない");
  const [protect, setProtect] = useState([]);
  const [question, setQuestion] = useState("");

  const done = answers.length === diagnosisQuestions.length;
  const result = done ? getDiagnosisAssessment(answers) : null;
  const progress = done ? 100 : started ? ((index + 1) / diagnosisQuestions.length) * 100 : 0;

  const choose = (score) => {
    const next = answers.slice(0, index);
    next[index] = score;
    if (index + 1 >= diagnosisQuestions.length) {
      setAnswers(next);
    } else {
      setAnswers(next);
      setIndex(index + 1);
    }
  };

  const toggleProtect = (value) => {
    setProtect((items) => items.includes(value) ? items.filter((item) => item !== value) : [...items, value]);
  };

  const createMemo = () => {
    const resultLine = result ? `社長依存度：${result.level}（${result.total}/20）\n優先領域：${result.priority.title}` : "診断前";
    const body = [
      "NexusM&A 社長不在90日診断から相談します。",
      "",
      resultLine,
      `悩み：${need}`,
      `守りたいもの：${protect.length ? protect.join("、") : "未選択"}`,
      `検討時期：${timing}`,
      question ? `聞いてみたいこと：${question}` : "",
      "",
      "会社名を出さずに、まず選択肢だけ確認したいです。"
    ].filter(Boolean).join("\n");
    setMemo(body);
  };

  const mailto = `mailto:y.uematsu@sasa-eru.com?subject=${encodeURIComponent("社長不在90日診断の相談")}`;

  return (
    <main className="diagnosis-page">
      <section className="diagnosis-hero">
        <div className="diagnosis-bg" />
        <div className="container diagnosis-hero-grid">
          <div>
            <div className="breadcrumb">
              <a onClick={() => navigate("home")}>Home</a>
              <span className="sep">/</span>
              <span>社長不在90日診断</span>
            </div>
            <div className="eyebrow">90 Days Continuity Check</div>
            <h1 className="font-serif-jp">
              明日から社長が<br />
              <span>90日不在</span>でも、会社は回りますか。
            </h1>
            <p>
              売上、決裁、資金繰り、顧客対応。社長に集中している仕事と、
              今から準備できる選択肢を10問で整理します。
            </p>
            <div className="diagnosis-hero-actions">
              <button className="btn btn-primary" onClick={() => setStarted(true)}>
                3分で匿名診断する <span className="arrow" />
              </button>
              <button className="btn btn-ghost-light" onClick={() => navigate("contact")}>
                通常の無料相談へ
              </button>
            </div>
            <div className="diagnosis-trust">
              <span>会社名不要</span>
              <span>電話番号不要</span>
              <span>営業電話なし</span>
            </div>
          </div>
          <aside className="diagnosis-hero-card">
            <div className="font-serif-en">Anonymous</div>
            <strong>10</strong>
            <p>Questions</p>
            <small>回答はこの画面内で処理されます</small>
          </aside>
        </div>
      </section>

      <section className="diagnosis-workspace">
        <div className="container">
          <div className="diagnosis-panel">
            {!started && !done && (
              <div className="diagnosis-intro">
                <div className="eyebrow">Before M&amp;A</div>
                <h2>これは売却診断ではありません。</h2>
                <p>
                  「自分しか分からない仕事が多い」「休みたくても休めない」。
                  それは経営者の能力不足ではなく、会社の成長過程で起きやすい構造上の問題です。
                </p>
                <button className="btn btn-primary" onClick={() => setStarted(true)}>
                  診断を始める <span className="arrow" />
                </button>
              </div>
            )}

            {started && !done && (
              <div className="diagnosis-question">
                <div className="diagnosis-progress">
                  <span className="font-serif-en">Question {index + 1} / 10</span>
                  <div><i style={{ width: `${progress}%` }} /></div>
                </div>
                <h2>{diagnosisQuestions[index].text}</h2>
                <div className="diagnosis-choice-grid">
                  {diagnosisChoices.map((choice) => (
                    <button key={choice.label} onClick={() => choose(choice.score)}>
                      <span>{choice.label}</span>
                      <small>{choice.score === 0 ? "分散できている" : choice.score === 1 ? "一部集中している" : "社長に集中している"}</small>
                    </button>
                  ))}
                </div>
                <button className="diagnosis-back" disabled={index === 0} onClick={() => setIndex(index - 1)}>
                  ← 前の質問
                </button>
              </div>
            )}

            {done && (
              <div className="diagnosis-result">
                <div className="result-head">
                  <div>
                    <div className="eyebrow">Diagnosis Result</div>
                    <h2>社長依存度：{result.level}</h2>
                    <p>{result.summary}</p>
                  </div>
                  <div className="result-score font-serif-en">
                    <strong>{result.total}</strong>
                    <span>/ 20</span>
                  </div>
                </div>
                <div className="priority-card">
                  <span>最初に確認したい領域</span>
                  <h3>{result.priority.title}</h3>
                  <p>{result.priority.copy}</p>
                </div>
                <div className="action-plan-grid">
                  <article><span>7 Days</span><strong>最小の一つを選ぶ</strong><p>30分以内で共有できる判断や情報を一つ選びます。</p></article>
                  <article><span>30 Days</span><strong>一領域だけ改善する</strong><p>担当者と判断基準を決め、運用してみます。</p></article>
                  <article><span>90 Days</span><strong>変化を比較する</strong><p>再診断し、改善した領域と残った領域を分けます。</p></article>
                </div>
                <h3 className="diagnosis-subtitle">考えられる5つの選択肢</h3>
                <div className="option-list">
                  {diagnosisOptions.map(([title, copy], i) => (
                    <article key={title}>
                      <span className="font-serif-en">{String(i + 1).padStart(2, "0")}</span>
                      <strong>{title}</strong>
                      <p>{copy}</p>
                    </article>
                  ))}
                </div>
                <div className="result-actions">
                  <button className="btn btn-primary" onClick={() => setMemoOpen(true)}>
                    会社名なしで相談メモを作る <span className="arrow" />
                  </button>
                  <button className="btn btn-ghost" onClick={() => { setStarted(false); setIndex(0); setAnswers([]); }}>
                    診断をやり直す
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="diagnosis-promise">
        <div className="container">
          <SectionHead
            eyebrow="Our Promise"
            title="この診断が守ること"
            lead="電話番号を取得せず、M&Aだけを正解にせず、必要以上に不安を煽りません。"
          />
          <div className="promise-grid">
            <article><span>01</span><h3>追いかけない</h3><p>診断だけでは連絡先を取得しないため、営業電話はできません。</p></article>
            <article><span>02</span><h3>決めつけない</h3><p>社内改善、採用、提携、第三者承継を横並びで比較します。</p></article>
            <article><span>03</span><h3>煽らない</h3><p>会社の価値や譲渡可能性を根拠なく断定しません。</p></article>
          </div>
        </div>
      </section>

      {memoOpen && (
        <div className="memo-modal" role="dialog" aria-modal="true" aria-label="相談メモを作る">
          <div className="memo-card">
            <button className="memo-close" onClick={() => setMemoOpen(false)}>×</button>
            <div className="eyebrow">Confidential Memo</div>
            <h2>相談メモを作る</h2>
            <p>入力内容はこの画面内で相談文に変換します。作っただけでは送信されません。</p>
            <label>いま最も近い悩み
              <select value={need} onChange={(e) => setNeed(e.target.value)}>
                <option>社長に業務が集中している</option>
                <option>後継者が決まっていない</option>
                <option>採用や幹部育成が進まない</option>
                <option>今後の成長や独立継続に不安がある</option>
                <option>廃業と承継を比較したい</option>
              </select>
            </label>
            <div className="memo-checks">
              {["従業員の雇用", "社名・ブランド", "取引先との関係", "技術・製品"].map((item) => (
                <label key={item}><input type="checkbox" checked={protect.includes(item)} onChange={() => toggleProtect(item)} />{item}</label>
              ))}
            </div>
            <label>検討時期
              <select value={timing} onChange={(e) => setTiming(e.target.value)}>
                <option>まだ決めていない</option>
                <option>1年以内</option>
                <option>1〜3年以内</option>
                <option>3年以上先</option>
              </select>
            </label>
            <label>聞いてみたいこと（任意）
              <textarea maxLength="200" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="例：従業員に知られずに、選択肢だけ確認できますか？" />
            </label>
            <button className="btn btn-primary" onClick={createMemo}>相談文を作成する <span className="arrow" /></button>
            {memo && (
              <div className="memo-output">
                <textarea readOnly value={memo} />
                <div className="memo-actions">
                  <button className="btn btn-ghost" onClick={() => navigator.clipboard && navigator.clipboard.writeText(memo)}>コピーする</button>
                  <a className="btn btn-primary" href={mailto}>メールを開く <span className="arrow" /></a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

window.PageDiagnosis = PageDiagnosis;
