import React from "react";
import {
    BeakerIcon,
    CheckCircleIcon,
    TicketIcon,
} from "@heroicons/react/24/solid";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";

const Header = () => {
    return (
        <div className="flex justify-around  items-center border-2 border-yellow-500 rounded-xl">
            <div className="bg-orange-500 px-5 pt-5 pb-10 rounded-2xl text-white font-bold">
                <h3 className="text-3xl">In this website you can:</h3>
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
            <img className="w-1/4" src="quiz-time-icon.png" alt="" />
        </div>
    );
};

export default Header;
