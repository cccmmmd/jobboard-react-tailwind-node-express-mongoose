import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const Job = () => {
	const [job, setjob] = useState(null);
	const [loading, setloading] = useState(true);
	const { id } = useParams();

	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const data = await fetch(`/api/jobs/${id}`).then((res) =>
					res.json()
				);
				setjob(data);
			} catch (error) {
				console.log("Error fetching jobs", error);
			} finally {
				setloading(false);
			}
		};
		fetchJobs();
	}, []);

	return loading ? <Spinner /> : job.title;
};

export default Job;
