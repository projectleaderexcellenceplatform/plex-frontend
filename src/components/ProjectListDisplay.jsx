import React, {useState} from "react";
import disk from "../assets/images/icons/disk.svg";
import deleteIcon from "../assets/images/icons/delete.svg";
import edit from "../assets/images/icons/edit.svg";
import ProjectCard from "./cards/ProjectCard";
import axios from "axios";

const ProjectListDisplay = ({
                                setPopUp,
                                setPopUp3,
                                setPopUp4,
                                selectedProjectList,
                                deleteToProjectList,
                            }) => {
    let filterSelectedData = selectedProjectList.filter(
        (item) => item.status === true
    );


    const [projectlistName, setProjectlistname] = useState();
    const [projectIds, setProjectIds] = useState([])
    const completeProjectlist = (
        {
            "title": projectlistName,
            "projects": projectIds
        }
    );

    const addProjectIds = () => {
        filterSelectedData.map((item, i) => {
            projectIds.push({id: item.id})
        })
    }

    //TODO ifempty
    const submitHandler = () => {
            axios.post('http://localhost:8080/api/v1/projectlist/add', completeProjectlist)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
        }

    console.log(completeProjectlist)

    return (
        <div className="container-fluid project-list-container p-3">
            <div className="row">
                <div className="col-8">
                    <div className="inp-cont w-100 position-relative">
                        <input
                            placeholder="O-PP3-O-PP301"
                            type="text"
                            name=""
                            id=""
                            className="w-100 px-3"
                            onInput={e => setProjectlistname(e.target.value)}
                        />
                        <label className="fw500 px-2 color1" htmlFor="">
                            Project list Name
                        </label>

                        <img className="edit-icon" src={edit} alt=""/>
                    </div>
                </div>
                <div className="col-4">
                    <div className="d-flex">
                        <button
                            onClick={() => {
                                addProjectIds()
                                if (!projectlistName || completeProjectlist.projects.length === 0) {
                                    setPopUp4(true)
                                } else {
                                setPopUp3(true)
                                submitHandler()
                            }}}
                            className="bg-color2 w-100 border-0 text-white fw600"
                        >
                            Save Projectlist
                        </button>
                        <button
                            onClick={() => setPopUp(true)}
                            className="ms-4 bg-color3 px-2 border-0"
                        >
                            <img src={deleteIcon} alt=""/>
                        </button>
                    </div>
                </div>
            </div>

            {/* LIST OR EMPTY */}
            <div className="mt-4">
                {(!filterSelectedData.length && (
                    <div className="same-height d-flex align-items-center justify-content-center">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <img src={disk} alt=""/>
                            <h5 className="fw600 color1 mb-1 mt-4">
                                There are no projects in this list yet
                            </h5>
                            <p className="color1">
                                Select your projects below to add them to this list
                            </p>
                        </div>
                    </div>
                )) || (
                    <div className="project-list same-height ">
                        {filterSelectedData.map((item, key) => {
                            return (
                                <div key={key} className="project-card-up">
                                    <ProjectCard
                                        id={key}
                                        item={item}
                                        deleteToProjectList={deleteToProjectList}
                                    />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectListDisplay;
