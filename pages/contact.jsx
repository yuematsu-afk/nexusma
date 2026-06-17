/* Multi-step consultation form */

const WEB3FORMS_ACCESS_KEY = "03198800-4bf9-4b0d-a22e-111d80c2e2a3";

const ROLE_LABELS = {
  seller: "売り手・譲渡をご検討",
  buyer: "買い手・M&Aで成長を志向",
  other: "その他のご相談",
};

const METHOD_LABELS = {
  email: "メールでまず相談",
  online: "オンライン面談",
  office: "対面でのご相談",
  visit: "訪問相談を希望",
};

const CONTACT_PROFILES = {
  seller: {
    title: "譲渡・事業承継についてお聞かせください。",
    lead: "秘密保持に配慮して取り扱います。差し支えない範囲でお答えください。",
    fields: [
      { key: "industry", label: "業種", required: true, options: ["製造業", "IT・SaaS", "卸売・商社", "建設・設備", "サービス業", "医療・介護", "小売", "飲食", "物流", "その他"] },
      { key: "revenue", label: "年商規模", required: true, options: ["〜1億円", "1〜3億円", "3〜10億円", "10〜30億円", "30〜100億円", "100億円〜"] },
      { key: "timing", label: "ご検討時期", required: true, options: ["3ヶ月以内", "6ヶ月以内", "1年以内", "2〜3年以内", "未定／情報収集"] },
    ],
    concernLabel: "主なご関心事項（複数選択可）",
    concerns: ["事業承継", "後継者不在", "経営者保証の扱い", "従業員の雇用継続", "創業者利潤", "譲渡価格の目安", "候補先探し", "情報収集"],
  },
  buyer: {
    title: "買収・成長戦略についてお聞かせください。",
    lead: "買収ニーズや検討段階を確認し、条件に合う可能性がある場合に個別にご案内します。",
    fields: [
      { key: "industry", label: "関心のある業種", required: true, options: ["製造業", "IT・SaaS", "卸売・商社", "建設・設備", "サービス業", "医療・介護", "小売", "飲食", "物流", "その他"] },
      { key: "revenue", label: "希望する案件規模", required: true, options: ["〜1億円", "1〜3億円", "3〜10億円", "10〜30億円", "30〜100億円", "未定"] },
      { key: "timing", label: "検討状況", required: true, options: ["すぐに案件を見たい", "条件が合えば検討", "情報収集中", "将来に向けて準備中"] },
    ],
    concernLabel: "主な買収目的（複数選択可）",
    concerns: ["事業領域の拡張", "人材・技術の獲得", "エリア拡大", "後継者不在企業の承継", "ロールアップ", "新規事業", "海外展開", "情報収集"],
  },
  other: {
    title: "お問い合わせ内容をお聞かせください。",
    lead: "M&Aの売買相談以外のお問い合わせはこちらからお送りください。必要な範囲で担当者が確認します。",
    fields: [
      { key: "industry", label: "お問い合わせ種別", required: true, options: ["通常の問い合わせ", "サービス内容の確認", "取材・メディア", "業務提携", "セミナー・登壇", "採用・協業", "その他"] },
      { key: "revenue", label: "会社・所属区分", required: false, options: ["事業会社", "士業・専門家", "金融機関", "メディア", "個人", "その他"] },
      { key: "timing", label: "返信希望", required: true, options: ["メールで返信希望", "オンラインで相談したい", "急ぎではない", "内容確認後に相談したい"] },
    ],
    concernLabel: "関連するテーマ（複数選択可）",
    concerns: ["サービス内容", "料金・契約条件", "中小M&Aガイドライン", "提携相談", "取材・掲載", "セミナー", "採用・協業", "その他"],
  },
};

