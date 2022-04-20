import React, {useState} from "react";

import {render, screen, cleanup} from "@testing-library/react";
import renderer from 'react-test-renderer'
import ProjectListCard from "../ProjectListCard";

afterEach(() => {
    cleanup();
})

test('test render', () => {
    const project = [
        {
            "id": 1,
            "title": "Project1",
            "shortDescription": "Omschrijving1",
            "uploader": "uploader1",
            "categories": [
                {
                    "id": 1,
                    "name": "UX/UI"
                }
            ]
        },
        {
            "id": 7,
            "title": "Project7",
            "shortDescription": "Omschrijving7",
            "uploader": "uploader7",
            "categories": []
        }
    ]

    console.log(project)
    render(<ProjectListCard project={project}/>)
    const projectListCardElement = screen.getByTestId('projectlistcard')
    expect(projectListCardElement).toBeInTheDocument()
})

test('matches snapshot', () => {
    const project = [
        {
            "categories": [
                {
                    "id": 1,
                    "name": "UX/UI"
                }
            ],
            "projects": [
                {
                    "id": 7,
                    "title": "Project7",
                    "shortDescription": "Omschrijving7",
                    "uploader": "uploader7",
                    "categories": [
                        {
                            "id": 1,
                            "name": "UX/UI"
                        }
                    ]
                },
                {
                    "id": 1,
                    "title": "Project1",
                    "shortDescription": "Omschrijving1",
                    "uploader": "uploader1",
                    "categories": [
                        {
                            "id": 1,
                            "name": "UX/UI"
                        }
                    ]
                }
            ]
        }
    ]

    const tree = renderer.create(<ProjectListCard project={project}/>).toJSON();
    expect(tree).toMatchSnapshot();
});