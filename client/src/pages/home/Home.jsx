import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.scss";
import List from "../../components/list/List";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = ({ type }) => {
	const [lists, setLists] = useState([]);
	const [genre, setGenre] = useState(null);

	useEffect(() => {
		const getRandomLists = async () => {
			try {
				const res = await axios.get(
					`lists${type ? "?type=" + type : ""}${
						genre ? "&genre=" + genre : ""
					}`,
					{
						headers: {
							token:
								"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZDNjZGYzZTZhMDgxODM3NDBiOWUxNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTUzMzA1NiwiZXhwIjoxNjQxOTY1MDU2fQ.VJSupY17Xq3sQdvs7mtUW7ZH6WL5gVf0BznO-qKl4e4",
						},
					}
				);
				setLists(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		getRandomLists();
	}, [type, genre]);

	return (
		<div className="home">
			<Navbar />
			<Featured type={type} />
			{lists.map((list) => (
				<List list={list} key={list._id} />
			))}
		</div>
	);
};

export default Home;
