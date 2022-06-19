import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Login2 from "./components/Login2.js";
import Navbar from "./components/Navbar.js";
import Register from "./components/Register.js";
import Register2 from "./components/Register2.js";

function App() {
  return (
     <BrowserRouter>
       <Routes>
          <Route exact path="/" element={<>
            <Navbar/>
            <Home/>
            </>}/>
          <Route exact path="/login" element={<Login2/>} />
          <Route exact path="/register2" element={<Register/>} />
          <Route path="/register" element={<Register2/>} />
       </Routes>
     </BrowserRouter>
  );
}

export default App;
