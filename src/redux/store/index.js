import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import isLoadingReducer from "../reducers/isLoading";
import { postReducer } from "../reducers/post";
import userReducer from "../reducers/userReducer";

import meReducer from "../reducers/profileMeRed";


const store = configureStore({
  reducer: {
    profile: profileReducer,
    isLoading: isLoadingReducer,
    post: postReducer,
    user: userReducer,
    profileMeRed: meReducer,
  },
});

export default store;
