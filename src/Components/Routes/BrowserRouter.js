import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../views/Home/Home";
import List from "../../views/Cocktails/List";
import SingleCocktail from "../../views/Cocktails/SingleCocktail";
import LogIn from "../../views/Login/Login";
import PageNotFound from "../../views/ErrorPages/PageNotFound";
import Curriculum from "../../views/Curriculum/Curriculum";
import NavBar from "../Header/NavBar/NavBar";
import Footer from "../Footer/Footer";
import Sidebar from "../Header/NavBar/Sidebar";

export default function CustomRutes() {
  return (
    <Router className="App">
      <NavBar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/list" element={<List />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/list/:id" element={<SingleCocktail />} />
      </Routes>
      <Footer />
    </Router>
  );
}
