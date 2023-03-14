
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About, BlogList, Contact } from "./Pages";

import { Footer, Header } from "./Components";
import 'reactjs-popup/dist/index.css';


function App() {




  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
