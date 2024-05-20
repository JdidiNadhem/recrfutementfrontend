import React from "react";
import Experience from "./experience";
import Skills from "./skills";
import Information from "./information";
import NavBar from "../navbar/NavBar";
import JobList from "./jobList";

const MainProfile = () => {
  return (
    <div className="grid grid-cols-[400px,1fr] gap-5 p-9 w-full">
      <div className="bg-white rounded-lg shadow-md p-4 w-full ">
        <Skills className="col-start-1 col-end-2 w-full " />
      </div>
      <div className="col-start-2 col-end-3 w-full">
        <div className="bg-white rounded-lg shadow-md p-4 mb-5 w-full">
          <Experience />
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 mb-5 w-full">
          <JobList />
        </div>
      </div>
    </div>
  );
};

export default MainProfile;
