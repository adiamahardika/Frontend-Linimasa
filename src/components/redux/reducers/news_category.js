const initialState = {
  news_category: [],
  loading: false
};

const news_category = (state = initialState, action) => {
  switch (action.type) {
    case "POST_NEWS_CATEGORY_PENDING":
      return {
        ...state,
        loading: true
      };
    case "POST_NEWS_CATEGORY_REJECTED":
      return {
        ...state,
        loading: true
      };
    case "POST_NEWS_CATEGORY_FULFILLED":
      return {
        ...state,
        news_category: action.payload.data.result,
        loading: false
      };
    case "GET_NEWS_CATEGORY_PENDING":
      return {
        ...state,
        loading: true
      };
    case "GET_NEWS_CATEGORY_REJECTED":
      return {
        ...state,
        loading: true
      };
    case "GET_NEWS_CATEGORY_FULFILLED":
      return {
        ...state,
        news_category: action.payload.data.result,
        loading: false
      };
    case "PATCH_NEWS_CATEGORY_PENDING":
      return {
        ...state,
        loading: true
      };
    case "PATCH_NEWS_CATEGORY_REJECTED":
      return {
        ...state,
        loading: true
      };
    case "PATCH_NEWS_CATEGORY_FULFILLED":
      return {
        ...state,
        news_category: action.payload.data.result,
        loading: false
      };
    case "DELETE_NEWS_CATEGORY_PENDING":
      return {
        ...state,
        loading: true
      };
    case "DELETE_NEWS_CATEGORY_REJECTED":
      return {
        ...state,
        loading: true
      };
    case "DELETE_NEWS_CATEGORY_FULFILLED":
      return {
        ...state,
        news_category: action.payload.data.result,
        loading: false
      };
    default:
      return state;
  }
};
export default news_category;
