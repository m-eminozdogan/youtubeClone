import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialStae = {
  name: "emin",
  age: "25",
};

const reducer = (initialStae) => initialStae;

const store = createStore(
  reducer,
  initialStae,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;