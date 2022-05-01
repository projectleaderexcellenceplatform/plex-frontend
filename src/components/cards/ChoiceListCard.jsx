import React from 'react';

import circle from "../../assets/images/circleblue.svg"
import info from "../../assets/images/icons/info.svg"

const ChoiceListCard = () => {
    return (
        <div
            className={"project-Card_b d-flex justify-content-between align-items-center w-100 shadow rounded-10 px- py-3"}>
            <div className="row align-items-center w-100">
                <div className="col-5">
                    <div className="row align-items-center ps-4">
                        <div className="col-2">
                            <img src={circle} alt={""}/>
                        </div>
                        <div className="col-10 ps-4">
                            <p className="mb-0 f14 color1 fw800">
                                ACH ter Wiel
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"border-start border-2 col-2"}>
                    <div className={"d-flex ms-4"}>
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
            </div>

            <div className="d-flex justify-content-between align-items-center">

            test
            </div>

        </div>
    )
}
export default ChoiceListCard;