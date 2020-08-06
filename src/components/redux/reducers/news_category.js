const initialState = {
  news_category: [],
};

const news_category = (state = initialState, action) => {
  switch (action.type) {
    case "POST_NEWS_CATEGORY_PENDING":
      return {
        ...state,
      };
    case "POST_NEWS_CATEGORY_REJECTED":
      return {
        ...state,
      };
    case "POST_NEWS_CATEGORY_FULFILLED":
      return {
        ...state,
        news_category: action.payload.data.result,
      };
    case "GET_NEWS_CATEGORY_PENDING":
      return {
        ...state,
      };
    case "GET_NEWS_CATEGORY_REJECTED":
      return {
        ...state,
      };
    case "GET_NEWS_CATEGORY_FULFILLED":
      return {
        ...state,
        news_category: action.payload.data.result,
      };
    case "PATCH_NEWS_CATEGORY_PENDING":
      return {
        ...state,
      };
    case "PATCH_NEWS_CATEGORY_REJECTED":
      return {
        ...state,
      };
    case "PATCH_NEWS_CATEGORY_FULFILLED":
      return {
        ...state,
        news_category: action.payload.data.result,
      };
    case "DELETE_NEWS_CATEGORY_PENDING":
      return {
        ...state,
      };
    case "DELETE_NEWS_CATEGORY_REJECTED":
      return {
        ...state,
      };
    case "DELETE_NEWS_CATEGORY_FULFILLED":
      return {
        ...state,
        news_category: action.payload.data.result,
      };
    default:
      return state;
  }
};
export default news_category;
