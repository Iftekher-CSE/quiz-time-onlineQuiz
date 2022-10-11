import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
    const loadQuiz = useLoaderData();
    // console.log(loadQuiz.data);

    // state for correct answer count
    const [correctCount, SetCorrectCount] = useState(0);

    return (
        <div>
            <h4 className="text-center text-3xl font-bold mt-6 text-orange-600">
                Quiz On: {loadQuiz.data.name} (Total Pint: {correctCount})
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6">
                {loadQuiz.data.questions.map(quiz => (
                    <Question
                        key={quiz.id}
                        quiz={quiz}
                        SetCorrectCount={SetCorrectCount}
                        correctCount={correctCount}
                    ></Question>
                ))}
            </div>
        </div>
    );
};

export default Quiz;
