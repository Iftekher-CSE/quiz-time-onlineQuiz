import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import Options from "../Options/Options";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ quiz, SetCorrectCount, correctCount }) => {
    const { correctAnswer, options, question } = quiz;

    // toast for correct answer------
    const showAnswer = () => toast(`Correct answer is: "${correctAnswer}"`);

    return (
        <div className="p-2 border-2 m-3 rounded-2xl border-orange-600">
            <div className="flex">
                <h4>Question: {question.slice(3, -4)}</h4>
                {/* Answer show in toast */}
                <div className="flex items-center">
                    <button onClick={showAnswer}>
                        <QuestionMarkCircleIcon className="h-7 w-7 text-orange-600"></QuestionMarkCircleIcon>
                    </button>
                    <ToastContainer />
                </div>
            </div>

            {/* Option component */}
            <div className="pt-4">
                {options.map((option, index) => (
                    <Options
                        key={index}
                        option={option}
                        correctAnswer={correctAnswer}
                        SetCorrectCount={SetCorrectCount}
                        correctCount={correctCount}
                    ></Options>
                ))}
            </div>
        </div>
    );
};

export default Question;
