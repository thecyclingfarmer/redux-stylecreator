import _ from 'lodash';
import {
  GET_DEPARTMENT,
  GET_STYLE
} from '../constants/action_types';

let styleCreatorState = {
  selectedStyle: {},
  selectedDepartment: {},
};

export default function stylecreator(state = styleCreatorState, action) {

  switch (action.type) {

   case GET_DEPARTMENT:
     return Object.assign({}, state, {
       selectedDepartment: action.department
     });

   case GET_STYLE:
    return Object.assign({}, state, {
      selectedStyle: action.style
    });

    default: return state
  }
}
