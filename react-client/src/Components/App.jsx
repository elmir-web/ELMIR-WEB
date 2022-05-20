import { Routes, Route } from "react-router-dom";

import "./App.scss";

import MainPage from "./MainPage/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
