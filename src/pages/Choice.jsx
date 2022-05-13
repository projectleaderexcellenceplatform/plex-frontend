import React, {useState, useEffect} from "react";

// IMPORT LAYOUT
import Layout from "../layout";

// IMPORTS
import StudentSearch from "../components/StudentSearch";
import Filters from "../components/Filters";
import CardList from "../components/cards/CardList";
import ChoiceListCard from "../components/cards/ChoiceListCard";
import axios from "axios";
import StudentListCard from "../components/cards/StudentListCard";
import ChoiceListGrid from "../components/cards/ChoiceListGrid";


const Choice = () => {
    const [activeBtn, setActiveBtn] = useState(0);
    const [activeSort, setActiveSort] = useState(0);
    const [latestProjects, setLatestProjects] = useState([])
    const filterOptions = ["S3", "S4", "S5"]

    return (
        <Layout>

            {/* TOP SEARCH */}
            <div className={"student-search-container"}>
                <StudentSearch/>
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

                <div className={"student-list-container"}>
                    {/*    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => {*/}
                    {/*        return (*/}
                    {/*            <div className={"col-3"}>*/}
                    {/*                <ChoiceListGrid/>*/}
                    {/*            </div>*/}
                    {/*        )*/}
                    {/*    })}*/}

                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => {
                        return (
                            <ChoiceListCard/>
                        )
                    })}
                </div>
            {/*</div>*/}
        </Layout>
    )

}

export default Choice;