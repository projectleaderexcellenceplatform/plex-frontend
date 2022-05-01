import React from "react";
import search from "../assets/images/icons/search.svg"


const StudentSearch = () => {

    return (
        <div className={"container-fluid student-search-container p-3"}>
            <div className={"row"}>
                    <div className="inp-cont w-100 position-relative">
                        <input
                            type="text"
                            name=""
                            id=""
                            className="w-100 px-3"
                        />
                        <label className="fw500 px-2 color1" htmlFor="">
                            Search student
                        </label>

                        <img className={"search-icon"} src={search} alt={""}/>
                </div>
            </div>

        </div>

    )
}

export default StudentSearch;