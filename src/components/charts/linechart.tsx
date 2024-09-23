import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    CategoryScale,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

interface LineChartProps {
    labels: string[];
    data: number[];
}

const LineChart = ({ labels, data }: LineChartProps) => {
    const chartData = {
        labels,
        datasets: [
            {
                label: "My Data",
                data,
                fill: true,
                backgroundColor: "rgba(117, 73, 255, 0.2)",
                borderColor: "#7549FF",
                borderWidth: 1,
                pointRadius: 0,
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default LineChart;
