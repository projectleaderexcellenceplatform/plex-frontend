import React, { useEffect, useState } from "react";

// IMPORT LAYOUT
import Layout from "../layout";

// IMPORT REDUX
import {
	projectListApi,
	addToProjectList,
	deleteToProjectList,
} from "../redux/action";

// IMPORTS
import Filters from "../components/Filters";
import CardGrid from "../components/cards/CardGrid";
import CardList from "../components/cards/CardList";
import ProjectListDisplay from "../components/ProjectListDisplay";
import PopUp from "../components/PopUp";

// SVG ICONS
import saved from "../assets/images/icons/saved.svg";
import { connect } from "react-redux";

const ProjectList = ({
	prodjectList,
	projectListApi,
	addToProjectList,
	deleteToProjectList,
}) => {
	// API CALL
	useEffect(() => {
		projectListApi();
	}, []);

	const [filterSelect, setFilterSelect] = useState();
	const [popUp, setPopUp] = useState(false);
	const [popUp3, setPopUp3] = useState(false);

	const [activeBtn, setActiveBtn] = useState(0);
	const [activeSort, setActiveSort] = useState(0);

	const tagFilters = ["All", "UX/UI", "Code", "Research"];

	if (popUp3) {
		setTimeout(() => {
			setPopUp3(false);
		}, 1000);
	}

	// FILTER METHOD TO SORT
	let filteredData = [];
	prodjectList.length &&
		prodjectList.map((item) =>
			item.categories.filter((item2) => {
				if (activeBtn === 3) {
					if (item2.name !== "UX/UI" && item2.name !== "Code") {
						filteredData.push(item);
					}
				} else if (item2.name === tagFilters[activeBtn] && activeBtn !== 3) {
					filteredData.push(item);
				} else if (activeBtn === 0) {
					filteredData.push(item);
				}
			})
		);

	// DROP DOWN FILTERS
	if (filterSelect === "1") {
		filteredData.sort((a, b) => b.likes.length - a.likes.length);
	} else if (filterSelect === "2") {
		filteredData.sort((a, b) => a.name.localeCompare(b.name));
	} else if (filterSelect === "3") {
		filteredData.sort((a, b) => new Date(a.created) - new Date(b.created));
	} else if (filterSelect === "4") {
		filteredData.sort((a, b) => new Date(a.updated) - new Date(b.updated));
	}

	// HANDLE CHANGE FILTERS
	const handleChange = (e) => {
		setFilterSelect(e.target.value);
	};

	// UPDATED SELECTED CARDS
	const updateSelectedCard = (data) => {
		addToProjectList({
			...data,
			status: true,
		});
	};

	return (
		<Layout>
			{/* POP-UP */}
			{(popUp && (
				<PopUp title="That`s too bad" setPopUp={setPopUp}>
					<div className="d-flex flex-column justify-content-center align-items-center">
						<p className="color1 text-center fw500">
							Your project list has not been saved yet, are you sure you want to
							delete the list?
						</p>
						<div className="d-flex mt-5">
							<button className="bg-color3 px-4 py-2 radius border-0 text-white fw600">
								Delete project list
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
			)) ||
				""}
			{/* POP-UP */}

			{/* POP-UP */}
			{(popUp3 && (
				<PopUp title="Project list saved!" setPopUp={setPopUp3} alert>
					<div className="d-flex flex-column justify-content-center align-items-center">
						<img src={saved} alt="" />
						<h4 className="fw700 text-decoration-line-through color1 mt-4">
							O-PP3-O-PP301
						</h4>
					</div>
				</PopUp>
			)) ||
				""}
			{/* POP-UP */}

			<div className="inner-right-body">
				{/* TOP SEARCH AND LIST */}
				<ProjectListDisplay
					setPopUp={setPopUp}
					setPopUp3={setPopUp3}
					selectedProjectList={prodjectList}
					deleteToProjectList={deleteToProjectList}
				/>

				{/* BOTTOM LIST */}
				<div className="mt-5 project-list-b-upper">
					<Filters
						activeBtn={activeBtn}
						setActiveBtn={setActiveBtn}
						activeSort={activeSort}
						setActiveSort={setActiveSort}
						handleChange={handleChange}
					/>

					{/* LIST */}
					<div className="project-list-b">
						{(activeSort === 0 && (
							<div className="row pt-4 gy-4">
								{filteredData.map((item, i) => {
									return (
										<div key={i} className="col-3">
											<CardGrid
												item={item}
												addToProjectList={updateSelectedCard}
											/>
										</div>
									);
								})}
							</div>
						)) || (
							<div className="row pt-4 gy-4">
								{filteredData.map((item, i) => {
									return (
										<div key={i} className="col-12 w-100">
											<CardList
												item={item}
												addToProjectList={updateSelectedCard}
											/>
										</div>
									);
								})}
							</div>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
};

const mapStatetoProps = (state) => {
	return {
		prodjectList: state.prodjectListRed.prodjectList,
		selectedProjectList: state.prodjectListRed.selectedProjectList,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		projectListApi: function () {
			dispatch(projectListApi());
		},
		addToProjectList: function (data) {
			dispatch(addToProjectList(data));
		},
		deleteToProjectList: function (id) {
			dispatch(deleteToProjectList(id));
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(ProjectList);
