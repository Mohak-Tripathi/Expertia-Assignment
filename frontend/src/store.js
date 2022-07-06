import {
    legacy_createStore as createStore,
    combineReducers,
    applyMiddleware,
  } from "redux";

  import { composeWithDevTools } from "@redux-devtools/extension";
  
  import {
    jobListReducer,

  } from "./reducers/jobReducers.js";
    
  import thunk from "redux-thunk";

  
  const rootreducer = combineReducers({
    jobList: jobListReducer,
   
  });

  

  
  const store = createStore(
    rootreducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk)
  
    )
  );
  
  export default store;