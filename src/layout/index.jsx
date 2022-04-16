import React from "react";

// COMPONENT
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
	return (
		<div className="layout-container">
			<div className="sidebar-container">
				<Sidebar />
			</div>
			<div className="page-body">{children}</div>
		</div>
	);
};

export default Layout;
