import React, {useState, useEffect} from "react";

// IMPORT LAYOUT
import Layout from "../layout";

// IMPORTS
import StudentSearch from "../components/StudentSearch";
import Filters from "../components/Filters";
import StudentDetailsCard from "../components/cards/StudentDetailsCard";
import StudentSearchSendDetails from "../components/StudentSearchSendDetails";

const Choice = () => {
    const [activeBtn, setActiveBtn] = useState(0);
    const [activeSort, setActiveSort] = useState(0);
    const [latestProjects, setLatestProjects] = useState([])
    const filterOptions = ["All", "UX/UI", "Code", "Research"]

    return (
        <Layout>

            <div className={"inner-right-body"}>
                {/* TOP SEARCH */}
                <StudentSearchSendDetails/>
            </div>

            {/* FILTER */}
            <div>
                <Filters
                    activeBtn={activeBtn}
                    setActiveBtn={setActiveBtn}
                    activeSort={activeSort}
                    setActiveSort={setActiveSort}
                    filterOptions={filterOptions}></Filters>
            </div>

            {/* LIST */}
            <div className={"inner-right-body"}>
                <div className={"student-list-container"}>
                    <div className={"row pt-4 gy-4"}>
                        <div className={"col-12 w-100"}>
                            <StudentDetailsCard/>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )

}

export default Choice;