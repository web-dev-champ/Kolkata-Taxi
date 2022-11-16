import './App.css';
import Home from "./components/Home"
import Faq from "./components/Faq"
import Signup from "./components/Signup"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
          <Route exact path='/'  element={<Home />} />
          <Route path='/Faq' element={<Faq/>} />
          <Route path='/Signup' element={<Signup/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
