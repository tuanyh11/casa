import { Route, Routes, useLocation } from "react-router-dom";
import { About, BlogDetail, BlogList, Cart, Contact, Home, MyAccount, Page404, ProductDetail, Shop, Checkout } from "./Pages";

import { Footer, Header } from "./Components";
import { useEffect, useMemo } from "react";
import { useWindowScroll } from "./hooks";
import "./App.css";

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
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/404" element={<Page404 />} />
        </Routes>
        <Footer />
      </>
    );
  }, []);

  // console.log(1)

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
