
import "./App.css";
import { Link, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Footer, Header } from "./Components";
import { About } from "./Pages";
import 'reactjs-popup/dist/index.css';
import { useEffect, useState } from "react";
import { useWindowScroll } from "./hooks";


function App() {
 
  

 const {scrollToTop, showButton} =  useWindowScroll()


  

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>

      <button  onClick={() => scrollToTop()} className={`scroll-top dark  ${showButton ? 'active': ''}`}><i className="fa-solid fa-angle-up"></i></button>
    </div>
  );
}

export default App;
