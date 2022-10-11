import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="bg-yellow-400 text-center px-6 text-white font-bold text-2xl flex justify-between rounded-b-2xl">
            <img className="h-12 rounded-xl" src="Quiz-time-icon.jpg" alt="" />
            <div>
                <NavLink className="px-6 py-3 rounded-b-2xl" to={"/home"}>
                    Home
                </NavLink>
                <NavLink className="px-6 py-3 mx-2 rounded-b-2xl" to={"/blog"}>
                    Blog
                </NavLink>
                <NavLink
                    className="px-6 py-3 mx-2 rounded-b-2xl"
                    to={"/analysis"}
                >
                    Analysis
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;
