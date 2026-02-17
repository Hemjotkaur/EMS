import React from "react";

const CreateTask = () => {
  return (
     <div className="p-5 bg-[#1C1C1C] rounded mt-7">
        <form
          className="flex flex-wrap  w-full items-start
        justify-between"
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                type="text"
                placeholder="Make a UI design"
                className="text-sm py-1 px-2  w-4/5 text-gray-300  rounded outline-none bg-transparent border-[1px]   border-gray-400 mb-4"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                type="date"
                className="text-sm py-1 px-2  w-4/5 text-gray-300  rounded outline-none bg-transparent border-[1px] border-gray-400"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
              <input
                type="text"
                placeholder="employee name"
                className="text-sm py-1 px-2  w-4/5 text-gray-300  rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                type="text"
                placeholder="design, dev, etc"
                className="text-sm py-1 px-2  w-4/5 text-gray-300  rounded outline-none bg-transparent border-gray-400 mb-4"
              />
            </div>
          </div>
          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Task Description</h3>
            <textarea name="" id="" cols="30" rows="10" 
            className="text-sm w-full h-44  py-2 px-4 rounded outline-none 
            bg-transparent border-[1px] border-gray-400 text-gray-300"></textarea>
              <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">Create Task</button>
          </div>
        
        </form>
      </div>
  );
};

export default CreateTask;