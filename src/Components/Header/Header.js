import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Header = () => {
    return (
        <div className="flex justify-around  items-center border-2 border-yellow-500 rounded-xl flex-wrap-reverse md:flex-nowrap p-5">
            <div className="bg-orange-500 px-5 pt-5 pb-5 rounded-2xl text-white font-bold w-3/4 md:w-2/5 lg:w-1/3">
                <h3 className="text-3xl py-4">In this website you can:</h3>
                <p className="flex">
                    <CheckCircleIcon className="h-5 w-5 text-white" />
                    Attend on online quiz on Web Development.
                </p>
                <p className="flex">
                    <CheckCircleIcon className="h-5 w-5 text-white" />
                    Check your result immediately with explanation.
                </p>
                <p className="flex">
                    <CheckCircleIcon className="h-5 w-5 text-white" />
                    Regular development report.
                </p>
                <p className="flex">
                    <CheckCircleIcon className="h-5 w-5 text-white" />
                    Graphical analysis of your result.
                </p>
                <p className="flex">
                    <CheckCircleIcon className="h-5 w-5 text-white" />
                    Blogs on different web development topics.
                </p>
            </div>
            <img
                className="w-3/4 sm:w-3/4 md:w-1/3"
                src="quiz-time-icon.png"
                alt=""
            />
        </div>
    );
};

export default Header;
