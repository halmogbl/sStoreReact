import * as actionTypes from "../actions/actionTypes";

const initialState = {
  profile: "",
  loading: true,
  addresses: [],
  user: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };

    case actionTypes.UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
