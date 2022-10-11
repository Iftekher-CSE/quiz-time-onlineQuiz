import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import { QuizSubDataContext } from "../Main/Main";
import QuizSub from "../QuizSub/QuizSub";

const Home = () => {
    const quizSubjects = useContext(QuizSubDataContext);
    // console.log(quizSubjects.data);
    return (
        <div>
            <Header></Header>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-2 mt-8 border-orange-300 rounded-2xl">
                {quizSubjects.data.map(quizSub => (
                    <QuizSub key={quizSub.id} quizSub={quizSub}></QuizSub>
                ))}
            </div>
        </div>
    );
};

export default Home;
