import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login";
import Regiter from "./Pages/Regiter";

import JobDescription from "./Components/home/JobDescription.jsx";
import MainProfile from "./Components/profile/mainProfile.jsx";

import Layout from "./Layout.jsx";
import Error from "./Pages/Error.jsx";
import CompanyProfile from "./Components/company/CompanyProfile.jsx";
import AddJobOffer from "./Components/company/AddJobOffer.jsx";

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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="job-description" element={<JobDescription />} />
          <Route path="profile" element={<MainProfile />} />
          <Route path="company-profile" element={<CompanyProfile />} />
          <Route path="/add-offer" element={<AddJobOffer />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regiter />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App; 
