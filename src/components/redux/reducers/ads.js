const initialState = {
  ads: [],
  loading: false
};

const ads = (state = initialState, action) => {
  switch (action.type) {
    case "POST_ADS_PENDING":
      return {
        ...state,
        loading: true
      };
    case "POST_ADS_REJECTED":
      return {
        ...state,
        loading: true
      };
    case "POST_ADS_FULFILLED":
      return {
        ...state,
        ads: action.payload.data.result,
        loading: false
      };
    case "GET_ADS_PENDING":
      return {
        ...state,
        loading: true
      };
    case "GET_ADS_REJECTED":
      return {
        ...state,
        loading: true
      };
    case "GET_ADS_FULFILLED":
      return {
        ...state,
        ads: action.payload.data.result,
        loading: false
      };
    case "GET_ADS_DETAILED_PENDING":
      return {
        ...state,
      };
    case "GET_ADS_DETAILED_REJECTED":
      return {
        ...state,
      };
    case "GET_ADS_DETAILED_FULFILLED":
      return {
        ...state,
        ads: action.payload.data.result,
      };
    case "PATCH_ADS_PENDING":
      return {
        ...state,
        loading: true
      };
    case "PATCH_ADS_REJECTED":
      return {
        ...state,
        loading: true
      };
    case "PATCH_ADS_FULFILLED":
      return {
        ...state,
        ads: action.payload.data.result,
        loading: false
      };
    case "DELETE_ADS_PENDING":
      return {
        ...state,
        loading: true
      };
    case "DELETE_ADS_REJECTED":
      return {
        ...state,
        loading: true
      };
    case "DELETE_ADS_FULFILLED":
      return {
        ...state,
        ads: action.payload.data.result,
        loading: false
      };
    default:
      return state;
  }
};
export default ads;
