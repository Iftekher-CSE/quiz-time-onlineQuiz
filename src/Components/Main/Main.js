import React from "react";
import { createContext } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export const QuizSubDataContext = createContext();
const Main = () => {
    const quizSubjects = useLoaderData();
    return (
        <div>
            <NavBar></NavBar>
            <QuizSubDataContext.Provider value={quizSubjects}>
                <Outlet></Outlet>
            </QuizSubDataContext.Provider>
        </div>
    );
};

export default Main;
