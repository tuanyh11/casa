
import "./App.css";
import { Link, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Header } from "./Components";
import { About } from "./Pages";



function App() {
 

  

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
