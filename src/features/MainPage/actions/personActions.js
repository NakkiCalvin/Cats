import * as t from './action-types/persons-actions';

export const addPerson = data => {
  return {
    type: t.ADD_PERSON_REQUEST,
    payload: data,
  };
};
export const deletePerson = data => {
  return {
    type: t.DELETE_PERSON_REQUEST,
    payload: data,
  };
};
export const editPerson = data => {
  return {
    type: t.EDIT_PERSON_REQUEST,
    payload: data,
  };
};
