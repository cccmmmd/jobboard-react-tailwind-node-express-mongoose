import { Outlet } from "react-router-dom";
import Narbar from "../components/Narbar";

const MainLayout = () => {
	return (
		<>
			<Narbar />
			<Outlet />
		</>
	);
};

export default MainLayout;
