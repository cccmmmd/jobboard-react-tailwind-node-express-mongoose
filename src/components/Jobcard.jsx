import { useState } from "react";
import { FaMapMarker } from "react-icons/fa"
import { Link } from "react-router-dom";

const Job = ({ j, isHomePage = false }) => {
	const [showDescription, setshowDescription] = useState(false);

	let des = j.description;

	if (!showDescription) {
		des = des.substring(0, 100) + "...";
		console.log(des);
	}
	return (
		<div className="bg-white rounded-xl shadow-md relative">
			<div className="p-4">
				<div className="mb-6">
					<div className="text-gray-600 my-2">{j.type}</div>
					<h3 className="text-xl font-bold">{j.title}</h3>
				</div>

				<div className="mb-5">{des}</div>
				<button
					onClick={() => setshowDescription((pre) => !pre)}
					className="text-teal-500 mb-5 hover:text-teal-800"
				>
					{showDescription ? "less" : "more"}
				</button>

				<h3 className="text-teal-500 mb-2">{`${j.salary} / 年`}</h3>

				<div className="border border-gray-100 mb-5"></div>

				<div className="flex flex-col lg:flex-row justify-between mb-4">
					<div className="text-orange-700 mb-3">
						<FaMapMarker className='inline text-orange-700 mr-1' />
						{j.location}
					</div>
					<Link
						to={isHomePage? `/jobs/${j.id}`:j.id}
						className="h-[36px] bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-center text-sm"
					>
						瞭解更多
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Job;
