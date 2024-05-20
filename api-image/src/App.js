import "./App.css";
import Header from "./components/header/header";
import FetchData from "./components/FetchData/FetchData";
import Favorite from "./components/Favorite-Images/Favorite -Images";
import { DogProvider } from "./components/Context/DogContext";
import Detail from "./components/Image- detail/Image- detail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <DogProvider>
        <Routes>
          <Route path="/image" element={<FetchData />} />
          <Route path="/Favorite" element={<Favorite />} />
          <Route path="//detail/:id" element={<Detail />} />
        </Routes>
      </DogProvider>
    </Router>
  );
}

export default App;
