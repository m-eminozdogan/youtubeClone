import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth";
import { homeVideosReducer } from "./reducers/videos";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
});
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
