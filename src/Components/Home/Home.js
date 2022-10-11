import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import QuizSub from "../QuizSub/QuizSub";

const Home = () => {
    const quizSubjects = useLoaderData();
    console.log(quizSubjects.data);
    return (
        <div>
            <Header></Header>
            <div className="flex">
                {quizSubjects.data.map(quizSub => (
                    <QuizSub key={quizSub.id} quizSub={quizSub}></QuizSub>
                ))}
            </div>
        </div>
    );
};

export default Home;
