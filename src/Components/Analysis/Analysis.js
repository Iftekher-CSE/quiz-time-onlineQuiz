import React from "react";
import { useContext } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Pie,
    PieChart,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { QuizSubDataContext } from "../Main/Main";

const Analysis = () => {
    const quizData = useContext(QuizSubDataContext);
    console.log(quizData.data);

    return (
        <div className="flex">
            <div className="p-6">
                <BarChart
                    className="bg-yellow-400 rounded-2xl m-6"
                    width={500}
                    height={250}
                    data={quizData.data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="rgb(255 85 0)" />
                </BarChart>
                <h4 className="text-center text-2xl underline">
                    Bar Chart on topic wise total quiz
                </h4>
            </div>
            <div className="p-6">
                <PieChart
                    className="bg-yellow-400 rounded-2xl m-6"
                    width={500}
                    height={250}
                >
                    <Pie
                        data={quizData.data}
                        dataKey="total"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={0}
                        outerRadius={80}
                        fill="rgb(255 85 0)"
                        label
                    />
                    <Tooltip />
                </PieChart>
                <h4 className="text-center text-2xl underline">
                    Pie Chart on topic wise total quiz
                </h4>
            </div>
        </div>
    );
};

export default Analysis;
