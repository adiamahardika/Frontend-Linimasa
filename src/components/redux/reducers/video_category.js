const initialState = {
  video_category: [],
};
const video_category = (state = initialState, action) => {
  switch (action.type) {
    case "POST_VIDEO_CATEGORY_PENDING":
      return {
        ...state,
      };
    case "POST_VIDEO_CATEGORY_REJECTED":
      return {
        ...state,
      };
    case "POST_VIDEO_CATEGORY_FULFILLED":
      return {
        ...state,
        video_category: action.payload.data.result,
      };
    case "GET_VIDEO_CATEGORY_PENDING":
      return {
        ...state,
      };
    case "GET_VIDEO_CATEGORY_REJECTED":
      return {
        ...state,
      };
    case "GET_VIDEO_CATEGORY_FULFILLED":
      return {
        ...state,
        video_category: action.payload.data.result,
      };
    case "PATCH_VIDEO_CATEGORY_PENDING":
      return {
        ...state,
      };
    case "PATCH_VIDEO_CATEGORY_REJECTED":
      return {
        ...state,
      };
    case "PATCH_VIDEO_CATEGORY_FULFILLED":
      return {
        ...state,
        video_category: action.payload.data.result,
      };
    case "DELETE_VIDEO_CATEGORY_PENDING":
      return {
        ...state,
      };
    case "DELETE_VIDEO_CATEGORY_REJECTED":
      return {
        ...state,
      };
    case "DELETE_VIDEO_CATEGORY_FULFILLED":
      return {
        ...state,
        video_category: action.payload.data.result,
      };
    default:
      return state;
  }
};
export default video_category;
