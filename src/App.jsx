
import "./App.css";
import { Link, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Footer, Header } from "./Components";
import { About } from "./Pages";
import 'reactjs-popup/dist/index.css';


function App() {
 

  

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
