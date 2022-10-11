import React from "react";

const Blog = () => {
    return (
        <div className="p-8">
            <h4 className="text-3xl text-center font-bold mb-4">
                Question Answer Session
            </h4>
            <div
                tabIndex={0}
                className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
            >
                <div className="collapse-title text-xl font-medium">
                    Focus me to see content
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
