import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
<<<<<<< HEAD
import { About, BlogDetail, BlogList, Contact, Home, Shop } from "./Pages";
=======
import { About, BlogDetail, BlogList, Contact, Home, ProductDetail } from "./Pages";
>>>>>>> 13760177a74c3edebcb206a4e01aff5e58861c8e

import { Footer, Header } from "./Components";
import "reactjs-popup/dist/index.css";
import { useEffect, useMemo } from "react";
import { useWindowScroll } from "./hooks";

function App() {
  const { scrollToTop, showButton } = useWindowScroll();

  const loc = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [loc]);

  const Children = useMemo(() => {
    return (
      <>
        {" "}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </>
    );
  }, []);

  console.log(1)

  return (
    <>

      <button onClick={() => scrollToTop()} className={`scroll-top dark  ${showButton ? 'active' : ''}`}><i className="fa-solid fa-angle-up"></i></button>
      {Children}
      <button
        onClick={() => scrollToTop()}
        className={`scroll-top dark  ${showButton ? "active" : ""}`}
      >
        <i className="fa-solid fa-angle-up"></i>
      </button>
    </>
  );
}

export default App;
