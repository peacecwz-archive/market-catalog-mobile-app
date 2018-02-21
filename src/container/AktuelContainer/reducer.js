const initialState = {
    isLoading: false,
    list: [],
    hasError: false,
    error: {}
};

const IS_LOADING = "IS_HOME_LOADING";
const FETCH_SUCCESS = "FETCH_HOME_SUCCESS";
const SET_ERROR = "SET_HOME_ERROR";
const HAS_ERROR = "HAS_HOME_ERROR";

export default function (state: any = initialState, action: Function) {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                list: action.list
            };
        case HAS_ERROR:
            return {
                ...state,
                hasError: action.hasError
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
}