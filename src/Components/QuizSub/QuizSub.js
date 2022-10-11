import React from "react";
import { useNavigate } from "react-router-dom";

const QuizSub = ({ quizSub }) => {
    const { logo, name, total, id } = quizSub;
    const navigate = useNavigate();
    const btnClickHandler = subID => {
        navigate(`/quiz/${subID}`);
    };
    return (
        <div className="p-6">
            <div className="card w-50 bg-base-100 shadow-xl border-2 rounded-2xl">
                <figure className="px-5 pt-5">
                    <img
                        src={logo}
                        alt=""
                        className="rounded-xl border  bg-yellow-300"
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl">Quiz On: {name}</h2>
                    <p>
                        In this section total question is{" "}
                        <span className="font-bold ">{total}</span>
                    </p>
                    <div className="card-actions">
                        <button
                            onClick={() => btnClickHandler(id)}
                            className="btn bg-orange-500 py-1 px-4 rounded-lg m-2"
                        >
                            Start Quiz
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizSub;
