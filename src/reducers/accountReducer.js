const initialState = {
  amount:null
};
export const accountConstants = {
  ACCOUNT_DETAILS_FETCHED: "ACCOUNT_DETAILS_FETCHED",
  ACCOUNT_DETAILS_ALTERED: "ACCOUNT_DETAILS_ALTERED",
};
export default (state = initialState, action) => {
  switch (action.type) {
    case accountConstants.ACCOUNT_DETAILS_FETCHED:
      return {
        ...state,
        amount: action.amount,
      };
    case accountConstants.ACCOUNT_DETAILS_ALTERED:
      return {
        ...state,
        amount: action.amount
      };
    default:
      return state;
  }
};
