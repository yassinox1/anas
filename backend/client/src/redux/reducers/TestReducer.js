import { CREATE_COURCE, LOAD_COURSES_SUCCESS } from '../actions/actionsTypes';

export default function courceReducer(state = [], action) {
  switch (action.type) {
    case CREATE_COURCE:
      return [...state, action.cource];
    case LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
