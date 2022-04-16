import React from "react";

import {render, screen, cleanup} from "@testing-library/react";
import renderer from 'react-test-renderer'
import ProjectListCard from "../ProjectListCard";

afterEach(() => {
    cleanup();
})

test('test', () => {
    const projectlist = {
        [
            {
                id: 1,
                title: "Projectlijstnaam1",
                projects: [
                    {
                        id: 7,
                        title: "Project7",
                        shortDescription: "Omschrijving7",
                        uploader: "uploader7",
                        categories: []
                    },
                    {
                        id: 1,
                        title: "Project1",
                        shortDescription: "Omschrijving1",
                        uploader: "uploader1",
                        categories: [
                            {
                                id: 1,
                                name: "UX/UI"
                            }
                        ]
                    }
                ]
            }
            ]
    }


    render(<ProjectListCard/>)
    const projectCardElement = screen.getByTestId('projectlistcard')
    expect(projectCardElement).toBeInTheDocument()

})

// test('matches snapshot', () => {
//     const title = "project1"
//     const tree = renderer.create(<ProjectListCard item={title}/>).toJSON();
//     expect(tree).toMatchSnapshot();
// });