import React, {useState, useEffect} from "react";
import axios from "axios";

// IMPORT LAYOUT
import Layout from "../layout";
import avtar2 from "../assets/images/avtar2.svg";

// IMPORTS
import Filters from "../components/Filters";
import StudentListCard from "../components/cards/StudentListCard";

const Student = () => {
    const [activeBtn, setActiveBtn] = useState(0);
    const [activeSort, setActiveSort] = useState(0);
    const [latestProjects, setLatestProjects] = useState([])
    const [choice1, setChoice1] = useState({
        student:
            {
                studentId: 1
            },
        project:
            {
                id: 0
            },
        choice: 0,
    });
    const [choice2, setChoice2] = useState({
        student:
            {
                studentId: 1
            },
        project:
            {
                id: 0
            },
        choice: 0,
    });
    const [choice3, setChoice3] = useState({
        student:
            {
                studentId: 1
            },
        project:
            {
                id: 0
            },
        choice: 0,
    });

    const filterOptions = ["All", "UX/UI", "Code", "Research"];

    const updateProjectId = (id, i) => {
        if (i === 0) {
            setChoice1(prevState => {
                prevState.project.id = (id);
                prevState.choice = (i + 1);
                return ({
                    ...prevState
                })
            })
        }
        if (i === 1) {
            setChoice2(prevState => {
                prevState.project.id = (id);
                prevState.choice = (i + 1);
                return ({
                    ...prevState
                })
            })
        }
        if (i === 2) {
            setChoice3(prevState => {
                prevState.project.id = (id);
                prevState.choice = (i + 1);
                return ({
                    ...prevState
                })
            })
        }
    }

    const submitHandler = () => {
        axios.post('http://localhost:8080/api/v1/student/choice', choice1)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        axios.post('http://localhost:8080/api/v1/student/choice', choice2)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
        axios.post('http://localhost:8080/api/v1/student/choice', choice3)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

    }

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/v1/projectlist/latest")
            .then(res => {
                console.log(res)
                setLatestProjects(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    console.log(choice1)

    return (
        <Layout>
            <div className="student-view">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img src={avtar2} alt=""/>
                        <div className="ms-2">
                            <p className="f14 color1 mb-0">Welcome, Laura</p>
                            <h5 className="color1 fw800">O-PP3-O-PP301</h5>
                        </div>
                    </div>
                    <button
                        onClick={submitHandler}
                        className="bg-color2 px-4 py-3 rounded-10 text-white border-0 fw500">
                        Send My Choice
                    </button>
                </div>

                <div className="bg-color6 py-3 mt-4 rounded-10 px-4 color1 fw500">
                    Choose your <span className="fw700">top 3 project</span> below that
                    you want to work on during the coming semester.
                </div>

                {/* BOTTOM LIST */}
                <div className="mt-4 project-list-b-upper">
                    <Filters
                        activeBtn={activeBtn}
                        setActiveBtn={setActiveBtn}
                        activeSort={activeSort}
                        setActiveSort={setActiveSort}
                        filterOptions={filterOptions}
                    />

                    {/* LIST */}
                    <div className="project-list-b">
                        <div className="row pt-4 gy-4">
                            <div className="col-12 w-100">
                                <div>
                                    {latestProjects
                                        .sort((a, b) => a.id > b.id ? 1 : -1)
                                        .map((item) => {
                                            return (
                                                <StudentListCard project={item} func={updateProjectId}/>
                                            )
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Student;
