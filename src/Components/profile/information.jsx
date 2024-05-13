import React from "react";

const Information = () => {
  return (
    <div className="space-y-5">
      <h1>Information</h1>
      <div className=" flex ">
        <div className="  gap-5 flex">
          {" "}
          <span
            style={{ backgroundColor: "orange", padding: 30 }}
            className="rounded-full mr-5"
          >
            ST
          </span>
        </div>

        <div className="flex flex-col w-full">
          <span>hygfnhjklm</span>
          <span>hygfnhjklm</span>
          <span>hygfnhjklm</span>
        </div>
      </div>
      <div className=" flex">
        <div className=" gap-5 flex">
          {" "}
          <span
            style={{ backgroundColor: "orange", padding: 30 }}
            className="rounded-full mr-5"
          >
            ST
          </span>
        </div>

        <div className="flex flex-col w-full">
          <span>hygfnhjklm</span>
          <span>hygfnhjklm</span>
          <span>hygfnhjklm</span>
        </div>
      </div>
      <div className="mb-[10%] flex">
        <div className=" gap-5 flex">
          {" "}
          <span
            style={{ backgroundColor: "orange", padding: 30 }}
            className="rounded-full mr-5"
          >
            ST
          </span>
        </div>

        <div className="flex flex-col w-full">
          <span>hygfnhjklm</span>
          <span>hygfnhjklm</span>
          <span>hygfnhjklm</span>
        </div>
      </div>

      <div className="">
      <div className="flex items-center space-x-4 flex-col space-y-6 ">
      <select className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        {/* <FontAwesomeIcon icon={faChevronDown} /> */}
      </select>
      <select className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <select className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
      </div>
    </div>
  );
};

export default Information;
