import React from 'react';

import logo from "../../assets/images/logo.svg"
import {useNavigate} from "react-router-dom";

const ChoiceListCard = () => {

    let navigate = useNavigate();

    const routeChange = () => {
        let path = '/choice/1'
        navigate(path);
    }

    return (
        <div
            className={"student-grid"}>
            <div>
                <div className="row">
                    <div className={"circle-initials"}>AW</div>
                    <img className={"picture"} src={logo} alt={""}/>
                </div>
            </div>
        </div>

    )
}
export default ChoiceListCard;