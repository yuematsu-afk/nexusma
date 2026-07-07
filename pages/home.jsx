/* Home page — new design (adapted from Claude Design export) */

/* ===== Data ===== */
const HOME_TRUST = [
  { big: "全国", sub: "対応エリア" },
  { big: "全業種", sub: "取扱対象" },
  { big: "完全成功報酬", sub: "料金体系" },
  { big: "相談無料", sub: "初回〜成約前まで" },
  { big: "秘密厳守", sub: "NDA・ノンネーム" },
];

const HOME_PILLARS = [
  { label: "着手金", desc: "ご契約時の初期費用は一切かかりません。", dark: false },
  { label: "中間金", desc: "基本合意時の費用もいただきません。", dark: true },
  { label: "月額顧問料", desc: "期間が延びても追加負担はありません。", dark: false },
];

const HOME_TRAD_CELLS = [
  { t: "相談・着手", v: "着手金 発生", red: true },
  { t: "基本合意", v: "中間金 発生", red: true },
  { t: "交渉中", v: "月額発生も", red: false },
  { t: "成約", v: "成功報酬", red: true },
];
const HOME_NEXUS_CELLS = [
  { t: "相談・着手", v: "¥0" },
  { t: "基本合意", v: "¥0" },
  { t: "交渉中", v: "¥0" },
  { t: "成約", v: "成功報酬のみ", dark: true },
];

const HOME_ANXIETY = [
  { n: "01", q: "従業員の雇用は守られますか。", a: "雇用の維持・処遇を譲渡条件の前提として交渉します。「人を大切にする相手か」を、候補先選定の最重要基準に置きます。" },
  { n: "02", q: "取引先との関係はどうなりますか。", a: "取引継続を見据えた相手選びと、開示の順序設計を徹底。関係先への影響を最小化しながら、円滑な引き継ぎを支援します。" },
  { n: "03", q: "会社の価値は正しく評価される？", a: "純資産・収益・市場の複数手法で多面的に評価。数字に表れない強みも言語化し、納得感のある価格形成を行います。" },
  { n: "04", q: "情報が漏れる心配はありませんか。", a: "社名を伏せた「ノンネーム」打診とNDA締結を前提に進行。情報開示は段階的に、最小限の関係者に限定して管理します。" },
];

const HOME_FLOW = [
  { step: "STEP 01", title: "無料相談・方針確認", desc: "現状とご希望を伺い、譲渡の方針を一緒に描きます。" },
  { step: "STEP 02", title: "企業価値の評価", desc: "複数手法で適正な企業価値を算定し、強みを整理します。" },
  { step: "STEP 03", title: "ノンネーム打診", desc: "社名を伏せたまま、最適な候補先へ打診します。" },
  { step: "STEP 04", title: "面談・交渉", desc: "候補先との面談を設定し、条件交渉を支援します。" },
  { step: "STEP 05", title: "基本合意・DD", desc: "基本合意を締結し、デューデリジェンスに対応します。" },
  { step: "STEP 06", title: "最終契約・成約", desc: null, highlight: true },
];

const HOME_NUMBERS = [
  { n: "全国", suf: "", label: "対応エリア" },
  { n: "全", suf: "業種", label: "取扱対象" },
  { n: "登録", suf: "", label: "M&A支援機関" },
  { n: "初回", suf: "無料", label: "ご相談" },
];

const HOME_CASES = [
  { img: "assets/generated/industry-manufacturing.webp", alt: "製造業の写真", tags: ["製造業", "関東"], title: "創業52年・精密金属加工", sales: "12.4", reason: "後継者不在" },
  { img: "assets/generated/industry-saas.webp", alt: "ITサービスの写真", tags: ["ITサービス", "首都圏"], title: "BtoB SaaS／ARR成長中", sales: "3.6", reason: "成長加速" },
  { img: "assets/generated/news-insight.webp", alt: "小売・店舗の写真", tags: ["小売", "中部"], title: "5店舗・地域密着型チェーン", sales: "8.0", reason: "事業承継" },
];

const HOME_NEWS = [
  { date: "2026.06.29", cat: "コラム", info: false, title: "社長を続けながら会社を譲渡できるのか", url: "/columns/president-stay-after-ma/" },
  { date: "2026.06.20", cat: "コラム", info: false, title: "社長が90日不在でも回る会社へ。事業承継前に見直すべき5つの論点", toDiagnosis: true },
  { date: "2026.06.12", cat: "コラム", info: false, title: "完全成功報酬とは何か。着手金型との違いを、オーナー目線で解説する" },
  { date: "2026.05.30", cat: "お知らせ", info: true, title: "譲渡後も従業員の雇用を守る。当社の候補先選定基準を公開しました" },
  { date: "2026.05.18", cat: "コラム", info: false, title: "「まだ早い」が一番もったいない。事業承継を考え始める最適なタイミング" },
];

