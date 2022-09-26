import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import Yehoon from "../Yehoon/Components/Yehoon";
import Sangho from "../Sangho/Components/Sangho";
import Geunsoo from "../Geunsoo/Components/Geunsoo";
import Sanghee from "../Sanghee/Components/Sanghee";
import Yeonju from "../Yeonju/Components/Yeonju";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/yehoon" element={<Yehoon />}></Route>
        <Route path="/sangho" element={<Sangho />}></Route>
        <Route path="/geunsoo" element={<Geunsoo />}></Route>
        <Route path="/sanghee" element={<Sanghee />}></Route>
        <Route path="/yeonju" element={<Yeonju />}></Route>
      </Routes>
    </>
  );
}

export default App;
