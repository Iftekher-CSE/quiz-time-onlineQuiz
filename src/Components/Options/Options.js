import React from "react";
import { toast, ToastContainer } from "react-toastify";

const Options = ({ option, correctAnswer, SetCorrectCount, correctCount }) => {
    const answerCheck = () => {
        if (option === correctAnswer) {
            SetCorrectCount(correctCount + 1);
        } else {
            SetCorrectCount(correctCount - 1);
        }
        toast(
            `Your Answer is ${
                option === correctAnswer ? "Correct" : "Not Correct"
            }`
        );
    };
    return (
        <div className="form-control items-start">
            <label className="label cursor-pointer">
                <input
                    onClick={() => answerCheck(option)}
                    type="radio"
                    name="radio-6"
                    className="radio checked:bg-red-500"
                    checked
                />
                <ToastContainer />
                <span className="label-text">{option}</span>
            </label>
        </div>
    );
};

export default Options;
