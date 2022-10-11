import { Bars3Icon } from "@heroicons/react/24/solid";
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
            <div className="hidden sm:block">
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
            {/* ............... */}
            <div className="flex-none block sm:hidden">
                <ul className="menu menu-horizontal p-0">
                    <li tabIndex={0}>
                        <a>
                            <Bars3Icon className="w-7 h-7 font-bold"></Bars3Icon>
                        </a>
                        <ul className=" bg-yellow-400">
                            <li>
                                <NavLink
                                    className="py-1 rounded-b-2xl"
                                    to={"/home"}
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    className="py-1 rounded-b-2xl"
                                    to={"/blog"}
                                >
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="py-1 rounded-b-2xl"
                                    to={"/analysis"}
                                >
                                    Analysis
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            {/* ......... */}
        </div>
    );
};

export default NavBar;
