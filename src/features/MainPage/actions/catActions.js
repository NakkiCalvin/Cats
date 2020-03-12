import * as t from './action-types/cat-actions';

export const addCat = data => {
  return {
    type: t.ADD_CAT_REQUEST,
    payload: data,
  };
};
export const deleteCat = data => {
  return {
    type: t.DELETE_CAT_REQUEST,
    payload: data,
  };
};
export const editCat = data => {
  return {
    type: t.EDIT_CAT_REQUEST,
    payload: data,
  };
};
