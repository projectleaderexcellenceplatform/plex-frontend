import React from 'react';

import info from "../../assets/images/icons/info.svg"
import plex from "../../assets/images/logo.svg"
import group from "../../assets/images/icons/group.svg"

const ChoiceListCard = () => {

    return (
        <div
            className={"student-card-details"}>
            <div className="student-card-inner">
                <img className={"project-image"} src={plex} alt={""}/>
                <div className="project-name">
                    Delta X Solar Team Eindhoven
                </div>

                <div className={"vertical-line"}>
                    <div className={"information"}>
                        <img
                            className={"pointer"}
                            src={info}
                            alt={""}
                        />

                        <div className={"project-details"}>
                            <div className={"project-details-inner"}>
                                UX/UI
                            </div>
                            <div className={"project-details-inner"}>
                                Software
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"group-details"}>
                    2/4
                    <img className={"group-details-icon"} src={group} alt={""}/>
                </div>

                <div className={"priority"}>
                    1
                </div>
            </div>
        </div>

    )
}
export default ChoiceListCard;