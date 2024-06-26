import Card from "./Card";
import { Link } from "react-router-dom";

const Homecard = () => {
	return (
		<section className="py-4">
			<div className="container-xl lg:container m-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
					<Card>
						<h2 className="text-2xl font-bold">給開發者</h2>
						<p className="mt-2 mb-4">你的工作在等你，開始找吧！</p>
						<Link
							to="/jobs"
							className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
						>
							瀏覽職缺
						</Link>
					</Card>
					<Card bg={"bg-teal-100"}>
						<h2 className="text-2xl font-bold">給雇主</h2>
						<p className="mt-2 mb-4">
							列出你的職缺，讓初中級高手來競爭！
						</p>
						<Link
							to="/add-job"
							className="inline-block bg-teal-500 text-white rounded-lg px-4 py-2 hover:bg-teal-600"
						>
							新增工作
						</Link>
					</Card>
				</div>
			</div>
		</section>
	);
};

export default Homecard;
