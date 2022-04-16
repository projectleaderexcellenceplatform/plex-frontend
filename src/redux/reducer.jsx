import { PROJECT_LIST, SELECTED_PROJECT_LIST } from "./type";

const initialState = {
	prodjectList: [],
};

const prodjectListRed = (state = initialState, action) => {
	switch (action.type) {
		case PROJECT_LIST:
			return {
				...state,
				prodjectList: action.payload.map((item) => {
					return {
						...item,
						status: false,
					};
				}),
			};
		case SELECTED_PROJECT_LIST:
			const addData2 = state.prodjectList.filter((arrayElement, index) => {
				return arrayElement.id === action.payload.id;
			});
			const gettingIndex = state.prodjectList
				.map((prev) => prev.id)
				.indexOf(addData2[0].id);
			return {
				...state,
				prodjectList: state.prodjectList.map((content, i) =>
					i === gettingIndex ? (content = action.payload) : content
				),
			};
		default:
			return state;
	}
};
export default prodjectListRed;
