import api from "../../reducers/api";
import BaseResponse from "../../reducers/baseResponse";
import { AsyncStorage } from "react-native";

export function isLoading(bool: boolean) {
  return {
    type: "IS_HOME_LOADING",
    isLoading: bool
  };
}

export function fetchLatestSuccess(latest: Object) {
  return {
    type: "FETCH_HOME_LATEST_SUCCESS",
    latest: Array.isArray(latest) ? latest : []
  };
}

export function fetchListSuccess(list: Object) {
  return {
    type: "FETCH_HOME_LIST_SUCCESS",
    list: Array.isArray(list) ? list : []
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

export function search(query) {
  if (query.length < 4) {
    return;
  }
  return dispatch => {
    api
      .search(query)
      .then(result => {
        let data = new BaseResponse(result.data);
        if (data.isSuccess) {
          console.log("Search", query);
          if (data.data.length === 0 && query === "") {
            dispatch(fetchList());
          } else {
            dispatch(fetchLatestSuccess(data.data));
          }
        } else {
          dispatch(hasError(true));
          dispatch(setError(data.messages[0]));
        }
      })
      .catch(err => {
        dispatch(fetchList());
        dispatch(hasError(true));
        dispatch(setError(err));
      });
  };
}

export function fetchList() {
  return dispatch => {
    //dispatch(isLoading(true));
    api
      .getLatest()
      .then(result => {
        let data = new BaseResponse(result.data);
        if (data.isSuccess) {
          dispatch(fetchListSuccess(data.data.companies));
          dispatch(fetchLatestSuccess(data.data.aktuels));
        } else {
          dispatch(hasError(true));
          dispatch(setError(data.messages[0]));
        }
        dispatch(isLoading(false));
      })
      .catch(err => {
        dispatch(hasError(true));
        dispatch(setError(err));
        dispatch(isLoading(false));
      });
  };
}
