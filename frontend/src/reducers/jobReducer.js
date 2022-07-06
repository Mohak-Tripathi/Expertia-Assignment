import {JOB_LIST_REQUEST, JOB_LIST_SUCCESS, JOB_LIST_FAIL } from "../constants/jobConstant"


export const jobListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case JOB_LIST_REQUEST:
        return {loading: true, products: [] };
  
      case JOB_LIST_SUCCESS:
        return {
          ...state,
            loading: false,
          products: action.payload,
        };
  
      case JOB_LIST_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };