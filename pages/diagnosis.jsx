/* Diagnosis page — new design (adapted from Claude Design export) */

/* ===== Constants ===== */
const DIAG_QUESTIONS = [
  { cat: "社長依存・仕組み化", text: "社長が30日間不在でも、主要な意思決定は滞りませんか？", opts: ["ほぼ全て社長が判断している", "重要事項のみ社長が判断", "多くは幹部・現場で完結", "社長不在でも問題なく回る"] },
  { cat: "後継者", text: "後継者（社内・親族・第三者）は決まっていますか？", opts: ["まったく未定", "候補はいる", "候補を育成中", "すでに決定している"] },
  { cat: "事業の質・取引先", text: "売上の特定取引先への依存度はどの程度ですか？", opts: ["1社で売上の5割超", "上位3社で過半", "やや分散している", "十分に分散している"] },
  { cat: "財務・ガバナンス", text: "月次決算など財務数値をタイムリーに把握できていますか？", opts: ["年1回程度しか見ない", "年に数回", "毎月（やや遅れて）", "毎月ほぼリアルタイム"] },
  { cat: "社長依存・仕組み化", text: "業務マニュアルや仕組みは整っていますか？", opts: ["ほぼ属人的", "一部のみ文書化", "主要業務は文書化", "全社で標準化済み"] },
  { cat: "社長依存・仕組み化", text: "キーパーソンが辞めても事業は継続できますか？", opts: ["継続は困難", "一部に支障が出る", "カバーできる", "まったく問題ない"] },
  { cat: "事業の質・取引先", text: "自社の強み・価値を言語化できていますか？", opts: ["できていない", "感覚的にはある", "ある程度説明できる", "明確に説明できる"] },
  { cat: "財務・ガバナンス", text: "簿外債務・係争・コンプライアンス上の懸念はありませんか？", opts: ["把握できていない", "懸念がある", "概ね問題ない", "クリーンだと言える"] },
  { cat: "後継者", text: "譲渡（事業承継）の検討状況は？", opts: ["まだ漠然としている", "最近考え始めた", "具体的に検討中", "早期に実行したい"] },
  { cat: "後継者", text: "譲渡後の希望（雇用・社名・自身の関与）は整理できていますか？", opts: ["未整理", "ぼんやりとある", "概ね固まっている", "明確になっている"] },
];

const DIAG_CAT_NAMES = ["社長依存・仕組み化", "後継者", "財務・ガバナンス", "事業の質・取引先"];

function diagGetLevel(pct) {
  if (pct >= 85) return { label: "承継準備◎", color: "#5BC48A", bg: "rgba(91,196,138,.14)", desc: "社長への依存が低く、譲渡に向けた準備が整っています。今が、最も良い条件で次の相手へ託せるタイミングかもしれません。", cta: "最良の条件で、次の一手を。" };
  if (pct >= 65) return { label: "良好", color: "#E7CE92", bg: "rgba(231,206,146,.14)", desc: "土台は整っています。弱点をいくつか補強すれば、より良い条件での譲渡が見込めます。まずは課題の優先順位を整理しましょう。", cta: "強みを活かし、弱点を補強する。" };
  if (pct >= 40) return { label: "要改善", color: "#E0A85B", bg: "rgba(224,168,91,.14)", desc: "社長依存や仕組み化に課題が残ります。譲渡前に手を打つことで、企業価値と選択肢が大きく広がります。早めの準備が鍵です。", cta: "譲渡前に、できることがあります。" };
  return { label: "高リスク", color: "#E08B7A", bg: "rgba(224,139,122,.14)", desc: "事業が社長に強く依存している状態です。「まだ早い」と思える今こそ、承継準備を始める好機。一緒に課題を整理しましょう。", cta: "「まだ早い」が、一番もったいない。" };
}

function diagCatColor(pct) {
  if (pct >= 75) return "#5BC48A";
  if (pct >= 50) return "#E7CE92";
  if (pct >= 30) return "#E0A85B";
  return "#E08B7A";
}

