import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import i1 from "../assets/images/nav_icons/i1.svg";
import i2 from "../assets/images/nav_icons/i2.svg";
import i3 from "../assets/images/nav_icons/i3.svg";
import i4 from "../assets/images/nav_icons/i4.svg";

// ACTIVE NAV
import a_i1 from "../assets/images/active_nav/i1.svg";
import a_i2 from "../assets/images/active_nav/i2.svg";
import a_i3 from "../assets/images/active_nav/i3.svg";
import a_i4 from "../assets/images/active_nav/i4.svg";

const Sidebar = () => {
	const pathname = window.location.pathname;

	const navigations = [
		{
			image: i1,
			imageA: a_i1,
			link: "/project_list",
			tooltipText: "New project list",
		},
		{
			image: i2,
			imageA: a_i2,
			link: "/",
			tooltipText: "My Dashboard",
		},
		{
			image: i3,
			imageA: a_i3,
			link: "/setting",
			tooltipText: "Settings",
		},
		{
			image: i4,
			imageA: a_i4,
			link: "/student",
			tooltipText: "Hi, Student",
		},
	];

	return (
		<div className="sidebar-inner-container">
			<img src={logo} alt="" className="w-100" />

			<div className="navigation">
				<ul className={`py-2`}>
					{navigations.map((item, i) => {
						return (
							<li
								className={`${
									(pathname === item.link && "activeClass") || ""
								} single-nav`}
							>
								<NavLink to={navigations[i].link}>
									<div className="text-center w-100" key={i}>
										<span class="title"></span>
										{(pathname === item.link && (
											<img src={item.imageA} alt="" />
										)) || <img src={item.image} alt="" />}
										<span class="title"></span>
									</div>
								</NavLink>

								<span className="tooltiptext color1 f12 fw600 py-3">
									{item.tooltipText}

									<div className="tria-cont"></div>
								</span>
							</li>
						);
					})}
				</ul>
			</div>

			{/* <ul className={`side-bg position-relative py-2 mt-3`}>
				{navigations.map((item, i) => {
					return (
						<li
						// onClick={() => navigate(navigations[i].link)}
						// className={`${pathname === item.link && "active_nav"} ${
						// 	pathname === "/setting" && "active-nav2"
						// } w-100 d-flex justify-content-center pointer single-nav`}
						>
							<NavLink to={navigations[i].link}>
								<div className="text-center w-100" key={i}>
									{(pathname === item.link && (
										<img src={item.imageA} alt="" />
									)) || <img src={item.image} alt="" />}
								</div>
								<span className="tooltiptext color1 f12 fw600 py-3">
									{item.tooltipText}

									<div className="tria-cont"></div>
								</span>
							</NavLink>
						</li>
					);
				})}

				<div className="version-text f10 text-white">V.1.0</div>

				<div className="side-bg"></div>
			</ul> */}
		</div>
	);
};

export default Sidebar;

// ${
// 	(pathname == "/" && "mt-2") ||
// 	(pathname == "/dashboard" && "mt3-dashboard") ||
// 	(pathname == "/setting" && "mt3-setting") ||
// 	(pathname == "/student" && "")
// }
