import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] w-full overflow-x-auto mt-10 [scrollbar-width:none]  py-5 flex items-center justify-start gap-5 flex-nowrap"
    >
      <div className="h-full w-75 bg-pink-400 rounded-xl shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm  px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">2 feb 2026</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Do Leetcode</h2>
        <p className=" text-sm mt-2">lorem*5</p>
      </div>
       <div className="h-full w-75 bg-red-400 rounded-xl shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm  px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">2 feb 2026</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Do Leetcode</h2>
        <p className=" text-sm mt-2">lorem*5</p>
      </div>
       <div className="h-full w-75 bg-blue-400 rounded-xl shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm  px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">2 feb 2026</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Do Leetcode</h2>
        <p className=" text-sm mt-2">lorem*5</p>
      </div>
       <div className="h-full w-75 bg-purple-400 rounded-xl shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm  px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">2 feb 2026</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Do Leetcode</h2>
        <p className=" text-sm mt-2">lorem*5</p>
      </div>
       <div className="h-full w-75 bg-green-400 rounded-xl shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm  px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">2 feb 2026</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Do Leetcode</h2>
        <p className=" text-sm mt-2">lorem*5</p>
      </div>
       <div className="h-full w-75 bg-orange-400 rounded-xl shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm  px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">2 feb 2026</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Do Leetcode</h2>
        <p className=" text-sm mt-2">lorem*5</p>
      </div>
    </div>
  );
};

export default TaskList;
