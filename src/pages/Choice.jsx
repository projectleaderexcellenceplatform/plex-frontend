import React, {useState, useEffect} from "react";

// IMPORT LAYOUT
import Layout from "../layout";

// IMPORTS
import StudentSearch from "../components/StudentSearch";
import Filters from "../components/Filters";
import CardList from "../components/cards/CardList";
import ChoiceListCard from "../components/cards/ChoiceListCard";


const Choice = () => {

    const [activeBtn, setActiveBtn] = useState(0);
    const [activeSort, setActiveSort] = useState(0);

    const tagFilters = ["All", "UX/UI", "Code", "Research"];


    return (
        <Layout>

            <div className={"inner-right-body"}>
                {/* TOP SEARCH */}
                <StudentSearch/>
            </div>

            {/* FILTER */}
            <div className={"mt-4 project-list-b-upper"}>
                <Filters></Filters>
            </div>

            {/* LIST */}
            <div className={"project-list-b"}>
                <div className={"row pt-4 gy-4"}>
                    <div className={"col-12 w-100"}>
                        <ChoiceListCard/>
                    </div>
                </div>
            </div>


        </Layout>
    )

}

export default Choice;