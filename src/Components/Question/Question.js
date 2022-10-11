import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import Options from "../Options/Options";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Question = ({ quiz }) => {
    const { correctAnswer, id, options, question } = quiz;
    console.log(quiz);
    // const showCorrectAnswer = () => toast({ correctAnswer });
    const showAnswer = () => toast(`Correct answer is: "${correctAnswer}"`);
    return (
        <div className="p-2 border-2 m-3 rounded-2xl border-orange-600">
            <div className="flex">
                <h4>Question: {question}</h4>
                <div className="flex items-center">
                    <button onClick={showAnswer}>
                        <QuestionMarkCircleIcon className="h-7 w-7 text-orange-600"></QuestionMarkCircleIcon>
                    </button>
                    <ToastContainer />
                </div>
            </div>

            <div className="pt-4">
                {options.map(option => (
                    <Options key={id} option={option}></Options>
                ))}
            </div>
        </div>
    );
};

export default Question;
