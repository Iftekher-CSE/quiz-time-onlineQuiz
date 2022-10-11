import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate("./");
    };
    return (
        <div className="bg-yellow-400 text-center px-6 text-white font-bold text-2xl flex justify-between rounded-b-2xl">
            <div className="flex">
                <img
                    onClick={navigateToHome}
                    className="h-12 rounded-xl cursor-pointer"
                    src="Quiz-time-icon.jpg"
                    alt=""
                />
                <h3
                    onClick={navigateToHome}
                    className=" pl-2 my-auto underline font-extrabold cursor-pointer"
                >
                    Quiz Time
                </h3>
            </div>
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
