import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Result from "./components/ResultPage/Result";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/weather" element={<Result />} />
    </Routes>
  );
}

export default App;
