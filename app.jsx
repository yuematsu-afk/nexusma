/* Main app — router & shell */
const { useState, useEffect } = React;

function App() {
  const [route, setRoute] = useState(() => {
    const hash = window.location.hash.replace(/^#\/?/, "");
    return hash || "home";
  });

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace(/^#\/?/, "") || "home";
      setRoute(h);
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

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
