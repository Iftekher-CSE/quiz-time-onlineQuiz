import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Main/Main";
import Home from "./Components/Home/Home";
import Quiz from "./Components/Quiz/Quiz";
import Blog from "./Components/Blog/Blog";
import Analysis from "./Components/Analysis/Analysis";
import Page404 from "./Components/Page404/Page404";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>,
                },
                {
                    path: "/home",
                    element: <Home></Home>,
                },
                {
                    path: "/quiz/:subID",
                    element: <Quiz></Quiz>,
                },
                {
                    path: "/blog",
                    element: <Blog></Blog>,
                },
                {
                    path: "/analysis",
                    element: <Analysis></Analysis>,
                },
            ],
        },
        {
            path: "*",
            element: <Page404></Page404>,
        },
    ]);
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
