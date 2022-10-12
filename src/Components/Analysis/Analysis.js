import React from "react";
import { useContext } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { QuizSubDataContext } from "../Main/Main";

const Analysis = () => {
    const quizData = useContext(QuizSubDataContext);
    // console.log(quizData.data);

    return (
        <div className="flex justify-center flex-wrap md:flex-nowrap">
            <div className="p-2">
                <ResponsiveContainer width="80%" height={250}>
                    <BarChart
                        className="bg-yellow-400 rounded-2xl m-6"
                        data={quizData.data}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="rgb(255 85 0)" />
                    </BarChart>
                </ResponsiveContainer>
                <h4 className="text-center text-2xl underline">
                    Bar Chart on topic wise total quiz
                </h4>
            </div>
            <div className="p-2">
                <ResponsiveContainer width="80%" height={250}>
                    <PieChart className="bg-yellow-400 rounded-2xl m-6">
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
                </ResponsiveContainer>
                <h4 className="text-center text-2xl underline">
                    Pie Chart on topic wise total quiz
                </h4>
            </div>
        </div>
    );
};

export default Analysis;
