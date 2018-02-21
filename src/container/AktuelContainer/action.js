import api from "../../reducers/api";
import BaseResponse from "../../reducers/baseResponse";
import { AsyncStorage } from "react-native";

export function isLoading(bool: boolean) {
  return {
    type: "IS_HOME_LOADING",
    isLoading: bool
  };
}

export function fetchSuccess(list: object) {
  return {
    type: "FETCH_HOME_SUCCESS",
    list: list
  };
}

export function setError(error: Object) {
  return {
    type: "SET_HOME_ERROR",
    error: error
  };
}

export function hasError(isHasError: boolean) {
  return {
    type: "IS_HAS_HOME_ERROR",
    isHasError: isHasError
  };
}

export function addFavourite(item) {
  return dispatch => {
    dispatch(isLoading(true));
    AsyncStorage.getItem("Favourites")
      .then(res => {
        if (res !== null) {
          var favs = JSON.parse(res);
          favs.push(item);
          AsyncStorage.setItem("Favourites", JSON.stringify(favs))
            .then(() => {
              dispatch(isLoading(false));
            })
            .catch(err => {
              dispatch(isLoading(false));
              dispatch(hasError(true));
              dispatch(setError(err));
            });
        }
      })
      .catch(e => {
        dispatch(isLoading(false));
        dispatch(hasError(true));
        dispatch(setError(e));
      });
  };
}

export function fetchList(companyId: object) {
  return dispatch => {
    dispatch(isLoading(true));
    api
      .getAktuels(companyId)
      .then(result => {
        let data = new BaseResponse(result.data);
        if (data.isSuccess) {
          dispatch(fetchSuccess(data.data));
        } else {
          dispatch(setError(data.messages[0]));
          dispatch(hasError(true));
        }
        dispatch(isLoading(false));
      })
      .catch(error => {
        dispatch(setError(error));
        dispatch(hasError(true));
        dispatch(isLoading(false));
      });
  };
}
