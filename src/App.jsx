import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { About, BlogDetail, BlogList, Contact } from "./Pages";

import { Footer, Header } from "./Components";
import "reactjs-popup/dist/index.css";
import { useEffect, useMemo, useState } from "react";
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
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
        <Footer />
      </>
    );
  }, []);

  return (
    <>
      <Header />
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
