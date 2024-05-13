import React from "react";

const Experience = () => {
  return (
    <div>
      <h1>Basic Informations</h1>
      <div className="flex gap-5 p-8 p-9">
        <div className="flex flex-col">
          <span>Birth day: </span>
          <span style={{ fontFamily: "sans-serif", color: "blue" }}>
            13/06/1997
          </span>
          <span>Email: </span>
          <span style={{ fontFamily: "sans-serif", color: "blue" }}>
            jedidinadhem@gmail.com
          </span>
          <span>Phone: </span>
          <span style={{ fontFamily: "sans-serif", color: "blue" }}>
            +216 53 310 408
          </span>
        </div>
        <div className="flex flex-col">
          <span>LinkedIn: </span>
          <span style={{ fontFamily: "sans-serif", color: "blue" }}>
            https://fr.linkedin.com/nadhem-jdidi
          </span>
          <span>Github: </span>
          <span style={{ fontFamily: "sans-serif", color: "blue" }}>
            https://github.com/JdidiNadhem
          </span>
          {/* <span>AGE</span>
          <span style={{ fontFamily: "sans-serif", color: "blue" }}>
            28 YEAR
          </span> */}
        </div>
        {/* <div className="flex flex-col">
          <span>AGE</span>
          <span>28 YEAR</span>
          <span>AGE</span>
          <span>28 YEAR</span>
          <span>AGE</span>
          <span>28 YEAR</span>
        </div> */}
      </div>
      <button className="mr-5 bg-[#D2D2D2] py-2 px-4 rounded-lg shadow-md">
        Download Resume
      </button>
      <button className="mr-5 bg-[#D2D2D2] py-2 px-4 rounded-lg shadow-md">
        Send Email
      </button>
    </div>
  );
};

export default Experience;
