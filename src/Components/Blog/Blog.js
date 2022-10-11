import React from "react";

const Blog = () => {
    return (
        <div className="p-8">
            <h4 className="text-3xl text-center font-bold m-10">
                Question Answer Session
            </h4>
            <div
                tabIndex={0}
                className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
            >
                <div className="collapse-title text-xl font-medium">
                    What is the purpose of using react-router?
                </div>
                <div className="collapse-content">
                    <p>
                        tabIndex={0} attribute is necessary to make the div
                        focusable
                    </p>
                </div>
            </div>
            <div
                tabIndex={0}
                className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
            >
                <div className="collapse-title text-xl font-medium">
                    How does Context API works?
                </div>
                <div className="collapse-content">
                    <p>
                        tabIndex={0} attribute is necessary to make the div
                        focusable
                    </p>
                </div>
            </div>
            <div
                tabIndex={0}
                className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
            >
                <div className="collapse-title text-xl font-medium">
                    What is React 'useRef' Hook?
                </div>
                <div className="collapse-content">
                    <p>
                        tabIndex={0} attribute is necessary to make the div
                        focusable
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
