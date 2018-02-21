const initialState = {
	list: [],
	latest: [],
	isLoading: false,
	error: {},
	isHasError: false
};

const FETCH_LATEST_SUCCESS = "FETCH_HOME_LATEST_SUCCESS";
const FETCH_LIST_SUCCESS = "FETCH_HOME_LIST_SUCCESS";
const IS_LOADING = "IS_HOME_LOADING";
const SET_ERROR = "SET_HOME_ERROR";
const IS_HAS_ERROR = "IS_HAS_HOME_ERROR";

export default function (state: any = initialState, action: Function) {
	switch (action.type) {
		case FETCH_LIST_SUCCESS:
			return {
				...state,
				list: action.list,
			};
		case IS_LOADING:
			return {
				...state,
				isLoading: action.isLoading,
			};
		case FETCH_LATEST_SUCCESS:
			return {
				...state,
				latest: action.latest
			};
		case SET_ERROR:
			return {
				...state,
				error: action.error
			};
		case IS_HAS_ERROR:
			return {
				...state,
				isHasError: action.isHasError
			};
		default:
			return state;
	}
}
