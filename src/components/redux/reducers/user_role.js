const initialState = {
  user_role: [],
};
const user_role = (state = initialState, action) => {
  switch (action.type) {
    case "POST_USER_ROLE_PENDING":
      return {
        ...state,
      };
    case "POST_USER_ROLE_REJECTED":
      return {
        ...state,
      };
    case "POST_USER_ROLE_FULFILLED":
      return {
        ...state,
        user_role: action.payload.data.result,
      };
    case "GET_USER_ROLE_PENDING":
      return {
        ...state,
      };
    case "GET_USER_ROLE_REJECTED":
      return {
        ...state,
      };
    case "GET_USER_ROLE_FULFILLED":
      return {
        ...state,
        user_role: action.payload.data.result,
      };
    default:
      return state;
  }
};
export default user_role;
