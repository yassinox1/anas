import { combineReducers } from "redux";

import { userLoginReducer } from "./AuthReducer";
import { AdminReducer } from "./AdminReducer";
import { FormationReducer } from "./FormationReducer";
const rootReducer = combineReducers({
  auth: userLoginReducer,
  admin: AdminReducer,
  formations: FormationReducer,
});

export default rootReducer;
