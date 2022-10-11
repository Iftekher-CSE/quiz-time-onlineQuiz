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
                    loader: () =>
                        fetch("https://openapi.programming-hero.com/api/quiz"),
                    element: <Home></Home>,
                },
                {
                    path: "/home",
                    loader: () =>
                        fetch("https://openapi.programming-hero.com/api/quiz"),
                    element: <Home></Home>,
                },
                {
                    path: "/quiz/:subID",
                    loader: ({ params }) =>
                        fetch(
                            `https://openapi.programming-hero.com/api/quiz/${params.subID}`
                        ),
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
