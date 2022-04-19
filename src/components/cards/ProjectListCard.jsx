import React, {useState} from "react";
import avtar from "../../assets/images/avtar.svg";
import blueDelete from "../../assets/images/icons/blueDelete.svg";
import group from "../../assets/images/icons/group.svg";

const ProjectListCard = (props) => {
    const [active, setActive] = useState(true);
    const project = props.project;

    return (
        <div data-testid={"projectlistcard"}>
            {project
                .sort((a, b) => a.id > b.id ? 1 : -1)
                .map((item) => {
                    return (
                        <div key={item.id}
                             className={"project-Card-b3 justify-content-between d-flex w-100 rounded-10 ps-3"}>
                            <div className={"row align-items-center"}>
                                <div className={"col-10"}>
                                    <div className={"mb-0 f16 color1 fw600"}>
                                        {item.title}
                                    </div>
                                </div>
                            </div>

                            {item.categories.map(cat => (
                                <div key={cat.id} className={"d-flex"}>
                                    <div className={"align-self-center pe-4"}>
                                        <div className={"pe-4"}>
                                            <div className={"d-flex"}>
                                                <div className={"bg-color4 px-2 rounded-3 f14 fw600 color1 ms-4"}>
                                                    {cat.name}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                         className={"list-card-delete align-self-center h-100 px-2 bg-color4 py-4 pointer"}>
                                        <img src={blueDelete} alt={""}/>
                                    </div>
                                </div>
                            ))}

                        </div>
                    )
                })}


        </div>


    )
}

export default ProjectListCard;
