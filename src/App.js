import React from "react";

// IMPORTING REDUX PROVIDER AND STORE
import { Provider } from "react-redux";
import store from "./redux/store";

// IMPORTS
import "./styles/styles.css";
import "react-circular-progressbar/dist/styles.css";
import { Route, Routes } from "react-router-dom";

// IMPORTS PAGES
import ProjectList from "./pages/ProjectList";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/Student";
import Setting from "./pages/Setting";
import Choice from "./pages/Choice";
import ChoiceStudentDetails from "./pages/ChoiceStudentDetails";

function App() {
	return (
		<Provider store={store}>
			<Routes>
				<Route exact path="/" element={<Dashboard />}></Route>
				<Route exact path="/project_list" element={<ProjectList />}></Route>
				<Route exact path="/student" element={<Student />}></Route>
				<Route exact path="/setting" element={<Setting />}></Route>
				<Route exact path="/choice" element={<Choice />}></Route>
				<Route exact path="/choice/1" element={<ChoiceStudentDetails />}></Route>
			</Routes>
		</Provider>
	);
};

export default App;
