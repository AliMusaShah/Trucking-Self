import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels); // Register the datalabels plugin

const PieChart = () => {
    const data = {
        labels: ['Tech Companies', 'Clothing Brands', 'Shoes Brand', 'Restaurants', 'Medical Companies'],
        // labels: labels,

        datasets: [
            {
                data: [25, 13.59, 21.81, 28.99, 10.93],
                // data: values,

                backgroundColor: [
                    '#2F85FE', // Blue
                    '#E2B93B', // Red
                    '#27AE60', // Yellow
                    '#EB5757', // Green
                    '#F97316', // Orange
                ],
                hoverBackgroundColor: [
                    '#2F85FE',
                    '#E2B93B',
                    '#27AE60',
                    '#EB5757',
                    '#F97316',
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    usePointStyle: true,
                },
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.raw}%`;
                    },
                },
            },
            datalabels: {
                display: false,

            },
        },
        cutout: '0%',
    };

    return (
        <div className="bg-white p-6 shadow-md rounded-lg flex flex-col justify-center" style={{ width: '100%', height: '400px' }}>
            <h2 className="text-lg font-bold mb-4">Current Statistic</h2>
            <Pie data={data} options={options} />
        </div>
    );
};
// PieChart.propTypes = {
//     labels: PropTypes.array,
//     values: PropTypes.array,

// };
export default PieChart;
