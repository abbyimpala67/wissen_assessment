import { UPDATE_USER, INVALIDATE_USER } from "../actionTypes/actionsTypes";

const initialState = {
  userDetails: {
    name: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
