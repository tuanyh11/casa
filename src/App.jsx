
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About, BlogList, Contact } from "./Pages";

import { Footer, Header } from "./Components";
import 'reactjs-popup/dist/index.css';
import { useEffect, useState } from "react";
import { useWindowScroll } from "./hooks";


function App() {



  const { scrollToTop, showButton } = useWindowScroll()





  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogList />} />
      </Routes>
      <Footer />

      <button onClick={() => scrollToTop()} className={`scroll-top dark  ${showButton ? 'active' : ''}`}><i className="fa-solid fa-angle-up"></i></button>
    </>
  );
}

export default App;
