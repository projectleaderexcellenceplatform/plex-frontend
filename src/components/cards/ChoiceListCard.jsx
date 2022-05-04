import React from 'react';

import info from "../../assets/images/icons/info.svg"

const ChoiceListCard = () => {

    return (
        <div
            className={"student-card"}>
            <div className="student-card-inner">
                <div className="circle-initials">
                    AW
                </div>
                <div className="student-name">
                        ACH ter Wiel
                </div>

                <div className={"information"}>
                    <img
                        className={"pointer"}
                        src={info}
                        alt={""}
                    />

                    <div className={"d-flex ms-5"}>
                        <div className={"bg-color4 px-2 rounded-3 f14 fw400 color1 me-2"}>
                            S3
                        </div>
                        <div className={"bg-color4 px-2 rounded-3 f14 fw400 color1 me-2"}>
                            Software
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-between align-items-center">

                test
            </div>

        </div>

    )
}
export default ChoiceListCard;