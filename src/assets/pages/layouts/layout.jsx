import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/sidebar";

export default function layout() {
   return <div className="flex flex-col lg:flex-row">
       <Sidebar />
       <Outlet />
     </div>;
}