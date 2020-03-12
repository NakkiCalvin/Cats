import * as t from '../../features/MainPage/actions/action-types/cat-actions';

export const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case t.ADD_CAT_REQUEST: {
      return { ...state, isLoad: true, error: null };
    }
    case t.ADD_CAT_ERROR: {
      return { ...state, isLoad: false, error: action.error };
    }
    case t.ADD_CAT_SUCCESS: {
      return { ...state, isLoad: false, pageData: action.payload };
    }

    case t.DELETE_CAT_REQUEST: {
      return { ...state, isLoad: true, error: null };
    }
    case t.DELETE_CAT_ERROR: {
      return { ...state, isLoad: false, error: action.error };
    }
    case t.DELETE_CAT_SUCCESS: {
      return { ...state, isLoad: false, pageData: action.payload };
    }

    case t.EDIT_CAT_REQUEST: {
      return { ...state, isLoad: true, error: null };
    }
    case t.EDIT_CAT_ERROR: {
      return { ...state, isLoad: false, error: action.error };
    }
    case t.EDIT_CAT_SUCCESS: {
      return { ...state, isLoad: false, pageData: action.payload };
    }

    default:
      return state;
  }
};
