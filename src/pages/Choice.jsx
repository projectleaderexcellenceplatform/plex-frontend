import React, {useState, useEffect} from "react";

// IMPORT LAYOUT
import Layout from "../layout";

// IMPORTS
import StudentSearch from "../components/StudentSearch";

const Choice = () => {
    return (
        <Layout>

            <div className={"inner-right-body"}>
                {/* TOP SEARCH */}
                <StudentSearch/>
            </div>

        </Layout>
    )

}

export default Choice;