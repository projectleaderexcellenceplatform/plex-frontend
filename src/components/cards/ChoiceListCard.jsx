import React from 'react';

import circle from "../../assets/images/circleblue.svg"

const ChoiceListCard = () => {
    return (
        <div
            className={"project-Card_b d-flex justify-content-between align-items-center w-100 shadow rounded-10 px- py-3"}>
            <div className="row align-items-center w-100">
                <div className="col-5">
                    <div className="row align-items-center ps-4">
                        <div className="col-1 bg-color1 initials color4">

                        </div>
                        <div className="col-10 ps-4">
                            <p className="mb-0 f14 color1 fw800">
                                ACH ter Wiel
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChoiceListCard;