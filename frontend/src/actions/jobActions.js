import axios from 'axios'

import {JOB_LIST_REQUEST, JOB_LIST_SUCCESS, JOB_LIST_FAIL} from "../constants/jobConstant"

export const listJobs = () => {
    return async function (dispatch) {
      try {
        dispatch({ type: JOB_LIST_REQUEST });
  
        const { data } = await axios.get(`http://localhost:5000/jobs`);

        dispatch({ type: JOB_LIST_SUCCESS, payload: data });
      } catch (error) {
        dispatch({
          type: JOB_LIST_FAIL,
          payload: error
        });
      }
    };
  };