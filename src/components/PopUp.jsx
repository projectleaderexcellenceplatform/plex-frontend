import React from "react";
import cross from "../assets/images/icons/cross.svg";

const PopUp = ({ children, setPopUp, title, alert, clientDetails }) => {
	return (
		<div className="pop-up-container">
			<div className="inner-pop-up radius">
				<div
					className={`pop-up-header bg-color7 d-flex ${
						(alert && "justify-content-center") || "justify-content-between"
					} p-3`}
				>
					<p className="f20 color1">{title}</p>
					{!alert && (
						<img
							onClick={() => setPopUp(false)}
							className="pointer"
							src={cross}
							alt=""
						/>
					)}
				</div>
				<div className={`${!clientDetails && "pop-up-body"}`}>{children}</div>
			</div>
		</div>
	);
};

export default PopUp;
