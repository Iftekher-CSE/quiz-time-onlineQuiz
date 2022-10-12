import React from "react";

const Blog = () => {
    return (
        <div className="p-8">
            <h4 className="text-3xl text-center font-bold m-10">
                Question Answer Session
            </h4>
            <div
                tabIndex={0}
                className="collapse collapse-plus border-2 border-orange-500 bg-base-100 rounded-box px-5"
            >
                <div className="collapse-title text-xl font-medium">
                    What is the purpose of using react-router?
                </div>
                <div className="collapse-content">
                    <p>
                        <strong>Routing</strong> is a process in which a user is
                        directed to different pages based on their action or
                        request. <strong>React Router</strong> is a
                        fully-featured client and server-side routing library
                        for React for building user interfaces and routing among
                        them. React Router, and dynamic API, client-side
                        routing, allows developers to build a
                        <strong> single-page</strong> web application with
                        navigation <strong>without the page refreshing </strong>
                        as the user navigates. Without React Router, it is not
                        possible to display multiple views in React
                        applications.
                    </p>
                </div>
            </div>
            <div
                tabIndex={1}
                className="collapse collapse-plus border-2 border-orange-500 bg-base-100 rounded-box px-5"
            >
                <div className="collapse-title text-xl font-medium">
                    How does Context API works?
                </div>
                <div className="collapse-content">
                    <p>
                        The <strong>React Context API</strong> is a way for a
                        React app to effectively produce global variables that
                        can be passed around. This is the alternative to{" "}
                        <strong>"prop drilling"</strong> or moving props from
                        grandparent to child to parent, and so on. <br />
                        <strong>React Context API</strong> creates a global
                        variables and a provider by using{" "}
                        <strong>createContext</strong> function. Provider is a
                        component as it's given names and this provider is used
                        to select which child can access to the global variable
                        created by context. We can pass any kinds of{" "}
                        <strong>value </strong>
                        within provider. Finally all selected components can
                        access the global variable with the given value by using{" "}
                        <strong>useContext</strong> function.
                    </p>
                </div>
            </div>
            <div
                tabIndex={2}
                className="collapse collapse-plus border-2 border-orange-500 bg-base-100 rounded-box px-5"
            >
                <div className="collapse-title text-xl font-medium">
                    What is React 'useRef' Hook?
                </div>
                <div className="collapse-content">
                    <p>
                        The <strong>useRef</strong> is a hook that allows to
                        directly create a reference to the DOM element in the
                        functional component. The <strong>useRef</strong> Hook
                        is a function that returns a <strong>mutable</strong>{" "}
                        ref object whose
                        <strong> .current</strong> property is initialized with
                        the passed argument <strong>(initialValue)</strong>. The
                        returned object will persist for the full lifetime of
                        the component. <br />
                        There are two main uses of useRef. one is
                        <u> Accessing the DOM nodes or React elements</u> and
                        another is
                        <u> keeping a mutable variable</u>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
