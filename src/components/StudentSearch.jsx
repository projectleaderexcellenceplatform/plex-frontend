import React from "react";
import search from "../assets/images/icons/search.svg"


const StudentSearch = () => {

    return (
        <div className={"student-search-container"}>
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
            </div>

        </div>

    )
}

// fw500 px-2 color1

export default StudentSearch;