function PageContact({ navigate }) {
  const [step, setStep] = useState(0);
  const [submitState, setSubmitState] = useState({ submitting: false, error: "" });
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
  const chooseRole = (role) => setData((d) => ({
    ...d,
    role,
    industry: "",
    revenue: "",
    timing: "",
    concerns: [],
  }));
  const toggle = (k, v) => setData((d) => ({
    ...d,
    [k]: d[k].includes(v) ? d[k].filter((x) => x !== v) : [...d[k], v],
  }));

  const stepLabels = ["ご立場", "ご状況", "ご連絡先", "ご相談方法", "確認"];
  const total = stepLabels.length;
  const profile = CONTACT_PROFILES[data.role] || CONTACT_PROFILES.seller;
  const isOtherInquiry = data.role === "other";

  const canNext = () => {
    if (step === 0) return data.role !== "";
    if (step === 1) return profile.fields.every((field) => !field.required || data[field.key] !== "");
    if (step === 2) return (isOtherInquiry || data.company) && data.name && data.email;
    if (step === 3) return data.method !== "";
    return true;
  };

  const buildMailBody = () => [
    "NexusM&A 無料相談フォーム",
    "",
    `ご立場: ${ROLE_LABELS[data.role] || "未選択"}`,
    ...profile.fields.map((field) => `${field.label}: ${data[field.key] || "未選択"}`),
    `${profile.concernLabel}: ${data.concerns.length ? data.concerns.join(" / ") : "なし"}`,
    `会社名: ${data.company}`,
    `お名前: ${data.name}`,
    `メール: ${data.email}`,
    `電話番号: ${data.phone || "未記入"}`,
    `ご相談方法: ${METHOD_LABELS[data.method]}`,
    "",
    "ご相談内容:",
    data.message || "未記入",
  ].join("\n");

  const submitContactForm = async () => {
    if (!data.agree || submitState.submitting) return;
    setSubmitState({ submitting: true, error: "" });

    const senderLabel = data.company ? `${data.company} ${data.name}` : data.name;
    const subject = `【NexusM&A 無料相談】${senderLabel}様`;
    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject,
      from_name: data.name,
      email: data.email,
      company: data.company,
      phone: data.phone,
      role: data.role,
      role_label: ROLE_LABELS[data.role],
      inquiry_type: data.industry,
      company_size_or_type: data.revenue,
      timing: data.timing,
      concerns: data.concerns.join(" / "),
      consultation_method: data.method,
      message: buildMailBody(),
      botcheck: "",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "送信に失敗しました。");
      }
      setStep(total);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setSubmitState({
        submitting: false,
        error: "送信できませんでした。時間をおいて再度お試しいただくか、y.uematsu@sasa-eru.com へ直接ご連絡ください。",
      });
    }
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
              入力いただいた内容を送信しました。確認後、原則1〜2営業日以内に y.uematsu@sasa-eru.com より返信いたします。<br />
              返信が届かない場合は、迷惑メールフォルダもご確認ください。
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
                      <button key={o.v} className={`role-card ${data.role === o.v ? "selected" : ""}`} onClick={() => chooseRole(o.v)}>
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
                  <h3 className="font-serif-jp" style={{ fontSize: 28, marginTop: 14 }}>{profile.title}</h3>
                  <p className="form-step-lead">{profile.lead}</p>

                  {profile.fields.map((field) => (
                    <div className="field" key={field.key}>
                      <label>{field.label} {field.required && <span className="req">必須</span>}</label>
                      <div className="chips">
                        {field.options.map((x) => (
                          <button key={x} className={`chip ${data[field.key] === x ? "selected" : ""}`} onClick={() => update(field.key, x)}>{x}</button>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="field">
                    <label>{profile.concernLabel}</label>
                    <div className="chips">
                      {profile.concerns.map((x) => (
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
                    <label>{isOtherInquiry ? "会社名・ご所属" : "会社名"} {!isOtherInquiry && <span className="req">必須</span>}</label>
                    <input type="text" value={data.company} onChange={(e) => update("company", e.target.value)} placeholder={isOtherInquiry ? "会社名・媒体名・ご所属など" : "株式会社○○○○"} />
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
                      <tr><th>ご立場</th><td>{ROLE_LABELS[data.role]}</td></tr>
                      {profile.fields.map((field) => (
                        <tr key={field.key}><th>{field.label}</th><td>{data[field.key] || "—"}</td></tr>
                      ))}
                      <tr><th>{profile.concernLabel}</th><td>{data.concerns.length ? data.concerns.join(" / ") : "—"}</td></tr>
                      <tr><th>会社名</th><td>{data.company}</td></tr>
                      <tr><th>お名前</th><td>{data.name}</td></tr>
                      <tr><th>メール</th><td>{data.email}</td></tr>
                      <tr><th>電話番号</th><td>{data.phone || "—"}</td></tr>
                      <tr><th>ご相談方法</th><td>{METHOD_LABELS[data.method]}</td></tr>
                      <tr><th>ご相談内容</th><td>{data.message || "—"}</td></tr>
                    </tbody>
                  </table>
                  <label className="agree-line">
                    <input type="checkbox" checked={data.agree} onChange={(e) => update("agree", e.target.checked)} />
                    <span><a onClick={(e) => { e.preventDefault(); navigate("privacy"); }} style={{ color: "var(--gold-700)", textDecoration: "underline" }}>個人情報保護方針</a>に同意の上、送信します。</span>
                  </label>
                  {submitState.error && (
                    <div style={{ marginTop: 18, padding: "14px 16px", border: "1px solid rgba(160, 42, 42, 0.35)", background: "rgba(160, 42, 42, 0.06)", color: "#8a1f1f", fontSize: 13, lineHeight: 1.8 }}>
                      {submitState.error}
                    </div>
                  )}
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
                  <button className="btn btn-primary" disabled={!data.agree || submitState.submitting} onClick={submitContactForm} style={{ opacity: data.agree && !submitState.submitting ? 1 : 0.4, cursor: data.agree && !submitState.submitting ? "pointer" : "not-allowed" }}>
                    {submitState.submitting ? "送信中..." : "この内容で送信する"} <span className="arrow" />
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
