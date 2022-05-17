import React from "react";
import search from "../assets/images/icons/search.svg"

import studentSent from "../assets/images/icons/studentSent.svg"


const StudentSearch = () => {

    return (
        <div className={"student-search-container-send-details"}>
            <div className={"row"}>
                <div className="inp-cont">
                    <input
                        type="text"
                        name=""
                        id=""
                        className="w-100 px-3"
                    />
                    <label className="" htmlFor="">
                        Search student
                    </label>

                    <img className={"search-icon"} src={search} alt={""}/>
                </div>

                <div className={"send-details"}>
                    <img src={studentSent} alt={""}/>
                    <div className={"send-details-card"}>
                        Sent on: 25-11-2021 at 12:38pm
                    </div>
                </div>
            </div>

        </div>

    )
}

// fw500 px-2 color1

export default StudentSearch;