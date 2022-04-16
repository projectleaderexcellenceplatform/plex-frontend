import React, { useState } from "react";

// IMPORTS
import PopUp from "../../components/PopUp";

// IMPORTS SVG
import avtar from "../../assets/images/avtar.svg";
import info from "../../assets/images/icons/info.svg";
import greenPlus from "../../assets/images/icons/greenPlus.svg";
import heart from "../../assets/images/icons/heart.svg";
import blueTick from "../../assets/images/icons/blueTick.svg";
import avtar2 from "../../assets/images/icons/avtar.svg";

const CardList = ({ item, addToProjectList }) => {
	const { name, categories, user, likes, created } = item;

	const [popUp2, setPopUp2] = useState(false);

	// MONTHS
	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"June",
		"July",
		"Aug",
		"Sept",
		"Oct",
		"Nov",
		"Dec",
	];

	const year = new Date(created).getFullYear();
	const month = new Date(created).getMonth();
	const day = new Date(created).getDay();

	return (
		<div>
			{/* POP-UP */}
			{(popUp2 && (
				<PopUp title="Project details" setPopUp={setPopUp2} clientDetails>
					<div className="py-4 px-3">
						<div className="d-flex f14 justify-content-between w-100 color1 mb-2">
							<p>Client</p>
							<div className="d-flex">
								<p>
									{user.name} <img className="ms-2" src={avtar2} alt="" />
								</p>
								<p className="ms-4">
									{likes.length} <img className="ms-2" src={heart} alt="" />
								</p>
							</div>
						</div>
						<h5 className="color1 fw700 mb-2">{name}</h5>
						<span className="px-3 py-1 bg-color4 color1 rounded-3 f12 fw500">
							Uploaded on : {day} {months[parseInt(month)]} {year}
						</span>
						<br />
						<br />
						<br />
						<p className="f14 color1 mb-4 fw500">
							The three projects we created from scratch are: the design and
							development of the new Solar Team TU/E website, the design and
							development of the infotainment system and last but not least the
							design and development of the dashboard.
							<br />
							<br />
							Where the infotainment system would be used to give the driver
							various forms of information as well as the standard infotainment
							functions for example radio. The dashboard will contain the
							driving essential information.
						</p>
						<div className="color1">
							<h5 className="fw600">External Link</h5>
							<p className="f14">
								https://deltafhict.nl/project/delta-x-solar-team-eindhoven/
							</p>
						</div>
					</div>
				</PopUp>
			)) ||
				""}
			{/* POP-UP */}

			<div className="project-Card_b d-flex justify-content-between align-items-center w-100 shadow rounded-3 px-3 py-3">
				<div className="row align-items-center w-100">
					<div className="col-5">
						<div className="row align-items-center">
							<div className="col-2">
								<img className="w-100 shadow-sm p-2" src={avtar} alt="" />
							</div>
							<div className="col-10 ps-0">
								<p className="mb-0 f18 color1 fw600">{name}</p>
							</div>
						</div>
					</div>
					<div className="border-start border-2 col-7">
						<div className="d-flex">
							<img
								onClick={() => setPopUp2(true)}
								className="pointer"
								src={info}
								alt=""
							/>

							{(categories.length && (
								<div className="d-flex ms-2">
									{categories.map((item, index) => {
										const { name } = item;
										return (
											<div
												key={index}
												className="bg-color4 px-2 rounded-3 f14 fw600 color1 me-2"
											>
												{name}
											</div>
										);
									})}
								</div>
							)) ||
								""}
						</div>
					</div>
				</div>

				<div className="d-flex justify-content-between align-items-center">
					<div>
						{(!item.status && (
							<img
								onClick={() => {
									addToProjectList(item);
								}}
								className="pointer"
								src={greenPlus}
								alt=""
							/>
						)) || <img className="pointer" src={blueTick} alt="" />}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardList;
