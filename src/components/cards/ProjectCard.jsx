import React from "react";
import blueDelete from "../../assets/images/icons/blueDelete.svg";

const ProjectCard = ({ id, item, deleteToProjectList }) => {
	return (
		<div data-testid={"projectcard"} className="project-Card p-2">
			<style jsx>{`
				.line-limit-2 {
					display: -webkit-box;
					-webkit-line-clamp: 3;
					text-overflow: ellipsis;
					overflow: hidden;
					width: 100%;
					-webkit-box-orient: vertical;
				}
			`}</style>
			<div className="d-flex justify-content-between">
				<div className="number-count color5 f12 d-flex justify-content-center align-items-center px-2 fw600">
					{id + 1}
				</div>
				<img
					src={blueDelete}
					alt=""
					className="pointer"
					onClick={() =>
						deleteToProjectList({
							...item,
							status: false,
						})
					}
				/>
			</div>
			<p className="line-limit-2 f14 fw500 color1 mb-0 mt-3">{item.title}</p>
		</div>
	);
};

export default ProjectCard;
