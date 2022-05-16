import React from 'react';

import logo from "../../assets/images/logo.svg"
import {useNavigate} from "react-router-dom";
import info from "../../assets/images/icons/info.svg";

const ChoiceListCard = () => {

    let navigate = useNavigate();

    const routeChange = () => {
        let path = '/choice/1'
        navigate(path);
    }

    return (
        <div className={"student-grid"}>
            <div className="row-up">
                <div className={"circle-initials"}>AW</div>
                <img className={"picture"} src={logo} alt={""}/>
                <div className={"info-container"}>
                    <div className={"choice-status-positive"}/>
                    <img className={"info"} src={info} alt={""}/>
                </div>
            </div>
            <div className={"row-down"}>
                <div className={"student-name"}>
                    ACH ter Wiel
                </div>
                <div className={"project-details"}>
                    <div className={"project-details-inner"}>
                        S3
                    </div>
                    <div className={"project-details-inner"}>
                        Software
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ChoiceListCard;