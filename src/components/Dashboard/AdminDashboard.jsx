import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = () => {
  return (
    <div className="p-7 bg-black
      h-screen w-full">
      <Header />
      <CreateTask />
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
