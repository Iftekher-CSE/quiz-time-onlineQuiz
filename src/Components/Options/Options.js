import React from "react";

const Options = ({ option }) => {
    // console.log(option);
    return (
        <div className="form-control items-start">
            <label className="label cursor-pointer">
                <input
                    type="radio"
                    name="radio-6"
                    className="radio checked:bg-red-500"
                    checked
                />
                <span className="label-text">{option}</span>
            </label>
        </div>
    );
};

export default Options;
