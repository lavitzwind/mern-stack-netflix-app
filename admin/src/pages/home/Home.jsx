import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useState, useEffect, useMemo } from "react";
import axios from "axios";

const Home = () => {
	const MONTHS = useMemo(
		() => [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Ago",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		[]
	);

	const [userStats, setUserStats] = useState([]);

	useEffect(() => {
		const getStats = async () => {
			try {
				const res = await axios.get("/users/stats", {
					headers: {
						token:
							"Bearer Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDNjZGYzZTZhMDgxODM3NDBiOWUxNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTUxOTc3NywiZXhwIjoxNjQxOTUxNzc3fQ.iDIog6769cts00NMNAJ129o7GGqWpLKavmfkgjQdkGA",
					},
				});
				const statsList = res.data.sort(function (a, b) {
					return a._id - b._id;
				});
				statsList.map((item) =>
					setUserStats((prev) => [
						...prev,
						{ name: MONTHS[item._id - 1], "New User": item.total },
					])
				);
			} catch (err) {
				console.log(err);
			}
		};
		getStats();
	}, [MONTHS]);

	return (
		<div className="home">
			<FeaturedInfo />
			<Chart data={userStats} title="User Analytics" grid dataKey="New User" />
			<div className="homeWidget">
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
};

export default Home;
