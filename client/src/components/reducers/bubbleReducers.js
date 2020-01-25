export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const LOAD_ING = "LOAD_ING";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const DELETE_SUCCESS = "DELETE_SUCCESS";

export const initialState = {
  colors: []
};

export const BubblesReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, apiAction: action.type };

    case LOAD_ING:
      return { ...state, message: "Loading...." };

    case LOAD_SUCCESS:
      return {
        ...state,
        colors: action.payload
      };

    case DELETE_SUCCESS:
      return { ...state };

    default:
      return state;
  }
};
