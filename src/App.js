import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Denied from "./components/denied/Denied";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/denied" element={<Denied />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
