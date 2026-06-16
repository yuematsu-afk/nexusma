/* Multi-step consultation form */

function PageContact({ navigate }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    role: "",
    industry: "",
    revenue: "",
    timing: "",
    concerns: [],
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    method: "email",
    agree: false,
  });

  const update = (k, v) => setData((d) => ({ ...d, [k]: v }));
  const toggle = (k, v) => setData((d) => ({
    ...d,
    [k]: d[k].includes(v) ? d[k].filter((x) => x !== v) : [...d[k], v],
  }));

  const stepLabels = ["ご立場", "ご状況", "ご連絡先", "ご相談方法", "確認"];
  const total = stepLabels.length;

  const canNext = () => {
    if (step === 0) return data.role !== "";
    if (step === 1) return data.industry !== "" && data.revenue !== "" && data.timing !== "";
    if (step === 2) return data.company && data.name && data.email;
    if (step === 3) return data.method !== "";
    return true;
  };

  const buildMailBody = () => [
    "NexusM&A 無料相談フォーム",
    "",
    `ご立場: ${data.role === "seller" ? "売り手・譲渡をご検討" : data.role === "buyer" ? "買い手・M&Aで成長を志向" : "その他のご相談"}`,
    `業種: ${data.industry}`,
    `年商規模: ${data.revenue}`,
    `ご検討時期: ${data.timing}`,
    `ご関心事項: ${data.concerns.length ? data.concerns.join(" / ") : "なし"}`,
    `会社名: ${data.company}`,
    `お名前: ${data.name}`,
    `メール: ${data.email}`,
    `電話番号: ${data.phone || "未記入"}`,
    `ご相談方法: ${({ email: "メールでまず相談", online: "オンライン面談", office: "対面でのご相談", visit: "訪問相談を希望" })[data.method]}`,
    "",
    "ご相談内容:",
    data.message || "未記入",
  ].join("\n");

  const submitByMail = () => {
    const subject = `【NexusM&A 無料相談】${data.company} ${data.name}様`;
    const mailto = `mailto:y.uematsu@sasa-eru.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMailBody())}`;
    window.location.href = mailto;
    setStep(total);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const next = () => {
    if (step < total) setStep(step + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const back = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (step === total) {
    return (
      <main>
        <section className="contact-complete">
          <div className="container narrow" style={{ textAlign: "center", padding: "60px 0" }}>
            <div className="complete-mark">
              <div className="complete-circle">
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <path d="M10 20 L17 27 L30 13" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </div>
            <div className="eyebrow" style={{ color: "var(--gold-400)" }}>Submission Received</div>
            <h2 style={{ fontSize: 38, color: "var(--ivory)", marginTop: 18, lineHeight: 1.5 }}>
              お問い合わせを<br />承りました。
            </h2>
            <p style={{ color: "rgba(247,242,233,0.7)", marginTop: 28, fontSize: 15, lineHeight: 2, maxWidth: 560, margin: "28px auto 0" }}>
              担当者より、原則1〜2営業日以内にご連絡を差し上げます。<br />
              メール作成画面が開きますので、内容をご確認のうえ送信してください。<br />
              送信後、原則1〜2営業日以内に y.uematsu@sasa-eru.com より返信いたします。
            </p>
            <div className="complete-meta">
              <div>
                <div className="complete-meta-label">受付番号</div>
                <div className="font-serif-en complete-meta-val">N-2026-{Math.floor(Math.random() * 9000) + 1000}</div>
              </div>
              <div>
                <div className="complete-meta-label">担当部門</div>
                <div className="complete-meta-val">{data.role === "seller" ? "セラー・アドバイザリー本部" : data.role === "buyer" ? "バイヤー・ソリューション本部" : "ジェネラル・インクワイアリー"}</div>
              </div>
            </div>
            <div style={{ marginTop: 60 }}>
              <button className="btn btn-ghost-light" onClick={() => navigate("home")}>トップへ戻る</button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <PageHero
        eyebrow="Confidential Consultation"
        title="無料相談フォーム。"
        lead="お問い合わせ内容は秘密保持に配慮して取り扱います。必要に応じて守秘義務契約を締結します。お気軽にご相談ください。"
        crumbs={["無料相談"]}
        navigate={navigate}
      />

      <section style={{ background: "var(--paper)" }}>
        <div className="container narrow">
          <div className="form-shell">
            {/* Progress */}
            <div className="step-progress">
              {stepLabels.map((l, i) => (
                <div key={i} className={`step-item ${i === step ? "current" : ""} ${i < step ? "done" : ""}`}>
                  <div className="step-circle">
                    {i < step ? (
                      <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 7 L6 10 L11 4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
                    ) : (
                      <span className="font-serif-en">{String(i + 1).padStart(2, "0")}</span>
                    )}
                  </div>
                  <div className="step-label">{l}</div>
                  {i < stepLabels.length - 1 && <div className="step-connector" />}
                </div>
              ))}
            </div>

            <div className="form-card">
              {step === 0 && (
                <div className="form-step">
                  <div className="form-step-eyebrow font-serif-en">Step 01 of {total - 1}</div>
                  <h3 className="font-serif-jp" style={{ fontSize: 28, marginTop: 14 }}>どのお立場でご相談ですか？</h3>
                  <p className="form-step-lead">ご立場に応じて、相談内容を確認する担当者が対応いたします。</p>
                  <div className="role-options">
                    {[
                      { v: "seller", title: "売り手・譲渡をご検討", desc: "事業承継／会社売却／一部事業譲渡 など" },
                      { v: "buyer", title: "買い手・M&Aで成長を志向", desc: "事業領域拡張／ロールアップ／海外進出 など" },
                      { v: "other", title: "その他のご相談", desc: "情報収集／メディア取材／パートナーシップ など" },
                    ].map((o) => (
                      <button key={o.v} className={`role-card ${data.role === o.v ? "selected" : ""}`} onClick={() => update("role", o.v)}>
                        <div className="role-check">
                          <div className="role-check-inner" />
                        </div>
                        <div>
                          <div className="role-title font-serif-jp">{o.title}</div>
                          <div className="role-desc">{o.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="form-step">
                  <div className="form-step-eyebrow font-serif-en">Step 02 of {total - 1}</div>
                  <h3 className="font-serif-jp" style={{ fontSize: 28, marginTop: 14 }}>ご状況をお聞かせください。</h3>
                  <p className="form-step-lead">守秘義務のもと取り扱います。差し支えない範囲でお答えください。</p>

                  <div className="field">
                    <label>業種 <span className="req">必須</span></label>
                    <div className="chips">
                      {["製造業", "IT・SaaS", "卸売・商社", "建設・設備", "サービス業", "医療・介護", "小売", "飲食", "物流", "その他"].map((x) => (
                        <button key={x} className={`chip ${data.industry === x ? "selected" : ""}`} onClick={() => update("industry", x)}>{x}</button>
                      ))}
                    </div>
                  </div>

                  <div className="field">
                    <label>年商規模 <span className="req">必須</span></label>
                    <div className="chips">
                      {["〜1億円", "1〜3億円", "3〜10億円", "10〜30億円", "30〜100億円", "100億円〜"].map((x) => (
                        <button key={x} className={`chip ${data.revenue === x ? "selected" : ""}`} onClick={() => update("revenue", x)}>{x}</button>
                      ))}
                    </div>
                  </div>

                  <div className="field">
                    <label>ご検討時期 <span className="req">必須</span></label>
                    <div className="chips">
                      {["3ヶ月以内", "6ヶ月以内", "1年以内", "2〜3年以内", "未定／情報収集"].map((x) => (
                        <button key={x} className={`chip ${data.timing === x ? "selected" : ""}`} onClick={() => update("timing", x)}>{x}</button>
                      ))}
                    </div>
                  </div>

                  <div className="field">
                    <label>主なご関心事項（複数選択可）</label>
                    <div className="chips">
                      {["事業承継", "後継者不在", "経営者保証の扱い", "従業員の雇用継続", "創業者利潤", "成長戦略", "業界再編", "海外展開"].map((x) => (
                        <button key={x} className={`chip ${data.concerns.includes(x) ? "selected" : ""}`} onClick={() => toggle("concerns", x)}>{x}</button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="form-step">
                  <div className="form-step-eyebrow font-serif-en">Step 03 of {total - 1}</div>
                  <h3 className="font-serif-jp" style={{ fontSize: 28, marginTop: 14 }}>ご連絡先を教えてください。</h3>
                  <p className="form-step-lead">電話番号は任意です。まずはメールのみでのご相談も可能です。</p>

                  <div className="field">
                    <label>会社名 <span className="req">必須</span></label>
                    <input type="text" value={data.company} onChange={(e) => update("company", e.target.value)} placeholder="株式会社○○○○" />
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label>お名前 <span className="req">必須</span></label>
                      <input type="text" value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="山田 太郎" />
                    </div>
                    <div className="field">
                      <label>役職</label>
                      <input type="text" placeholder="代表取締役 / 取締役 など" />
                    </div>
                  </div>
                  <div className="field-row">
                    <div className="field">
                      <label>メールアドレス <span className="req">必須</span></label>
                      <input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="example@company.co.jp" />
                    </div>
                    <div className="field">
                      <label>電話番号 <span className="optional">任意</span></label>
                      <input type="tel" value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="03-1234-5678" />
                    </div>
                  </div>
                  <div className="field">
                    <label>ご相談内容（任意）</label>
                    <textarea rows="4" value={data.message} onChange={(e) => update("message", e.target.value)} placeholder="差し支えない範囲で、ご相談内容をお聞かせください。" />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="form-step">
                  <div className="form-step-eyebrow font-serif-en">Step 04 of {total - 1}</div>
                  <h3 className="font-serif-jp" style={{ fontSize: 28, marginTop: 14 }}>ご相談方法をお選びください。</h3>
                  <p className="form-step-lead">最初の対話の進め方をお選びいただけます。</p>
                  <div className="method-options">
                    {[
                      { v: "email", title: "メールでまず相談", desc: "電話なしで、概要共有と次の進め方の確認から始めます。", icon: "email" },
                      { v: "online", title: "オンライン面談", desc: "Zoom / Microsoft Teams で実施。60〜90分。", icon: "online" },
                      { v: "office", title: "対面でのご相談", desc: "場所・日時は個別に調整します。秘匿性に配慮して進めます。", icon: "office" },
                      { v: "visit", title: "訪問相談を希望", desc: "地域・内容に応じて、対応可否を個別に確認します。", icon: "visit" },
                    ].map((o) => (
                      <button key={o.v} className={`method-card ${data.method === o.v ? "selected" : ""}`} onClick={() => update("method", o.v)}>
                        <div className="method-check"><div className="method-check-inner" /></div>
                        <div>
                          <div className="method-title font-serif-jp">{o.title}</div>
                          <div className="method-desc">{o.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="form-step">
                  <div className="form-step-eyebrow font-serif-en">Step 05 of {total - 1}</div>
                  <h3 className="font-serif-jp" style={{ fontSize: 28, marginTop: 14 }}>入力内容のご確認。</h3>
                  <p className="form-step-lead">下記内容で送信いたします。修正がある場合は戻るボタンで前のステップへお戻りください。</p>
                  <table className="confirm-table">
                    <tbody>
                      <tr><th>ご立場</th><td>{data.role === "seller" ? "売り手・譲渡をご検討" : data.role === "buyer" ? "買い手・M&Aで成長を志向" : "その他のご相談"}</td></tr>
                      <tr><th>業種</th><td>{data.industry}</td></tr>
                      <tr><th>年商規模</th><td>{data.revenue}</td></tr>
                      <tr><th>ご検討時期</th><td>{data.timing}</td></tr>
                      <tr><th>ご関心事項</th><td>{data.concerns.length ? data.concerns.join(" / ") : "—"}</td></tr>
                      <tr><th>会社名</th><td>{data.company}</td></tr>
                      <tr><th>お名前</th><td>{data.name}</td></tr>
                      <tr><th>メール</th><td>{data.email}</td></tr>
                      <tr><th>電話番号</th><td>{data.phone || "—"}</td></tr>
                      <tr><th>ご相談方法</th><td>{({ email: "メールでまず相談", online: "オンライン面談", office: "対面でのご相談", visit: "訪問相談を希望" })[data.method]}</td></tr>
                      <tr><th>ご相談内容</th><td>{data.message || "—"}</td></tr>
                    </tbody>
                  </table>
                  <label className="agree-line">
                    <input type="checkbox" checked={data.agree} onChange={(e) => update("agree", e.target.checked)} />
                    <span><a onClick={(e) => { e.preventDefault(); navigate("privacy"); }} style={{ color: "var(--gold-700)", textDecoration: "underline" }}>個人情報保護方針</a>に同意の上、メールを作成します。</span>
                  </label>
                </div>
              )}

              {/* Footer */}
              <div className="form-footer">
                {step > 0 && <button className="btn btn-ghost" onClick={back}>← 戻る</button>}
                <div style={{ flex: 1 }} />
                {step < total - 1 && (
                  <button className="btn btn-primary" disabled={!canNext()} onClick={next} style={{ opacity: canNext() ? 1 : 0.4, cursor: canNext() ? "pointer" : "not-allowed" }}>
                    次へ進む <span className="arrow" />
                  </button>
                )}
                {step === total - 1 && (
                  <button className="btn btn-primary" disabled={!data.agree} onClick={submitByMail} style={{ opacity: data.agree ? 1 : 0.4, cursor: data.agree ? "pointer" : "not-allowed" }}>
                    メールを作成する <span className="arrow" />
                  </button>
                )}
              </div>
            </div>

            {/* Side reassurance */}
            <div className="form-reassure">
              <div className="reassure-item">
                <div className="reassure-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="4" y="8" width="12" height="9" />
                    <path d="M7 8 V5 a3 3 0 0 1 6 0 V8" />
                  </svg>
                </div>
                <div>
                  <div className="reassure-title">秘密保持に配慮</div>
                  <div className="reassure-desc">必要に応じて守秘義務契約を締結します</div>
                </div>
              </div>
              <div className="reassure-item">
                <div className="reassure-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="10" cy="10" r="8" />
                    <path d="M10 5 V10 L13 13" />
                  </svg>
                </div>
                <div>
                  <div className="reassure-title">1〜2営業日以内に返信</div>
                  <div className="reassure-desc">担当者より個別にご連絡します</div>
                </div>
              </div>
              <div className="reassure-item">
                <div className="reassure-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M10 2 L18 6 V12 a8 8 0 0 1-8 8 a8 8 0 0 1-8-8 V6 Z" />
                  </svg>
                </div>
                <div>
                  <div className="reassure-title">無料・キャンセル可</div>
                  <div className="reassure-desc">初回相談は無料・お気軽に</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

window.PageContact = PageContact;
