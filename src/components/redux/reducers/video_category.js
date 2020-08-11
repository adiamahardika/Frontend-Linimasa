const initialState = {
  video_category: [],
  loading: false,
};
const video_category = (state = initialState, action) => {
  switch (action.type) {
    case "POST_VIDEO_CATEGORY_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "POST_VIDEO_CATEGORY_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "POST_VIDEO_CATEGORY_FULFILLED":
      return {
        ...state,
        video_category: action.payload.data.result,
        loading: false,
      };
    case "GET_VIDEO_CATEGORY_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "GET_VIDEO_CATEGORY_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "GET_VIDEO_CATEGORY_FULFILLED":
      return {
        ...state,
        video_category: action.payload.data.result,
        loading: false,
      };
    case "PATCH_VIDEO_CATEGORY_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "PATCH_VIDEO_CATEGORY_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "PATCH_VIDEO_CATEGORY_FULFILLED":
      return {
        ...state,
        video_category: action.payload.data.result,
        loading: false,
      };
    case "DELETE_VIDEO_CATEGORY_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_VIDEO_CATEGORY_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_VIDEO_CATEGORY_FULFILLED":
      return {
        ...state,
        video_category: action.payload.data.result,
        loading: false,
      };
    default:
      return state;
  }
};
export default video_category;
