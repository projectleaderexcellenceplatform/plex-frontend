import React from "react";

import {render, screen, cleanup} from "@testing-library/react";
import renderer from 'react-test-renderer'
import ProjectCard from "../ProjectCard";

afterEach(() => {
    cleanup();
})

test('test', () => {
    render(<ProjectCard item={'project1'}/>)
    const projectCardElement = screen.getByTestId('projectcard')
    expect(projectCardElement).toBeInTheDocument()

})

test('matches snapshot', () => {
    const title = "project1"
    const tree = renderer.create(<ProjectCard item={title}/>).toJSON();
    expect(tree).toMatchSnapshot();
});