import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
    const loadQuiz = useLoaderData();
    // console.log(loadQuiz.data);
    return (
        <div>
            <h4 className="text-center text-3xl font-bold mt-6 text-orange-600">
                Quiz On: {loadQuiz.data.name}
            </h4>
            <div className="grid grid-cols-3 p-6">
                {loadQuiz.data.questions.map(quiz => (
                    <Question key={quiz.id} quiz={quiz}></Question>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
