import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login";
import Regiter from "./Pages/Regiter";

import JobDescription from "./Components/home/JobDescription.jsx";
import MainProfile from "./Components/profile/mainProfile.jsx";

// const Nav = styled.div`
//   display: flex;
// `;
// const NavLeft = styled.div`
//   width:25%;
// `;
// const NavRight = styled.div`
//   width:75%;
// `;

// import "./App.css";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regiter />} />
        <Route path="/job-description" element={<JobDescription />} />
        <Route path="/profile" element={<MainProfile/>} />
      </Routes>
    </div>
  );
}

export default App; 
