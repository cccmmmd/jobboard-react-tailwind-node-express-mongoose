import { useEffect, useState } from "react";
import Job from "./Jobcard";
import Spinner from "./Spinner";

const Joblist = ({ isHomePage = false }) => {
	const [jobs, setjobs] = useState([]);
	const [loading, setloading] = useState(true);
	// const showJobs = isHomePage?jobs.slice(0, 3):jobs;

	useEffect(() => {
		const fetchurl = isHomePage? '/api/jobs?_limit=3': '/api/jobs'
		const fetchJobs = async () => {
			try {
				const data = await fetch(fetchurl).then(
					(res) => res.json()
				);

				setjobs(data.sort((a,b) => { return a<b? 1: -1}));
			} catch (error) {
				console.log("Error fetching jobs", error);
			} finally {
				setloading(false);
			}
		};
		fetchJobs();
	}, []);
	return (
		<section className="bg-blue-50 px-4 py-10">
			<div className="container-xl lg:container m-auto">
				<h2 className="text-3xl font-bold text-teal-500 mb-6 text-center">
					{isHomePage ? "熱門職缺" : "所有職缺"}
				</h2>
					{loading ? (
						<Spinner loading={loading} />
					) : (
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{jobs.map((j) => <Job key={j.id} j={j} isHomePage={isHomePage}/>)}
						</div>
					)}
			</div>
		</section>
	);
};

export default Joblist;