/* ===== Page component ===== */
function PageDiagnosis({ navigate }) {
  const [screen, setScreen] = React.useState("intro");
  const [idx, setIdx] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);

  const total = DIAG_QUESTIONS.length;

  const start = () => { setScreen("quiz"); setIdx(0); };
  const restart = () => { setScreen("intro"); setIdx(0); setAnswers([]); };
  const prev = () => { if (idx > 0) setIdx(idx - 1); else setScreen("intro"); };
  const answer = (i) => {
    const next = answers.slice();
    next[idx] = i;
    setAnswers(next);
    if (idx >= total - 1) setScreen("result");
    else setIdx(idx + 1);
  };

  return (
    <div style={css("min-height:calc(100vh - 74px);background:radial-gradient(120% 80% at 50% -10%,#13314F 0%,#0B1B30 38%,#07131F 100%);color:#EAEDF1;font-family:'Noto Sans JP',sans-serif;display:flex;flex-direction:column")}>
      <main style={css("flex:1;display:flex;align-items:center;justify-content:center;padding:48px 28px")}>
        <div style={css("width:100%;max-width:720px")}>

          {/* INTRO */}
          {screen === "intro" && (
            <div style={{ ...css("text-align:center"), animation: "fadeSlide .6s ease both" }}>
              <div style={css("display:inline-flex;align-items:center;gap:9px;border:1px solid rgba(198,166,100,.4);border-radius:100px;padding:7px 16px;margin-bottom:28px")}>
                <span style={css("width:6px;height:6px;border-radius:50%;background:#C6A664")}></span>
                <span style={css("font-family:'Cormorant Garamond';font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#D8BC7E")}>90-Day Owner-Absence Check</span>
              </div>
              <h1 style={css("font-family:'Shippori Mincho';font-weight:700;font-size:42px;line-height:1.4;color:#fff;margin:0 0 22px")}>明日から社長が90日不在でも、<br/>会社は<span style={css("color:#E7CE92")}>回りますか。</span></h1>
              <p style={css("font-size:16px;line-height:2;color:#A9B4C2;margin:0 auto 38px;max-width:520px")}>10の質問に答えるだけで、いまの事業承継の「準備度」を可視化します。譲渡に向けて、どこに課題があるのかが分かります。</p>
              <div style={css("display:flex;gap:14px;justify-content:center;margin-bottom:36px;flex-wrap:wrap")}>
                {["無料・登録不要", "会社名・電話番号不要", "約3分"].map((t) => (
                  <div key={t} style={css("display:flex;align-items:center;gap:9px;color:#C2CAD6;font-size:13.5px")}><span style={css("color:#C6A664")}>✓</span>{t}</div>
                ))}
              </div>
              <button className="btn-gold-up" onClick={start} style={css("display:inline-flex;align-items:center;gap:10px;background:#C6A664;color:#07131F;border:none;cursor:pointer;font-family:'Noto Sans JP';font-size:16px;font-weight:700;padding:17px 40px;border-radius:8px;box-shadow:0 14px 34px -10px rgba(198,166,100,.5)")}>診断を始める<span style={css("font-family:'Cormorant Garamond'")}>→</span></button>
            </div>
          )}

          {/* QUIZ */}
          {screen === "quiz" && (() => {
            const q = DIAG_QUESTIONS[idx];
            const sel = answers[idx];
            const progressPct = Math.round((idx / total) * 100) + "%";
            return (
              <div key={"q" + idx} style={{ animation: "fadeSlide .4s ease both" }}>
                <div style={css("display:flex;align-items:center;justify-content:space-between;margin-bottom:14px")}>
                  <span style={css("font-family:'Cormorant Garamond';font-size:13px;font-weight:600;color:#C6A664;letter-spacing:.08em")}>{q.cat}</span>
                  <span style={css("font-family:'Cormorant Garamond';font-size:13px;color:#9AA7B5")}><span style={css("color:#fff;font-size:18px;font-weight:700")}>{idx + 1}</span> / {total}</span>
                </div>
                <div style={css("height:5px;border-radius:100px;background:rgba(255,255,255,.09);overflow:hidden;margin-bottom:36px")}>
                  <div style={css("height:100%;border-radius:100px;background:linear-gradient(90deg,#C6A664,#E7CE92);transition:width .4s ease;width:" + progressPct)}></div>
                </div>
                <h2 style={css("font-family:'Shippori Mincho';font-weight:700;font-size:27px;line-height:1.55;color:#fff;margin:0 0 30px")}>{q.text}</h2>
                <div style={css("display:flex;flex-direction:column;gap:12px")}>
                  {q.opts.map((label, i) => {
                    const on = sel === i;
                    const optStyle =
                      "display:flex;align-items:center;gap:16px;text-align:left;cursor:pointer;font-family:'Noto Sans JP';width:100%;padding:18px 20px;border-radius:11px;font-size:15.5px;font-weight:500;" +
                      "background:" + (on ? "rgba(198,166,100,.12)" : "rgba(255,255,255,.035)") + ";" +
                      "border:1.5px solid " + (on ? "#C6A664" : "rgba(255,255,255,.1)") + ";" +
                      "color:" + (on ? "#fff" : "#D5DBE3");
                    const dotStyle =
                      "width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;color:#07131F;font-size:13px;font-weight:700;" +
                      "border:1.5px solid " + (on ? "#C6A664" : "rgba(255,255,255,.25)") + ";" +
                      "background:" + (on ? "#C6A664" : "transparent");
                    return (
                      <button key={i} className="opt" onClick={() => answer(i)} style={css(optStyle)}>
                        <span style={css(dotStyle)}>{on ? "✓" : ""}</span>
                        {label}
                      </button>
                    );
                  })}
                </div>
                <div style={css("display:flex;justify-content:space-between;align-items:center;margin-top:30px")}>
                  <button className="btn-prev" onClick={prev} style={css("background:none;border:none;cursor:pointer;color:#9AA7B5;font-family:'Noto Sans JP';font-size:14px;font-weight:500;padding:8px 4px")}>← 前へ</button>
                  <span style={css("font-size:12px;color:#5C6775")}>選択すると自動で次へ進みます</span>
                </div>
              </div>
            );
          })()}

          {/* RESULT */}
          {screen === "result" && (() => {
            const score = answers.reduce((s, a) => s + (a || 0), 0);
            const pct = Math.round((score / (total * 3)) * 100);
            const level = diagGetLevel(pct);
            const categories = DIAG_CAT_NAMES.map((name) => {
              const qIdxs = DIAG_QUESTIONS.map((q, i) => (q.cat === name ? i : -1)).filter((i) => i >= 0);
              const s = qIdxs.reduce((t, i) => t + (answers[i] || 0), 0);
              const cp = Math.round((s / (qIdxs.length * 3)) * 100);
              return { name, pct: cp + "%", label: cp + "点", color: diagCatColor(cp) };
            });
            return (
              <div style={{ animation: "fadeSlide .5s ease both" }}>
                <div style={css("text-align:center;margin-bottom:14px")}>
                  <span style={css("font-family:'Cormorant Garamond';font-size:17px;letter-spacing:.05em;font-style:italic;color:#C6A664")}>Your Result</span>
                </div>
                <div style={css("background:linear-gradient(165deg,#102742,#0A1828);border:1px solid rgba(198,166,100,.28);border-radius:20px;padding:44px 40px;text-align:center;margin-bottom:20px")}>
                  <div style={css("font-size:14px;color:#9AA7B5;margin-bottom:10px")}>事業承継の準備度</div>
                  <div style={css("display:flex;align-items:baseline;justify-content:center;gap:4px;margin-bottom:8px")}>
                    <span style={css("font-family:'Cormorant Garamond';font-weight:700;font-size:76px;line-height:1;color:" + level.color)}>{pct}</span>
                    <span style={css("font-family:'Cormorant Garamond';font-size:30px;color:#9AA7B5;font-weight:500")}>点</span>
                  </div>
                  <div style={css("display:inline-block;font-family:'Shippori Mincho';font-weight:700;font-size:17px;padding:7px 22px;border-radius:100px;margin-bottom:20px;background:" + level.bg + ";color:" + level.color)}>{level.label}</div>
                  <p style={css("font-size:15px;line-height:1.95;color:#C2CAD6;margin:0 auto;max-width:480px")}>{level.desc}</p>
                </div>

                <div style={css("background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.09);border-radius:16px;padding:32px;margin-bottom:20px")}>
                  <div style={css("font-family:'Shippori Mincho';font-weight:700;font-size:16px;color:#fff;margin-bottom:22px")}>分野別の準備度</div>
                  <div style={css("display:flex;flex-direction:column;gap:20px")}>
                    {categories.map((cat) => (
                      <div key={cat.name}>
                        <div style={css("display:flex;justify-content:space-between;align-items:center;margin-bottom:9px")}>
                          <span style={css("font-size:14px;color:#E2E6EC;font-weight:500")}>{cat.name}</span>
                          <span style={css("font-family:'Cormorant Garamond';font-size:13px;font-weight:600;color:" + cat.color)}>{cat.label}</span>
                        </div>
                        <div style={css("height:8px;border-radius:100px;background:rgba(255,255,255,.07);overflow:hidden")}>
                          <div style={css("height:100%;border-radius:100px;background:" + cat.color + ";width:" + cat.pct)}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={css("background:linear-gradient(160deg,#1B3252,#102742);border:1px solid rgba(198,166,100,.3);border-radius:16px;padding:32px;text-align:center;position:relative;overflow:hidden")}>
                  <div style={css("position:absolute;right:-30px;top:-30px;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,rgba(198,166,100,.16),transparent 70%)")}></div>
                  <div style={css("position:relative")}>
                    <h3 style={css("font-family:'Shippori Mincho';font-weight:700;font-size:22px;color:#fff;margin:0 0 12px")}>{level.cta}</h3>
                    <p style={css("font-size:14.5px;line-height:1.9;color:#A9B4C2;margin:0 auto 26px;max-width:440px")}>着手金・中間金0円の完全成功報酬。診断結果をもとに、譲渡に向けた具体的なご相談を無料で承ります。</p>
                    <div style={css("display:flex;gap:12px;justify-content:center;flex-wrap:wrap")}>
                      <button className="btn-gold" onClick={() => navigate("contact")} style={css("display:inline-flex;align-items:center;gap:9px;background:#C6A664;color:#07131F;border:none;cursor:pointer;font-family:'Noto Sans JP';font-size:15px;font-weight:700;padding:15px 30px;border-radius:8px")}>無料で相談する<span style={css("font-family:'Cormorant Garamond'")}>→</span></button>
                      <button className="btn-ghost" onClick={restart} style={css("display:inline-flex;align-items:center;gap:9px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.16);color:#fff;cursor:pointer;font-family:'Noto Sans JP';font-size:15px;font-weight:600;padding:15px 26px;border-radius:8px")}>もう一度診断する</button>
                    </div>
                  </div>
                </div>
                <p style={css("text-align:center;font-size:11.5px;color:#5C6775;margin-top:18px")}>※ 本診断は簡易的な目安です。実際の評価はご相談時に詳しくお伺いします。</p>
              </div>
            );
          })()}

        </div>
      </main>
    </div>
  );
}

window.PageDiagnosis = PageDiagnosis;
