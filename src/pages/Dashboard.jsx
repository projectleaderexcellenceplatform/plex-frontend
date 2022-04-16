import React, { useState, useEffect } from "react";
import axios from "axios";

// IMPORT LAYOUT
import Layout from "../layout";

// IMPORT IMAGES
import i1 from "../assets/images/project_list/i1.PNG";
import stack from "../assets/images/icons/stack.svg";
import degree from "../assets/images/icons/degree.svg";
import hand from "../assets/images/icons/hand.svg";
import cry from "../assets/images/icons/cry.svg";
import sent from "../assets/images/icons/sent.svg";
import message from "../assets/images/icons/message.svg";
import plus from "../assets/images/icons/plus.svg";
import smallArrow from "../assets/images/icons/smallArrow.svg";
import blueDelete from "../assets/images/icons/blueDelete.svg";
import rightArrow from "../assets/images/icons/rightArrow.svg";
import leftArrow from "../assets/images/icons/leftArrow.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

// IMPORT COMPONENTS
import ProjectListCard from "../components/cards/ProjectListCard";
import PopUp from "../components/PopUp";

const Dashboard = () => {
	const [popUp, setPopUp] = useState(false);
	const [popUp2, setPopUp2] = useState(false);
	const [popUp3, setPopUp3] = useState(false);
	const [projectSent, setProjectSent] = useState(true);
	const [showProjects, setShowProjects] = useState(false)
	const [projectList, setProjectList] = useState([]);
	const [projects, setProjects] = useState([]);

	const value = 0.66;

	const [activeTab, setActiveTab] = useState(0);


	if (popUp2) {
		setTimeout(() => {
			setPopUp2(false);
		}, 1000);
	}

	if (popUp3) {
		setTimeout(() => {
			setPopUp3(false);
			setProjectSent(false);
		}, 1000);
	}

	useEffect(() => {
		axios
			.get('http://localhost:8080/api/v1/projectlist')
			.then(res => {
				console.log(res)
				setProjectList(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])


	function handleFetchProjectsOfProjectlist(i) {
		axios
			.get(`http://localhost:8080/api/v1/projectlist/${i}`)
			.then(res => {
				console.log(res)
				setProjects(res.data.projects)
			})
			.catch(err => {
				console.log(err)
			})
	}


	return (
		<Layout>
			{/* POP-UP */}
			{popUp && (
				<PopUp title="Ready for launch" setPopUp={setPopUp}>
					<div className="d-flex flex-column justify-content-center align-items-center">
						<img src={hand} alt="" />
						<p className="color1 py-3">
							You are about to send a project list to:{" "}
						</p>
						<h4 className="fw700 color1 mb-4">O-PP3-O-PP301</h4>
						<div className="d-flex">
							<button
								onClick={() => {
									setPopUp3(true);
									setPopUp(false);
								}}
								className="bg-color2 px-4 py-2 radius border-0 text-white fw600"
							>
								Send now
							</button>
							<button
								onClick={() => setPopUp(false)}
								className="ms-4 color1 border-0 bg-transparent text-decoration-underline"
							>
								Cancel
							</button>
						</div>
					</div>
				</PopUp>
			)}
			{/* POP-UP */}

			{/* POP-UP 2 */}
			{(popUp2 && (
				<PopUp title="Project list deleted!" setPopUp={setPopUp2} alert>
					<div className="d-flex flex-column justify-content-center align-items-center">
						<img src={cry} alt="" />
						<h4 className="fw700 text-decoration-line-through color1 mt-4">
							O-PP3-O-PP301
						</h4>
					</div>
				</PopUp>
			)) ||
				""}
			{/* POP-UP 2 */}

			{/* POP-UP 2 */}
			{(popUp3 && (
				<PopUp title="Project list sent!" setPopUp={setPopUp2} alert>
					<div className="d-flex flex-column justify-content-center align-items-center">
						<img src={sent} alt="" />
						<h4 className="fw700 color1 mt-4">O-PP3-O-PP301</h4>
					</div>
				</PopUp>
			)) ||
				""}
			{/* POP-UP 2 */}

			<div className="row dashboard-container">
				<div className="col-3">
					<div className="bg-white p-3 rounded-10 shadow-sm">
						<button className="w-100 bg-color2 border-0 rounded-10 py-3 text-white f18 fw600 d-flex align-items-center justify-content-center">
							<img src={plus} alt="" />{" "}
							<div className="ms-2">New project list</div>
						</button>

						<div className="mt-5">
							<p className="mb-1 f14 fw400">Overview</p>
							<h4 className="fw700 color1">My Project Lists</h4>
						</div>

						<div className="row mt-3 gy-3">
							{projectList
								.sort((a, b) => a.id > b.id ? 1 : -1)
								.map((item, i) => {
								return (
									<div
										onClick={() => {
											setActiveTab(i)
											handleFetchProjectsOfProjectlist(i + 1);
											setShowProjects(true);
										}}
										key={i}
										className="col-12 pointer"
									>
										<div
											className={`${
												activeTab === i && "bg-color4"
											} shadow-sm rounded-10 px-3 py-2`}
										>
											<div className="row">
												<div className="col-3">
													<img
														className="w-100 rounded-10"
														src={item.image}
														alt=""
													/>
												</div>
												<div className="col-9 px-0">
													<div className="d-flex justify-content-between w-100">
														<div>
															<p className="color1 mb-0 mt-1 f16 fw600">
																{item.title}
															</p>
															<p className="color1 f14 mb-0 ">{item.subtitle}</p>
														</div>
														<div className="align-self-end">
															{activeTab === i && (
																<img src={smallArrow} alt="" className="me-2" />
															)}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className="col-9">
					<div className="bg-white p-3 rounded-10 shadow-sm">
						<div className="d-flex justify-content-between align-items-center">
							<div
								onClick={() => setPopUp2(true)}
								className="d-flex align-items-center pointer"
							>
								<img src={blueDelete} alt="" />
								<p className="mb-0 ms-2 f14 fw500 color1">
									Delete project list
								</p>
							</div>
							<div>
								{(projectSent && (
									<button
										onClick={() => setPopUp(true)}
										className="px-4 py-3 rounded-10 bg-color1 border-0 text-white f14 fw600"
									>
										Send project list
									</button>
								)) || (
									<div className="d-flex color1">
										<div className="bg-color7 p-2 radius d-flex justify-content-center align-items-center">
											<img src={message} alt="" />
										</div>
										<div className="py-2 px-3 bg-color4 ms-3 radius">
											<p className="fw500 f14">Sent on:</p>
											<h6 className="fw700 mb-0 f16">25-11-2021 at 12:38 pm</h6>
										</div>
									</div>
								)}
							</div>
						</div>

						{/* BOTTOM PART */}
						<div className="mt-5">
							<div className="color1 d-flex justify-content-between">
								<div>
									<p className="mb-1 f14 fw400">Project list name</p>
									<h4 className="fw700">O-PP3-O-PP301</h4>
									<div className="mt-5 d-flex">
										<div className="d-flex">
											<img src={stack} alt="" />
											<div className="ms-3">
												<p className="f14 mb-0 fw500">Projects</p>
												<p className="f14 mb-0 fw700">0</p>
											</div>
										</div>
										<div className="d-flex ms-5">
											<img src={degree} alt="" />
											<div className="ms-3">
												<p className="f14 mb-0 fw500">Students</p>
												<p className="f14 mb-0 fw700">0</p>
											</div>
										</div>
									</div>
								</div>

								<div style={{ width: 120, height: 120 }}>
									<CircularProgressbar
										value={value}
										maxValue={1}
										text={`${value * 100}%`}
										styles={buildStyles({
											trailColor: "#ECEEF2",
											pathColor: `rgba(32, 173, 122, ${66 / 100})`,
											textColor: "#1f1d59",
										})}
										strokeWidth={11}
									/>
								</div>
							</div>

							<div className="row gy-4 mt-4">
								{showProjects && <ProjectListCard project={projects}/>}
							</div>
						</div>

						<div className="pagination-container d-flex mt-4">
							<button className="px-3 py-3 bg-color1 border-0 rounded-10">
								<img src={leftArrow} alt="" />
							</button>

							<div className="center-part d-flex pointer mx-4">
								{[1, 1, 1].map((item, i) => {
									return (
										<div
											className="px-3 py-1 d-flex justify-content-center align-items-center h-100 w-100 mb-0"
											key={i}
										>
											{i + 1}
										</div>
									);
								})}
							</div>

							<button className="px-3 py-3 bg-color1 border-0 rounded-10">
								<img src={rightArrow} alt="" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Dashboard;
