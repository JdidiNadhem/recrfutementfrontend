import React from "react";
// import w from "./w.png";
const Skills = () => {
  return (
    <div className="">
      <div className="mb-5 flex justify-center">
        <img src="https://avatars.githubusercontent.com/u/31133452?s…00&u=c59c0056e5087e14c772b3b9209101e23a274d82&v=4" alt="img" className="rounded-full w-[50%] h-[50%]" />
      </div>
      <div className="mb-5 flex justify-center items-center flex-col">
        <h1
          style={{ fontSize: 20, fontFamily: "sans-serif", color: "#0077B5" }}
        >
          Jdidi Nadhem
        </h1>
        <span style={{ color: "gray" }}>Devoleper</span>
        <p style={{ color: "#545454" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
          voluptas illo temporibus, nostrum esse enim, dolore culpa saepe
          pariatur repellendus modi minima iusto eius molestiae exercitationem
          molestias recusandae vel tempora?
        </p>
      </div>
      <div className="">
        <h1 style={{ fontSize: 20, fontFamily: "serif" }}>Skills</h1>
        <div className="flex gap-5 flex-wrap">
          <p className="p-1 rounded-lg bg-slate-300 text-center font-md p-3">JavaScript</p>
          <p className="p-1 rounded-lg bg-slate-300 text-center font-md p-3">Java</p>
          <p className="p-1 rounded-lg bg-slate-300 text-center font-md p-3">ReactJS</p>
          <p className="p-1 rounded-lg bg-slate-300 text-center font-md p-3">NodeJS</p>
        </div>
      </div>
      <div>
      <h1 style={{ fontSize: 20, fontFamily: "serif" }}>Add Notes</h1>
      <input type="text" className="border-2 border-solid border-black-500 h-[50px] w-full"/>
      <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md w-full">
      Add Note
    </button>
      </div>
    </div>
  );
};

export default Skills;
