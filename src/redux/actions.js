import { fetchData } from "../dal/fetch";
import { FETCH_DATA } from "../types";

const fetchAC = data => ({type: FETCH_DATA, payload: data})

export const dataFetch = () => {
  return async (dispatch) => {
    let data = await fetchData();
    dispatch(fetchAC(data))
  };
};
