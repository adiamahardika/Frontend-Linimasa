const initialState = {
  video: [],
  loading: false,
  total_data: null,
};

const video = (state = initialState, action) => {
  switch (action.type) {
    case "POST_VIDEO_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "POST_VIDEO_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "POST_VIDEO_FULFILLED":
      return {
        ...state,
        video: action.payload.data.result,
        loading: false,
      };
    case "GET_VIDEO_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "GET_VIDEO_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "GET_VIDEO_FULFILLED":
      return {
        ...state,
        video: action.payload.data.result,
        total_data: action.payload.data.total_data,
        loading: false,
      };
    case "PATCH_VIDEO_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "PATCH_VIDEO_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "PATCH_VIDEO_FULFILLED":
      return {
        ...state,
        video: action.payload.data.result,
        loading: false,
      };
    case "DELETE_VIDEO_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_VIDEO_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_VIDEO_FULFILLED":
      return {
        ...state,
        video: action.payload.data.result,
        total_data: action.payload.data.result.length,
        loading: false,
      };
    default:
      return state;
  }
};
export default video;
