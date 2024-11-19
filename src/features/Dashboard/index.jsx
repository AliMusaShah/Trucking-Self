import PieChart from "./components/PieChart"
import DoughnutChart from "./components/DoughnutChart"
import WeekEvent from "./components/WeekEvent"

const Index = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WeekEvent title='This Week&apos;s Events' totalEvent='2' />

            <PieChart />
            <WeekEvent title='Month&apos;s Events' totalEvent='8' />
            <DoughnutChart />

        </div>
    )
}

export default Index