import Chart from '../../components/topbar/chart/Chart';
import FeaturedInfo from '../../components/topbar/featuredInfo/FeaturedInfo';
import './home.css';
import { userData } from '../../dummyData';
import WidgetSm from '../../components/topbar/widgetSm/WidgetSm';
import WidgetLg from '../../components/topbar/widgetLg/WidgetLg';

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" grid dataKey={"Active User"}/>
        <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
        </div>
    </div>
  )
}
