import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import NotFound from "./pages/NotFound";
import Job, { jobLoader } from "./pages/Jobdetail";
import AddJob from "./pages/AddJob";

const App = () => {

	const addJob = async(newJob) => {
		const res = await fetch('/api/jobs', {
			method: 'POST',
			body: JSON.stringify(newJob),
			headers: {'Content-Type': 'appliction/json',},
		})
		if(res.error){
			console.log(res.error)
		}
	}

	const deleteJob = async(id) => {
		const res = await fetch(`/api/jobs/${id}`, {
			method: 'DELETE',
		})
		if(res.error){
			console.log(res.error)
		}
	}
	
	
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="/jobs" element={<Jobs />} />
				<Route path="/jobs/:id" element={<Job deleteJob={deleteJob} />}  loader={jobLoader}/>
				<Route path="/add-job" element={<AddJob addJobFunc={addJob}/>} />
				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