/* ===== Section components ===== */
function HomeHero({ navigate }) {
  return (
    <section id="top" style={css("position:relative;padding:150px 40px 70px;background:radial-gradient(120% 90% at 78% 8%,#13314F 0%,#0B1B30 42%,#07131F 100%);overflow:hidden")}>
      <div style={css("position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:62px 62px;mask-image:radial-gradient(80% 70% at 60% 30%,#000 40%,transparent 100%);-webkit-mask-image:radial-gradient(80% 70% at 60% 30%,#000 40%,transparent 100%);pointer-events:none")}></div>
      <div className="hv2-hero-grid" style={css("position:relative;width:100%;max-width:1240px;margin:0 auto;display:grid;grid-template-columns:1.05fr 0.95fr;gap:60px;align-items:center")}>
        <div>
          <div style={css("display:inline-flex;align-items:center;gap:10px;border:1px solid rgba(198,166,100,.4);border-radius:100px;padding:7px 16px;margin-bottom:30px")}>
            <span style={css("width:6px;height:6px;border-radius:50%;background:#C6A664")}></span>
            <span style={css("font-family:'Cormorant Garamond';font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#D8BC7E")}>Owner-Dependent Succession · 90-Day Check</span>
          </div>
          <h1 className="hv2-hero-h1" style={css("font-family:'Shippori Mincho',sans-serif;font-weight:700;font-size:64px;line-height:1.4;letter-spacing:.02em;color:#fff;margin:0 0 26px")}>
            社長がいないと<br/>回らない会社の、<br/><span style={css("position:relative;color:#E7CE92")}>事業承継・M&A相談。<span style={css("position:absolute;left:0;right:0;bottom:6px;height:10px;background:rgba(198,166,100,.22);z-index:-1")}></span></span>
          </h1>
          <p style={css("font-size:17px;line-height:2;color:#B9C2CF;margin:0 0 34px;max-width:520px")}>会社を売るかどうかを決める前に、まず「社長が90日不在でも止まらないか」を整理します。<br/>顧客・営業・資金繰り・金融機関対応・従業員への判断を見える化し、社長を続けながら責任を軽くする選択肢まで一緒に考えます。</p>
          <div className="hv2-hero-ctas" style={css("display:flex;gap:14px;flex-wrap:wrap;margin-bottom:30px")}>
            <button className="btn-gold-up" onClick={() => navigate("diagnosis")} style={css("display:inline-flex;align-items:center;gap:10px;background:#C6A664;color:#07131F;border:none;cursor:pointer;font-family:'Noto Sans JP';font-size:15px;font-weight:700;padding:16px 26px;border-radius:7px;box-shadow:0 10px 30px -8px rgba(198,166,100,.5)")}>社長不在90日診断を受ける<span style={css("font-family:'Cormorant Garamond'")}>→</span></button>
            <button className="btn-ghost" onClick={() => navigate("contact")} style={css("display:inline-flex;align-items:center;gap:10px;background:rgba(255,255,255,.06);color:#fff;border:1px solid rgba(255,255,255,.16);cursor:pointer;font-family:'Noto Sans JP';font-size:15px;font-weight:600;padding:16px 26px;border-radius:7px")}>無料相談で整理する</button>
          </div>
          <div style={css("display:flex;gap:24px;align-items:center;flex-wrap:wrap")}>
            {["会社名・電話番号不要", "診断だけなら営業連絡なし", "売却前提でなく相談可能"].map((t) => (
              <div key={t} style={css("display:flex;align-items:center;gap:8px;color:#9AA7B5;font-size:13px")}><span style={css("color:#C6A664;font-size:15px")}>✓</span>{t}</div>
            ))}
          </div>
        </div>

        <div style={css("position:relative")}>
          <div style={css("position:relative;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,.1);box-shadow:0 40px 80px -30px rgba(0,0,0,.7)")}>
            <img src="assets/generated/hero-advisory.webp" alt="経営者・面談シーンの写真" style={css("display:block;width:100%;height:480px;object-fit:cover")} />
            <div style={css("position:absolute;inset:0;background:linear-gradient(180deg,rgba(7,19,31,0) 40%,rgba(7,19,31,.55) 100%);pointer-events:none")}></div>
          </div>
          <div className="hv2-hero-float" style={css("position:absolute;left:-26px;top:42px;background:rgba(11,27,48,.82);backdrop-filter:blur(12px);border:1px solid rgba(198,166,100,.3);border-radius:12px;padding:16px 20px;box-shadow:0 20px 40px -16px rgba(0,0,0,.6);animation:floatY 6s ease-in-out infinite")}>
            <div style={css("font-family:'Cormorant Garamond';font-size:11px;letter-spacing:.14em;color:#9AA7B5;text-transform:uppercase;margin-bottom:6px")}>Start Point</div>
            <div style={css("font-family:'Cormorant Garamond';font-weight:700;font-size:34px;color:#E7CE92;line-height:1")}>90日</div>
            <div style={css("font-size:11.5px;color:#B9C2CF;margin-top:2px")}>社長不在で止まる業務を確認</div>
          </div>
          <div className="hv2-hero-float" style={css("position:absolute;right:-22px;bottom:38px;background:rgba(11,27,48,.82);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:16px 20px;box-shadow:0 20px 40px -16px rgba(0,0,0,.6);animation:floatY 6s ease-in-out infinite .8s")}>
            <div style={css("font-family:'Cormorant Garamond';font-size:11px;letter-spacing:.14em;color:#9AA7B5;text-transform:uppercase;margin-bottom:6px")}>Owner Role</div>
            <div style={css("display:flex;align-items:baseline;gap:6px")}><span style={css("font-family:'Shippori Mincho';font-weight:700;font-size:28px;color:#fff;line-height:1")}>社長継続</span></div>
            <div style={css("font-size:11.5px;color:#B9C2CF;margin-top:2px")}>辞める前提ではなく責任を軽くする</div>
          </div>
        </div>
      </div>

      <div className="hv2-trust-grid" style={css("position:relative;width:100%;max-width:1240px;margin:64px auto 0;border-top:1px solid rgba(255,255,255,.09);padding-top:26px;display:grid;grid-template-columns:repeat(5,1fr);gap:20px")}>
        {HOME_TRUST.map((t, i) => (
          <div key={t.big} style={css("text-align:center" + (i > 0 ? ";border-left:1px solid rgba(255,255,255,.09)" : ""))}>
            <div style={css("font-family:'Shippori Mincho';font-weight:700;font-size:24px;color:#fff")}>{t.big}</div>
            <div style={css("font-size:11px;color:#7C879A;letter-spacing:.1em;margin-top:4px")}>{t.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomeSellerBand({ navigate }) {
  const openPdfConsultation = () => {
    window.NexusAnalytics?.trackCta("90日PDFを相談する", "home", "contact");
    try {
      sessionStorage.setItem("nexusma_diagnosis_prefill", JSON.stringify({
        step: 1,
        data: {
          role: "seller",
          concerns: ["事業承継", "後継者不在", "経営者保証の扱い", "情報収集"],
          method: "email",
          message: "社長不在90日チェックPDFを見ました。自社に当てはめた場合の承継リスクや、売却前提ではない整理方法について相談したいです。",
        },
      }));
    } catch (error) {
      // sessionStorageが使えない環境でも、通常の問い合わせ導線へ進める。
    }
    navigate("contact");
  };
  const openFamilyPdfConsultation = () => {
    window.NexusAnalytics?.trackCta("家族・保証を相談する", "home", "contact");
    try {
      sessionStorage.setItem("nexusma_diagnosis_prefill", JSON.stringify({
        step: 1,
        data: {
          role: "seller",
          source: "family_guarantee",
          concerns: ["経営者保証の扱い", "会社借入・返済予定", "家族への影響", "社長依存", "情報収集"],
          method: "email",
          message: "家族と保証のPDFを見ました。経営者保証、会社借入、個人資産、家族への影響について、売却前提ではなく整理したいです。",
        },
      }));
    } catch (error) {
      // sessionStorageが使えない環境でも、通常の問い合わせ導線へ進める。
    }
    navigate("contact");
  };

  return (
    <section id="seller" data-reveal style={css("background:#0B1B30;padding:96px 40px;border-top:1px solid rgba(255,255,255,.05)")}>
      <div className="hv2-seller-grid" style={css("width:100%;max-width:1240px;margin:0 auto;display:grid;grid-template-columns:1.15fr 0.85fr;gap:60px;align-items:center")}>
        <div>
          <div style={css("font-family:'Cormorant Garamond';font-size:17px;letter-spacing:.05em;font-style:italic;color:#C6A664;margin-bottom:20px")}>90-Day Owner-Absence Check</div>
          <h2 style={css("font-family:'Shippori Mincho';font-weight:700;font-size:42px;line-height:1.4;color:#fff;margin:0 0 24px")}>明日から社長が90日不在でも、<br/>会社は<span style={css("color:#E7CE92")}>回りますか。</span></h2>
          <p style={css("font-size:16px;line-height:2;color:#A9B4C2;margin:0 0 30px;max-width:560px")}>属人化・後継者・財務・取引先依存——。10の質問に答えるだけで、いまの事業承継の「準備度」と、譲渡に向けた課題を可視化します。会社名も電話番号も不要。所要時間は約3分です。</p>
          <div style={css("display:flex;gap:12px;flex-wrap:wrap;align-items:center")}>
            <button className="btn-gold" onClick={() => navigate("diagnosis")} style={css("display:inline-flex;align-items:center;gap:10px;background:#C6A664;color:#07131F;border:none;cursor:pointer;font-family:'Noto Sans JP';font-size:15px;font-weight:700;padding:15px 28px;border-radius:7px")}>無料診断を始める<span style={css("font-family:'Cormorant Garamond'")}>→</span></button>
            <a href="assets/downloads/owner-90day-absence-guide.pdf" target="_blank" rel="noopener noreferrer" style={css("display:inline-flex;align-items:center;gap:10px;color:#E7CE92;border:1px solid rgba(198,166,100,.45);text-decoration:none;font-family:'Noto Sans JP';font-size:14px;font-weight:700;padding:14px 22px;border-radius:7px")}>無料PDFを読む<span style={css("font-family:'Cormorant Garamond'")}>→</span></a>
            <a href="assets/downloads/family-guarantee-risk-guide.pdf" target="_blank" rel="noopener noreferrer" style={css("display:inline-flex;align-items:center;gap:10px;color:#fff;border:1px solid rgba(255,255,255,.18);text-decoration:none;font-family:'Noto Sans JP';font-size:14px;font-weight:700;padding:14px 22px;border-radius:7px;background:rgba(255,255,255,.05)")}>家族と保証のPDFを読む<span style={css("font-family:'Cormorant Garamond'")}>→</span></a>
            <button onClick={openPdfConsultation} style={css("display:inline-flex;align-items:center;gap:10px;background:rgba(255,255,255,.06);color:#fff;border:1px solid rgba(255,255,255,.16);cursor:pointer;font-family:'Noto Sans JP';font-size:14px;font-weight:700;padding:14px 22px;border-radius:7px")}>90日PDFを相談する<span style={css("font-family:'Cormorant Garamond'")}>→</span></button>
            <button onClick={openFamilyPdfConsultation} style={css("display:inline-flex;align-items:center;gap:10px;background:rgba(255,255,255,.06);color:#fff;border:1px solid rgba(255,255,255,.16);cursor:pointer;font-family:'Noto Sans JP';font-size:14px;font-weight:700;padding:14px 22px;border-radius:7px")}>家族・保証を相談する<span style={css("font-family:'Cormorant Garamond'")}>→</span></button>
          </div>
          <p style={css("font-size:12.5px;line-height:1.8;color:#7C879A;margin:14px 0 0")}>PDFは登録不要で読めます。相談フォームへ進む場合は、社長不在・保証・借入に関する相談内容をあらかじめ反映します。<br/><a href="/owner-emergency-checklist/" style={css("color:#E7CE92;text-decoration:none;border-bottom:1px solid rgba(231,206,146,.45)")}>社長が急に入院した時の会社チェックリストも確認できます。</a></p>
        </div>
        <div style={css("background:linear-gradient(160deg,#102742,#0A1828);border:1px solid rgba(198,166,100,.28);border-radius:16px;padding:38px;position:relative;overflow:hidden")}>
          <div style={css("position:absolute;right:-30px;top:-30px;width:160px;height:160px;border-radius:50%;background:radial-gradient(circle,rgba(198,166,100,.16),transparent 70%)")}></div>
          <div style={css("font-family:'Cormorant Garamond';font-size:12px;letter-spacing:.18em;color:#9AA7B5;text-transform:uppercase")}>Anonymous Check</div>
          <div style={css("font-family:'Cormorant Garamond';font-weight:700;font-size:56px;color:#fff;line-height:1.05;margin:12px 0 4px")}>10<span style={css("font-size:24px;color:#C6A664;font-weight:500;margin-left:8px")}>Questions</span></div>
          <div style={css("display:flex;flex-direction:column;gap:14px;margin-top:24px")}>
            {[["無", "無料・登録不要"], ["匿", "匿名で完結"], ["3'", "約3分で完了"]].map(([m, t]) => (
              <div key={t} style={css("display:flex;align-items:center;gap:12px;color:#C2CAD6;font-size:14px")}>
                <span style={css("width:26px;height:26px;border-radius:6px;background:rgba(198,166,100,.14);color:#E7CE92;display:flex;align-items:center;justify-content:center;font-family:'Cormorant Garamond';font-size:13px")}>{m}</span>{t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePricing() {
  return (
    <section id="pricing" data-reveal style={css("background:#F5F3ED;color:#161E2B;padding:104px 40px")}>
      <div style={css("width:100%;max-width:1240px;margin:0 auto")}>
        <div style={css("text-align:center;max-width:720px;margin:0 auto 60px")}>
          <div style={css("font-family:'Cormorant Garamond';font-size:17px;letter-spacing:.05em;font-style:italic;color:#A9853D;margin-bottom:18px")}>Pricing — Fully Success-Based</div>
          <h2 style={css("font-family:'Shippori Mincho';font-weight:700;font-size:46px;line-height:1.3;color:#11192A;margin:0 0 20px")}>成果が出るまで、費用は0円。</h2>
          <p style={css("font-size:16px;line-height:2;color:#5E687A;margin:0")}>M&Aは、結果がすべて。だから私たちは、着手金も中間金も月額報酬もいただきません。「成約」という成果に対してのみ、報酬を申し受けます。</p>
        </div>

        <div className="hv2-pillars-grid" style={css("display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:56px")}>
          {HOME_PILLARS.map((p) => (
            <div key={p.label} style={css(p.dark
              ? "background:#0B1B30;border:1px solid #0B1B30;border-radius:14px;padding:34px;text-align:center;color:#fff;transform:translateY(-8px);box-shadow:0 30px 60px -24px rgba(11,27,48,.5)"
              : "background:#fff;border:1px solid #E6E1D4;border-radius:14px;padding:34px;text-align:center")}>
              <div style={css("font-family:'Cormorant Garamond';font-weight:700;font-size:52px;line-height:1;color:" + (p.dark ? "#E7CE92" : "#11192A"))}>¥0</div>
              <div style={css("font-family:'Shippori Mincho';font-weight:700;font-size:18px;margin:14px 0 8px" + (p.dark ? ";color:#fff" : ""))}>{p.label}</div>
              <div style={css("font-size:13.5px;line-height:1.7;color:" + (p.dark ? "#A9B4C2" : "#7A8494"))}>{p.desc}</div>
            </div>
          ))}
        </div>

        <div style={css("background:#fff;border:1px solid #E6E1D4;border-radius:16px;padding:40px 44px")}>
          <div style={css("font-family:'Shippori Mincho';font-weight:700;font-size:20px;margin-bottom:30px;color:#11192A")}>費用が発生するタイミングの違い</div>
          <div style={css("display:flex;flex-direction:column;gap:30px")}>
            <div>
              <div style={css("display:flex;align-items:center;gap:10px;margin-bottom:14px")}><span style={css("font-size:14px;font-weight:700;color:#9AA0AB")}>従来型の仲介</span><span style={css("font-size:12px;color:#B0492F;background:#FBEAE4;padding:3px 10px;border-radius:100px")}>途中で複数回の費用</span></div>
              <div style={css("display:grid;grid-template-columns:repeat(4,1fr);gap:10px")}>
                {HOME_TRAD_CELLS.map((c) => (
                  <div key={c.t} style={css("border-radius:8px;padding:14px 12px;background:" + (c.red ? "#FBEAE4" : "#F1EFE9"))}>
                    <div style={css("font-size:12px;font-weight:700;color:" + (c.red ? "#B0492F" : "#9AA0AB"))}>{c.t}</div>
                    <div style={css("font-size:13px;margin-top:4px;color:" + (c.red ? "#8A5A4A" : "#9AA0AB"))}>{c.v}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={css("display:flex;align-items:center;gap:10px;margin-bottom:14px")}><span style={css("font-size:14px;font-weight:700;color:#0B1B30")}>NexusM&A</span><span style={css("font-size:12px;color:#1E7A4D;background:#E4F3EB;padding:3px 10px;border-radius:100px")}>成約時のみ・1回</span></div>
              <div style={css("display:grid;grid-template-columns:repeat(4,1fr);gap:10px")}>
                {HOME_NEXUS_CELLS.map((c) => (
                  <div key={c.t} style={css("border-radius:8px;padding:14px 12px;background:" + (c.dark ? "#0B1B30" : "#E4F3EB"))}>
                    <div style={css("font-size:12px;font-weight:700;color:" + (c.dark ? "#E7CE92" : "#1E7A4D"))}>{c.t}</div>
                    <div style={css("font-size:13px;margin-top:4px;color:" + (c.dark ? "#fff" : "#3C7A5C"))}>{c.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={css("font-size:12px;color:#9AA0AB;margin-top:24px;line-height:1.7")}>※ 成功報酬はレーマン方式に基づき算定します。料金の詳細はご相談時に明示します。図は一般的な費用発生タイミングのイメージです。</div>
        </div>
      </div>
    </section>
  );
}

function HomeAnxiety() {
  return (
    <section data-reveal style={css("background:#FBFAF6;color:#161E2B;padding:104px 40px")}>
      <div style={css("width:100%;max-width:1240px;margin:0 auto")}>
        <div style={css("max-width:680px;margin-bottom:54px")}>
          <div style={css("font-family:'Cormorant Garamond';font-size:17px;letter-spacing:.05em;font-style:italic;color:#A9853D;margin-bottom:18px")}>For Sellers — Your Concerns</div>
          <h2 style={css("font-family:'Shippori Mincho';font-weight:700;font-size:42px;line-height:1.35;color:#11192A;margin:0 0 16px")}>譲渡の不安に、ひとつずつ。</h2>
          <p style={css("font-size:16px;line-height:1.9;color:#5E687A;margin:0")}>「従業員は」「取引先は」「価格は」「情報は漏れないか」。オーナー経営者が抱える4つの不安に、私たちはこう向き合います。</p>
        </div>
        <div className="hv2-anxiety-grid" style={css("display:grid;grid-template-columns:repeat(2,1fr);gap:20px")}>
          {HOME_ANXIETY.map((c) => (
            <div key={c.n} style={css("background:#fff;border:1px solid #ECE7DA;border-radius:14px;padding:34px;display:flex;gap:22px")}>
              <div style={css("font-family:'Cormorant Garamond';font-weight:700;font-size:15px;color:#C6A664;flex-shrink:0;padding-top:4px")}>{c.n}</div>
              <div>
                <div style={css("font-family:'Shippori Mincho';font-weight:700;font-size:20px;margin-bottom:10px;color:#11192A")}>{c.q}</div>
                <div style={css("font-size:14.5px;line-height:1.95;color:#5E687A")}>{c.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeFlow() {
  return (
    <section id="flow" data-reveal style={css("background:#0B1B30;color:#fff;padding:104px 40px")}>
      <div style={css("width:100%;max-width:1240px;margin:0 auto")}>
        <div style={css("text-align:center;max-width:680px;margin:0 auto 64px")}>
          <div style={css("font-family:'Cormorant Garamond';font-size:17px;letter-spacing:.05em;font-style:italic;color:#C6A664;margin-bottom:18px")}>The Process</div>
          <h2 style={css("font-family:'Shippori Mincho';font-weight:700;font-size:42px;line-height:1.3;color:#fff;margin:0 0 16px")}>成約までの、6つの歩み。</h2>
          <p style={css("font-size:16px;line-height:1.9;color:#A9B4C2;margin:0")}>費用が発生するのは、最後の「成約」の瞬間だけ。それまでのすべての工程を、無料で伴走します。</p>
        </div>
        <div className="hv2-flow-grid" style={css("display:grid;grid-template-columns:repeat(3,1fr);gap:18px")}>
          {HOME_FLOW.map((f) => (
            f.highlight ? (
              <div key={f.step} style={css("background:linear-gradient(160deg,#1B3252,#102742);border:1px solid rgba(198,166,100,.4);border-radius:14px;padding:30px;position:relative;overflow:hidden")}>
                <div style={css("position:absolute;right:-20px;top:-20px;width:110px;height:110px;border-radius:50%;background:radial-gradient(circle,rgba(198,166,100,.2),transparent 70%)")}></div>
                <div style={css("font-family:'Cormorant Garamond';font-weight:700;font-size:14px;color:#E7CE92;margin-bottom:14px")}>{f.step}</div>
                <div style={css("font-family:'Shippori Mincho';font-weight:700;font-size:19px;margin-bottom:10px;color:#fff")}>{f.title}</div>
                <div style={css("font-size:13.5px;line-height:1.85;color:#C2CAD6")}>譲渡契約を締結。<strong style={css("color:#E7CE92")}>報酬が発生するのはここだけ。</strong></div>
              </div>
            ) : (
              <div key={f.step} style={css("background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.09);border-radius:14px;padding:30px")}>
                <div style={css("font-family:'Cormorant Garamond';font-weight:700;font-size:14px;color:#C6A664;margin-bottom:14px")}>{f.step}</div>
                <div style={css("font-family:'Shippori Mincho';font-weight:700;font-size:19px;margin-bottom:10px")}>{f.title}</div>
                <div style={css("font-size:13.5px;line-height:1.85;color:#9AA7B5")}>{f.desc}</div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeNumbers() {
  return (
    <section style={css("background:#07131F;color:#fff;padding:90px 40px;border-top:1px solid rgba(255,255,255,.05)")}>
      <div data-reveal className="hv2-numbers-grid" style={css("width:100%;max-width:1240px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:24px")}>
        {HOME_NUMBERS.map((n) => (
          <div key={n.label}>
            <div style={css("font-family:'Cormorant Garamond';font-weight:700;font-size:56px;color:#E7CE92;line-height:1")}>{n.n}<span style={css("font-size:24px;color:#fff")}>{n.suf}</span></div>
            <div style={css("font-size:14px;color:#9AA7B5;margin-top:8px")}>{n.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HomeCases({ navigate }) {
  return (
    <section id="cases" data-reveal style={css("background:#F5F3ED;color:#161E2B;padding:104px 40px")}>
      <div style={css("width:100%;max-width:1240px;margin:0 auto")}>
        <div className="hv2-section-head" style={css("display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:48px;flex-wrap:wrap;gap:20px")}>
          <div>
            <div style={css("font-family:'Cormorant Garamond';font-size:17px;letter-spacing:.05em;font-style:italic;color:#A9853D;margin-bottom:18px")}>Case Examples</div>
            <h2 style={css("font-family:'Shippori Mincho';font-weight:700;font-size:42px;line-height:1.3;color:#11192A;margin:0")}>譲渡事例イメージ。</h2>
          </div>
          <button onClick={() => navigate("contact")} style={css("display:inline-flex;align-items:center;gap:8px;color:#0B1B30;background:none;border:none;border-bottom:1px solid #0B1B30;cursor:pointer;font-family:'Noto Sans JP';font-size:14px;font-weight:700;padding-bottom:4px")}>類似事例を相談する <span style={css("font-family:'Cormorant Garamond'")}>→</span></button>
        </div>
        <div className="hv2-cases-grid" style={css("display:grid;grid-template-columns:repeat(3,1fr);gap:22px")}>
          {HOME_CASES.map((c) => (
            <div key={c.title} style={css("background:#fff;border:1px solid #E6E1D4;border-radius:14px;overflow:hidden")}>
              <img src={c.img} alt={c.alt} loading="lazy" style={css("display:block;width:100%;height:188px;object-fit:cover")} />
              <div style={css("padding:24px")}>
                <div style={css("display:flex;gap:8px;margin-bottom:14px")}>
                  <span style={css("font-size:11px;font-weight:700;color:#0B1B30;background:#ECE6D6;padding:4px 10px;border-radius:100px")}>{c.tags[0]}</span>
                  <span style={css("font-size:11px;font-weight:700;color:#7A8494;background:#F1EFE9;padding:4px 10px;border-radius:100px")}>{c.tags[1]}</span>
                </div>
                <div style={css("font-family:'Shippori Mincho';font-weight:700;font-size:18px;margin-bottom:16px;color:#11192A")}>{c.title}</div>
                <div style={css("display:flex;gap:20px;border-top:1px solid #EEEAE0;padding-top:16px")}>
                  <div><div style={css("font-size:11px;color:#9AA0AB")}>売上高</div><div style={css("font-family:'Cormorant Garamond';font-weight:700;font-size:18px;color:#11192A")}>{c.sales}<span style={css("font-size:12px;font-weight:500")}>億円</span></div></div>
                  <div><div style={css("font-size:11px;color:#9AA0AB")}>譲渡理由</div><div style={css("font-family:'Shippori Mincho';font-weight:700;font-size:15px;color:#11192A;padding-top:2px")}>{c.reason}</div></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeFinalCTA({ navigate }) {
  return (
    <section data-reveal style={css("position:relative;background:radial-gradient(110% 120% at 20% 0%,#13314F,#0B1B30 55%,#07131F);color:#fff;padding:110px 40px;overflow:hidden")}>
      <div style={css("position:absolute;right:6%;top:50%;transform:translateY(-50%);font-family:'Shippori Mincho';font-weight:700;font-size:260px;color:rgba(255,255,255,.025);line-height:1;pointer-events:none;user-select:none")}>M&A</div>
      <div className="hv2-cta-grid" style={css("position:relative;width:100%;max-width:1240px;margin:0 auto;display:grid;grid-template-columns:1.2fr 0.8fr;gap:50px;align-items:center")}>
        <div>
          <h2 className="hv2-cta-h2" style={css("font-family:'Shippori Mincho';font-weight:700;font-size:48px;line-height:1.35;color:#fff;margin:0 0 22px")}>経営の重要な決断は、<br/>信頼できる相手と。</h2>
          <p style={css("font-size:16px;line-height:2;color:#A9B4C2;margin:0;max-width:520px")}>ご相談は何度でも無料です。まずは「社長不在90日診断」で現在地を確かめるか、直接ご相談ください。秘密は厳守します。</p>
        </div>
        <div style={css("display:flex;flex-direction:column;gap:14px")}>
          <button className="btn-gold" onClick={() => navigate("diagnosis")} style={css("display:flex;align-items:center;justify-content:space-between;background:#C6A664;color:#07131F;border:none;cursor:pointer;font-family:'Noto Sans JP';font-size:16px;font-weight:700;padding:20px 26px;border-radius:9px")}>社長不在90日診断を受ける<span style={css("font-family:'Cormorant Garamond'")}>→</span></button>
          <button className="btn-ghost" onClick={() => navigate("contact")} style={css("display:flex;align-items:center;justify-content:space-between;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.16);color:#fff;cursor:pointer;font-family:'Noto Sans JP';font-size:16px;font-weight:600;padding:20px 26px;border-radius:9px")}>無料相談を予約する<span style={css("font-family:'Cormorant Garamond'")}>→</span></button>
          <div style={css("text-align:center;font-size:12.5px;color:#7C879A;margin-top:6px")}>初回のご相談は無料です。秘密保持に配慮して対応します。</div>
        </div>
      </div>
    </section>
  );
}

function HomeNews({ navigate }) {
  return (
    <section data-reveal style={css("background:#FBFAF6;color:#161E2B;padding:90px 40px")}>
      <div style={css("width:100%;max-width:1240px;margin:0 auto")}>
        <div style={css("display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:40px")}>
          <div>
            <div style={css("font-family:'Cormorant Garamond';font-size:17px;letter-spacing:.05em;font-style:italic;color:#A9853D;margin-bottom:14px")}>News & Insights</div>
            <h2 style={css("font-family:'Shippori Mincho';font-weight:700;font-size:34px;color:#11192A;margin:0")}>お知らせ・コラム</h2>
          </div>
          <button onClick={() => navigate("news")} style={css("display:inline-flex;align-items:center;gap:8px;color:#0B1B30;background:none;border:none;cursor:pointer;font-family:'Noto Sans JP';font-size:14px;font-weight:700")}>一覧を見る <span style={css("font-family:'Cormorant Garamond'")}>→</span></button>
        </div>
        <div>
          {HOME_NEWS.map((n, i) => (
            <button key={n.title} className="news-row" onClick={() => n.url ? (window.location.href = n.url) : navigate(n.toDiagnosis ? "diagnosis" : "news")} style={css("display:flex;align-items:center;gap:24px;padding:22px 4px;background:none;border:none;border-top:1px solid #E6E1D4;cursor:pointer;width:100%;text-align:left;font-family:'Noto Sans JP'" + (i === HOME_NEWS.length - 1 ? ";border-bottom:1px solid #E6E1D4" : ""))}>
              <span style={css("font-family:'Cormorant Garamond';font-size:13px;color:#9AA0AB;width:96px;flex-shrink:0")}>{n.date}</span>
              <span style={css("font-size:11px;font-weight:700;flex-shrink:0;padding:4px 12px;border-radius:100px;" + (n.info ? "color:#5E687A;background:#EDEBE4" : "color:#A9853D;background:#F2EBDB"))}>{n.cat}</span>
              <span style={css("font-size:15px;color:#2A3446;font-weight:500")}>{n.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== Page component ===== */
function PageHome({ navigate }) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    const reveal = (el) => {
      el.style.opacity = "1";
      el.style.animation = "revealUp .8s cubic-bezier(.16,.84,.44,1) both";
    };
    if (typeof IntersectionObserver === "undefined") {
      els.forEach((el) => { el.style.opacity = "1"; });
      return;
    }
    els.forEach((el) => {
      el.style.opacity = "0";
      el.style.willChange = "opacity, transform";
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { reveal(e.target); io.unobserve(e.target); }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    const t = setTimeout(() => {
      els.forEach((el) => { if (getComputedStyle(el).opacity === "0") el.style.opacity = "1"; });
    }, 1400);
    return () => { io.disconnect(); clearTimeout(t); };
  }, []);

  return (
    <main className="home-v2" style={{ overflowX: "hidden" }}>
      <HomeHero navigate={navigate} />
      <HomeSellerBand navigate={navigate} />
      <HomePricing />
      <HomeAnxiety />
      <HomeFlow />
      <HomeNumbers />
      <HomeCases navigate={navigate} />
      <HomeFinalCTA navigate={navigate} />
      <HomeNews navigate={navigate} />
    </main>
  );
}

window.PageHome = PageHome;
