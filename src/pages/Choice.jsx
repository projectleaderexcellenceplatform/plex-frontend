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


const Choice = () => {

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