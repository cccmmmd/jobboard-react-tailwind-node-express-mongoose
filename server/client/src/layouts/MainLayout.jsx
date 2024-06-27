import { Outlet } from "react-router-dom";
import Narbar from "../components/Narbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
	return (
		<>
			<Narbar />
			<Outlet />
			<ToastContainer />
		</>
	);
};

export default MainLayout;
