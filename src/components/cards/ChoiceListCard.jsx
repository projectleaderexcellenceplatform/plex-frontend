import React from 'react';

import info from "../../assets/images/icons/info.svg"
import {useNavigate} from "react-router-dom";

const ChoiceListCard = () => {

    let navigate = useNavigate();

    const routeChange = () => {
        let path = '/choice/1'
        navigate(path);
    }

    return (
        <div
            onClick={routeChange}
            className={"student-card"}>
            <div className="student-card-inner">
                <div className="circle-initials">
                    AW
                </div>
                <div className="student-name">
                    ACH ter Wiel
                </div>

                <div className={"vertical-line"}>
                    <div className={"information"}>
                        <img
                            className={"pointer"}
                            src={info}
                            alt={""}
                        />

                        <div className={"student-details"}>
                            <div className={"student-details-inner"}>
                                S3
                            </div>
                            <div className={"student-details-inner"}>
                                Software
                            </div>
                        </div>
                    </div>
                </div>
                <div className="choice-status-positive">

                </div>
            </div>
        </div>

    )
}
export default ChoiceListCard;