import Hero from "../components/Hero";
import Homecard from "../components/Homecard";
import Joblist from "../components/Joblist";
import ViewAllJobs from "../components/ViewAllJobs";

const Home = () => {
	return (
		<>
			<Hero title="成為理想的自己" />
			<Homecard />
			<Joblist isHomePage={true}/>
			<ViewAllJobs />
		</>
	);
};

export default Home;
