const initialState = {
  user_role: [],
  loading: false
};
const user_role = (state = initialState, action) => {
  switch (action.type) {
    case "POST_USER_ROLE_PENDING":
      return {
        ...state,
        loading: true
      };
    case "POST_USER_ROLE_REJECTED":
      return {
        ...state,
        loading: true
      };
    case "POST_USER_ROLE_FULFILLED":
      return {
        ...state,
        user_role: action.payload.data.result,
        loading: false
      };
    case "GET_USER_ROLE_PENDING":
      return {
        ...state,
        loading: true
      };
    case "GET_USER_ROLE_REJECTED":
      return {
        ...state,
        loading: true
      };
    case "GET_USER_ROLE_FULFILLED":
      return {
        ...state,
        user_role: action.payload.data.result,
        loading: false
      };
    case "PATCH_USER_ROLE_PENDING":
      return {
        ...state,
        loading: true
      };
    case "PATCH_USER_ROLE_REJECTED":
      return {
        ...state,
        loading: true
      };
    case "PATCH_USER_ROLE_FULFILLED":
      return {
        ...state,
        user_role: action.payload.data.result,
        loading: false
      };
    case "DELETE_USER_ROLE_PENDING":
      return {
        ...state,
        loading: true
      };
    case "DELETE_USER_ROLE_REJECTED":
      return {
        ...state,
        loading: true
      };
    case "DELETE_USER_ROLE_FULFILLED":
      return {
        ...state,
        user_role: action.payload.data.result,
        loading: false
      };
    default:
      return state;
  }
};
export default user_role;
