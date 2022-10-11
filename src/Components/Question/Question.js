import React from "react";
import Options from "../Options/Options";

const Question = ({ quiz }) => {
    const { correctAnswer, id, options, question } = quiz;
    // console.log(quiz);
    return (
        <div className="p-4 border-2 m-4 rounded-2xl border-orange-600">
            <h4>Question: {question}</h4>

            <div className="pt-4">
                {options.map(option => (
                    <Options option={option}></Options>
                ))}
            </div>
        </div>
    );
};

export default Question;
