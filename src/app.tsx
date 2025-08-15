import { useEffect } from "preact/hooks";
import GLightbox from "glightbox";
import "./app.css";

// import Nav from "./components/nav/Nav";
// import Main from "./components/main/Main";
import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import About from "./components/about/About";
// import Clients from "./components/clients/Clients";
// import Features from "./components/features/Features";
import Services from "./components/services/Services";
import CallToAction from "./components/call-to-action/CallToAction";
// import Pricing from "./components/pricing/Pricing";
// import Faq from "./components/faq/Faq";
import Team from "./components/team/Team";
// import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  useEffect(() => {
    // Controls nav menu
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");
    function mobileNavToogle() {
      document?.querySelector("body")?.classList.toggle("mobile-nav-active");
      mobileNavToggleBtn?.classList.toggle("bi-list");
      mobileNavToggleBtn?.classList.toggle("bi-x");
    }
    mobileNavToggleBtn?.addEventListener("click", mobileNavToogle);

    // light box gallery
    GLightbox({
      selector: ".glightbox",
    });
  }, []);

  return (
    <>
      <Header />
      <main class="main">
        <Hero />
        <About />
        {/* <Clients /> */}
        {/* <Features /> */}
        <Services />
        <CallToAction />
        {/* <Pricing /> */}
        {/* <Faq /> */}
        <Team />
        {/* <Gallery /> */}
        <Contact />
      </main>
      <Footer />
      {/* <!-- Preloader --> */}
      {/* <div id="preloader"></div> */}
    </>
  );
};

export default App;
