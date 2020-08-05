const initialState = {
  ads: [],
};

const ads = (state = initialState, action) => {
  switch (action.type) {
    case "POST_ADS_PENDING":
      return {
        ...state,
      };
    case "POST_ADS_REJECTED":
      return {
        ...state,
      };
    case "POST_ADS_FULFILLED":
      return {
        ...state,
        ads: action.payload.data.result,
      };
    case "GET_ADS_PENDING":
      return {
        ...state,
      };
    case "GET_ADS_REJECTED":
      return {
        ...state,
      };
    case "GET_ADS_FULFILLED":
      return {
        ...state,
        ads: action.payload.data.result,
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
      };
    case "PATCH_ADS_REJECTED":
      return {
        ...state,
      };
    case "PATCH_ADS_FULFILLED":
      return {
        ...state,
        ads: action.payload.data.result,
      };
    case "DELETE_ADS_PENDING":
      return {
        ...state,
      };
    case "DELETE_ADS_REJECTED":
      return {
        ...state,
      };
    case "DELETE_ADS_FULFILLED":
      return {
        ...state,
        ads: action.payload.data.result,
      };
    default:
      return state;
  }
};
export default ads;
