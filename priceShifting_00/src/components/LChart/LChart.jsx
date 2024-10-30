import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend} from 'recharts';
import {useEffect, useState} from "react";

const LChart = () => {
    const [students, setStudents] = useState([])
    useEffect(() => {
        fetch("./student.json")
            .then(res => res.json())
            .then(data => setStudents(data))
    }, []);
    console.log(students)

    return (
        <div>
            <p>students data</p>
            <LineChart width={600} height={400} data={students}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Line dataKey={"Math"} stroke={"red"}></Line>
                <Line dataKey={"Biology"} stroke={"green"}></Line>
            </LineChart>
        </div>
    );
};

export default LChart;