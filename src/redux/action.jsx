import { PROJECT_LIST, SELECTED_PROJECT_LIST } from "./type";
import axios from "axios";

const projectListFunc = (data) => {
	return {
		type: PROJECT_LIST,
		payload: data,
	};
};

// API CALL
export const projectListApi = () => {
	return (dispatch) => {
		axios.get("http://localhost:8080/api/v1/projects").then((res) => {
			dispatch(projectListFunc(res.data));
		});
	};
};

// ADDING TO SELECTED PROJECT LIST
export const addToProjectList = (data) => {
	return {
		type: SELECTED_PROJECT_LIST,
		payload: data,
	};
};

// DELETING FROM SELECTED PROJECT LIST
export const deleteToProjectList = (data) => {
	return {
		type: SELECTED_PROJECT_LIST,
		payload: data,
	};
};
