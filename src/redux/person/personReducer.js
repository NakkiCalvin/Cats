import * as t from '../../features/MainPage/actions/action-types/persons-actions';

export const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_PERSON_REQUEST: {
      return { ...state, isLoad: true, error: null };
    }
    case t.ADD_PERSON_ERROR: {
      return { ...state, isLoad: false, error: action.error };
    }
    case t.ADD_PEROSN_SUCCESS: {
      return { ...state, isLoad: false, pageData: action.payload };
    }

    case t.DELETE_PERSON_REQUEST: {
      return { ...state, isLoad: true, error: null };
    }
    case t.DELETE_PERSON_ERROR: {
      return { ...state, isLoad: false, error: action.error };
    }
    case t.DELETE_PERSON_SUCCESS: {
      return { ...state, isLoad: false, pageData: action.payload };
    }

    case t.EDIT_PERSON_REQUEST: {
      return { ...state, isLoad: true, error: null };
    }
    case t.EDIT_PERSON_ERROR: {
      return { ...state, isLoad: false, error: action.error };
    }
    case t.EDIT_PERSON_SUCCESS: {
      return { ...state, isLoad: false, pageData: action.payload };
    }

    default:
      return state;
  }
};
