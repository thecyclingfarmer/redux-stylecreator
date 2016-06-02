import request from 'superagent';
import jsonp from 'superagent-jsonp';
import {
  GET_DEPARTMENT,
  GET_STYLE
} from '../constants/action_types';

export function getDepartment(department) {
  return function(dispatch) {
    request
    .get(`/rest/stylecreator.php?department=${department}&lang=sv`)
    .query({ id: department })
    .use(jsonp)
    .end((err, res) => {
      if (res.body) {
        dispatch({
          type: GET_DEPARTMENT,
          department: res.body,
        });
      } else {
        console.log(err);
      }
    });
  }
}

//NOT IMPLEMENTED!
export function getStyle(department) {
  return function(dispatch) {
    request
    .get(`/rest/stylecreator.php?department=${department}&lang=sv`)
    .query({ id: department })
    .use(jsonp)
    .end((err, res) => {
      if (res.body) {
        dispatch({
          type: GET_STYLE,
          style: res.body,
        });
      } else {
        console.log(err);
      }
    });
  }
}
