import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Appointment } from "./pages/Appointment";
import { NotFound } from "./pages/NotFound";
import { CreateBy } from "./components/CreateBy";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Appointment" element={<Appointment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CreateBy />
    </BrowserRouter>
  );
}

export default App;
