import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import homeReducer from "../container/HomeContainer/reducer";
import aktuelReducer from "../container/AktuelContainer/reducer";
import aktuelItemsReducer from "../container/AktuelItemsContainer/reducer";

export default combineReducers({
	form: formReducer,
	homeReducer,
	aktuelReducer,
	aktuelItemsReducer
});
