import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import isLoadingReducer from "../reducers/isLoading";
import { postReducer } from "../reducers/post";


const store = configureStore({
  reducer: { 
    profile: profileReducer,
    isLoading: isLoadingReducer,
    post: postReducer
 },
});

export default store;
