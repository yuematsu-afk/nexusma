/* Main app — router & shell */
const { useState, useEffect } = React;

const SITE_BASE_URL = "https://sasa-eru.com/";
const DEFAULT_META = {
  title: "NexusM&A — 社長がいないと回らない会社の事業承継・M&A相談",
  description: "NexusM&Aは、社長依存・後継者不在・経営者保証に悩む中小企業向けに、売却前提ではない事業承継・M&A相談を行います。会社名・電話番号不要の社長不在90日診断も利用できます。",
};

function getRouteFromHash() {
  if (window.location.pathname.match(/^\/owner-emergency-checklist\/?$/)) {
    return "owner-emergency";
  }
  if (window.location.pathname.match(/^\/columns\/[^/]+\/?$/)) {
    return "news";
  }
  const hash = window.location.hash.replace(/^#\/?/, "");
  return (hash.split("?")[0] || "home");
}

const ROUTE_META = {
  home: DEFAULT_META,
  "service-seller": {
    title: "売り手の方へ | NexusM&A",
    description: "会社・事業の譲渡を検討する中小企業経営者向けに、秘密保持と納得感を重視したM&A支援の進め方を案内します。",
  },
  "service-buyer": {
    title: "買い手の方へ | NexusM&A",
    description: "譲受・買収を検討する企業向けに、戦略整理、候補案件の検討、秘密保持を前提にしたM&A支援を案内します。",
  },
  cases: {
    title: "案件イメージ | NexusM&A",
    description: "NexusM&Aで取り扱いを想定する中小M&Aの案件イメージを、業種・地域・規模別に確認できます。",
  },
  results: {
    title: "事例イメージ | NexusM&A",
    description: "中小企業の事業承継・成長戦略M&Aで想定される相談事例や支援の流れを紹介します。",
  },
  pricing: {
    title: "料金・契約条件 | NexusM&A",
    description: "NexusM&Aの相談料、着手金、成功報酬、最低報酬、契約条件の考え方を案内します。",
  },
  company: {
    title: "会社概要 | NexusM&A",
    description: "NexusM&Aを運営するSASAERU合同会社の会社情報、代表プロフィール、遵守方針を掲載しています。",
  },
  news: {
    title: "コラム・ニュース | NexusM&A",
    description: "中小M&A、事業承継、PMI、経営者の準備に関するコラム・ニュースを掲載しています。",
  },
  diagnosis: {
    title: "社長不在90日診断 | NexusM&A",
    description: "会社名・電話番号不要。経営者に依存している業務や判断を3分で整理できる匿名セルフチェックです。",
  },
  "owner-emergency": {
    title: "社長が急に入院した時の会社チェックリスト | NexusM&A",
    description: "社長が急病・入院・長期不在になった時、資金繰り、従業員、取引先、家族に何が起きるかを整理するチェックリストです。売却前提ではなく、会社が止まる場所を確認できます。",
  },
  contact: {
    title: "無料相談・お問い合わせ | NexusM&A",
    description: "M&A、事業承継、買収相談、通常のお問い合わせをフォームから送信できます。内容は秘密保持に配慮して取り扱います。",
  },
  faq: {
    title: "よくある質問 | NexusM&A",
    description: "NexusM&Aへの相談、秘密保持、電話を前提にしない問い合わせ方法など、よくある質問をまとめています。",
  },
  glossary: {
    title: "用語集 | NexusM&A",
    description: "中小M&Aや事業承継で使われる基本用語を、経営者向けにわかりやすく整理しています。",
  },
  privacy: {
    title: "個人情報保護方針 | NexusM&A",
    description: "NexusM&Aにおける個人情報の利用目的、管理、第三者提供、お問い合わせ窓口を掲載しています。",
  },
  antisocial: {
    title: "反社会的勢力排除 | NexusM&A",
    description: "NexusM&Aの反社会的勢力排除に関する基本方針を掲載しています。",
  },
  guideline: {
    title: "中小M&Aガイドライン遵守方針 | NexusM&A",
    description: "中小企業庁の中小M&Aガイドライン遵守に関するNexusM&Aの方針を掲載しています。",
  },
  sitemap: {
    title: "サイトマップ | NexusM&A",
    description: "NexusM&Aサイト内の主要ページ一覧です。",
  },
  careers: {
    title: "採用・協業情報 | NexusM&A",
    description: "NexusM&Aとの採用・協業・連携に関する情報とお問い合わせ先を掲載しています。",
  },
};

function setMeta(name, value, attr = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

window.setNexusMeta = setMeta;
window.setNexusCanonical = setCanonical;

function App() {
  const [route, setRoute] = useState(() => getRouteFromHash());

  useEffect(() => {
    const onHash = () => {
      setRoute(getRouteFromHash());
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (window.location.pathname.match(/^\/columns\/[^/]+\/?$/)) {
      return;
    }
    const meta = ROUTE_META[route] || DEFAULT_META;
    const canonical = route === "home"
      ? SITE_BASE_URL
      : route === "owner-emergency"
        ? `${SITE_BASE_URL}owner-emergency-checklist/`
        : `${SITE_BASE_URL}#/${route}`;
    document.title = meta.title;
    setMeta("description", meta.description);
    setMeta("og:title", meta.title, "property");
    setMeta("og:description", meta.description, "property");
    setMeta("og:url", canonical, "property");
    setCanonical(canonical);
  }, [route]);

  const navigate = (r) => {
    window.location.hash = `/${r}`;
    setRoute(r);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  let page = null;
  switch (route) {
    case "home": page = <PageHome navigate={navigate} />; break;
    case "service-seller": page = <PageSeller navigate={navigate} />; break;
    case "service-buyer": page = <PageBuyer navigate={navigate} />; break;
    case "cases": page = <PageCases navigate={navigate} />; break;
    case "results": page = <PageResults navigate={navigate} />; break;
    case "pricing": page = <PagePricing navigate={navigate} />; break;
    case "company": page = <PageCompany navigate={navigate} />; break;
    case "news": page = <PageNews navigate={navigate} />; break;
    case "contact": page = <PageContact navigate={navigate} />; break;
    case "diagnosis": page = <PageDiagnosis navigate={navigate} />; break;
    case "owner-emergency": page = <PageOwnerEmergency navigate={navigate} />; break;
    case "faq": page = <PageInfo navigate={navigate} type="faq" />; break;
    case "glossary": page = <PageInfo navigate={navigate} type="glossary" />; break;
    case "privacy": page = <PageInfo navigate={navigate} type="privacy" />; break;
    case "antisocial": page = <PageInfo navigate={navigate} type="antisocial" />; break;
    case "guideline": page = <PageInfo navigate={navigate} type="guideline" />; break;
    case "sitemap": page = <PageInfo navigate={navigate} type="sitemap" />; break;
    case "careers": page = <PageInfo navigate={navigate} type="careers" />; break;
    default: page = <PageHome navigate={navigate} />;
  }

  return (
    <React.Fragment>
      <Header route={route} navigate={navigate} />
      <div data-screen-label={route}>{page}</div>
      <Footer navigate={navigate} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
