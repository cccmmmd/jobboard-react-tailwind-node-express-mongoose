import jobs from "../jobs.json";
import Job from "./Job";

const Joblist = () => {
	const showJobs = jobs.slice(0, 3);
	return (
		<section className="bg-blue-50 px-4 py-10">
			<div className="container-xl lg:container m-auto">
				<h2 className="text-3xl font-bold text-teal-500 mb-6 text-center">
					熱門職缺
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{showJobs.map((j) => (
						<Job key={j.id} j={j} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Joblist;
