import "./App.css";
import Header from "./components/header/header";
import FetchData from "./components/FetchData/FetchData";
import Favorite from "./components/Favorite-Images/Favorite -Images";
import Detail from "./components/Image- detail/Image- detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/image" element={<FetchData />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/Detail" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
