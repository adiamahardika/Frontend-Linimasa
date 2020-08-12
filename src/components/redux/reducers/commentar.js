const initialState = {
  commentar: [],
  loading: false,
};
const commentar = (state = initialState, action) => {
  switch (action.type) {
    case "POST_COMMENTAR_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "POST_COMMENTAR_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "POST_COMMENTAR_FULFILLED":
      return {
        ...state,
        commentar: action.payload.data.result,
        loading: false,
      };
    case "GET_COMMENTAR_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "GET_COMMENTAR_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "GET_COMMENTAR_FULFILLED":
      return {
        ...state,
        commentar: action.payload.data.result,
        loading: false,
      };
    case "PATCH_COMMENTAR_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "PATCH_COMMENTAR_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "PATCH_COMMENTAR_FULFILLED":
      return {
        ...state,
        commentar: action.payload.data.result,
        loading: false,
      };
    case "DELETE_COMMENTAR_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_COMMENTAR_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_COMMENTAR_FULFILLED":
      return {
        ...state,
        commentar: action.payload.data.result,
        loading: false,
      };
    default:
      return state;
  }
};
export default commentar;
