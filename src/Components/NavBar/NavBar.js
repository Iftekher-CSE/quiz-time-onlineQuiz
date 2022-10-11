import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="bg-yellow-400 text-center px-6 text-white font-bold text-2xl flex justify-between">
            <img className="h-12 rounded-xl" src="Quiz-time-icon.jpg" alt="" />
            <div>
                <NavLink className="px-6 py-3 rounded-md" to={"/home"}>
                    Home
                </NavLink>
                <NavLink className="px-6 py-3 mx-2 rounded-md" to={"/blog"}>
                    Blog
                </NavLink>
                <NavLink className="px-6 py-3 mx-2 rounded-md" to={"/analysis"}>
                    Analysis
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;
