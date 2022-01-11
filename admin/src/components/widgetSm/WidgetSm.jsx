import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
	const [newUsers, setNewUsers] = useState([]);

	useEffect(() => {
		const getNewUsers = async () => {
			try {
				const res = await axios.get("/users?new=true", {
					headers: {
						token:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDNjZGYzZTZhMDgxODM3NDBiOWUxNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTUxOTc3NywiZXhwIjoxNjQxOTUxNzc3fQ.iDIog6769cts00NMNAJ129o7GGqWpLKavmfkgjQdkGA",
					},
				});
				setNewUsers(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getNewUsers();
	}, []);

	return (
		<div className="widgetSm">
			<span className="widgetSmTitle">New Join Members</span>
			<ul className="widgetSmList">
				{newUsers.map((user) => (
					<li className="widgetSmListItem">
						<img
							src={
								user.profilePic ||
								"https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg"
							}
							alt=""
							className="widgetSmImg"
						/>
						<div className="widgetSmUser">
							<span className="widgetSmUsername">{user.username}</span>
						</div>
						<button className="widgetSmButton">
							<Visibility className="widgetSmIcon" />
							Display
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
