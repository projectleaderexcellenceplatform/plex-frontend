import React, {useState} from "react";

import avtar from "../../assets/images/avtar.svg";
import info from "../../assets/images/icons/info.svg";

const StudentListCard = (props) => {
    const latestProject = [props.project];

    const [active, setActive] = useState(false);


    return (
        <div>
            {latestProject
                .map((item) => {
                    return (
                        <div
                            className={"project-Card_b d-flex justify-content-between align-items-center w-100 shadow rounded-10 px- py-3"}>
                            <div className="row align-items-center w-100">
                                <div className="col-5">
                                    <div className="row align-items-center">
                                        <div className="col-2">
                                            {/*<img/>*/}
                                        </div>
                                        <div className="col-10 ps-0">
                                            <p className="mb-0 f14 color1 fw800">
                                                {item.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={"d-flex justify-content-between"}>
                                {[1, 1, 1].map((priorityButton, i) => {
                                    return (
                                        <div
                                            key={i}
                                            onClick={() => {
                                               props.func(item.id, i)
                                            }}
                                            className={active ? "bg-color2 text-white card-list-student-checkbox" : "bg-color4 color5 card-list-student-checkbox"}
                                        >
                                            {i + 1}
                                        </div>
                                    )
                                })
                                }
                            </div>


                        </div>

                    )
                })}

        </div>

    );
};

export default StudentListCard;

//                                        onClick={() => setActive(prevActive => !prevActive)}

// {[1, 1, 1].map((item, i) => {
//     return (
//         <div
//             key={i}
//             onClick={() => {
//                 setActive(!active);
//             }}
//             className={active ? "bg-color2 text-white card-list-student-checkbox": "bg-color4 color5 card-list-student-checkbox"}
//         >
//             {i + 1}
//         </div>
//     )
// })
// }