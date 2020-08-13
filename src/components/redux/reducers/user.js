const initialState = {
  user: [],
  loading: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_USER_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "REGISTER_USER_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "REGISTER_USER_FULFILLED":
      return {
        ...state,
        user: action.payload.data.result,
        loading: false,
      };
    case "GET_USER_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "GET_USER_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "GET_USER_FULFILLED":
      return {
        ...state,
        user: action.payload.data.result,
        loading: false,
      };
    case "PATCH_USER_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "PATCH_USER_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "PATCH_USER_FULFILLED":
      return {
        ...state,
        user: action.payload.data.result,
        loading: false,
      };
    case "DELETE_USER_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_USER_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_USER_FULFILLED":
      return {
        ...state,
        user: action.payload.data.result,
        loading: false,
      };
    default:
      return state;
  }
};
export default user;
