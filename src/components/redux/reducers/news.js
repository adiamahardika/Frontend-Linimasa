const initialState = {
  news: [],
  all_news: [],
  news_detail: "",
  loading: false,
};

const news = (state = initialState, action) => {
  switch (action.type) {
    case "POST_NEWS_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "POST_NEWS_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "POST_NEWS_FULFILLED":
      return {
        ...state,
        news: action.payload.data.result,
        loading: false,
      };
    case "GET_NEWS_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "GET_NEWS_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "GET_NEWS_FULFILLED":
      return {
        ...state,
        news: action.payload.data.result,
        loading: false,
      };
      case "GET_ALL_NEWS_PENDING":
        return {
          ...state,
          loading: true,
        };
      case "GET_ALL_NEWS_REJECTED":
        return {
          ...state,
          loading: true,
        };
      case "GET_ALL_NEWS_FULFILLED":
        return {
          ...state,
          all_news: action.payload.data.result,
          loading: false,
        };
    case "GET_NEWS_DETAIL_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "GET_NEWS_DETAIL_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "GET_NEWS_DETAIL_FULFILLED":
      return {
        ...state,
        news_detail: action.payload.data.result[0],
        loading: false,
      };
    case "PATCH_NEWS_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "PATCH_NEWS_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "PATCH_NEWS_FULFILLED":
      return {
        ...state,
        news: action.payload.data.result,
        loading: false,
      };
    case "DELETE_NEWS_PENDING":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_NEWS_REJECTED":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_NEWS_FULFILLED":
      return {
        ...state,
        news: action.payload.data.result,
        loading: false,
      };
    default:
      return state;
  }
};
export default news;
