
export const accountActions = {
  getBalances,
  reduceBalance
};
export const accountConstants = {
  ACCOUNT_DETAILS_FETCHED: "ACCOUNT_DETAILS_FETCHED",
  ACCOUNT_DETAILS_ALTERED: "ACCOUNT_DETAILS_ALTERED",
};
function getBalances() {
  return dispatch => {
      dispatch(success(2500701));
  };
  function success(amount) {
    return { type: accountConstants.ACCOUNT_DETAILS_FETCHED, amount };
  }
}
function reduceBalance(amount, deduction) {
  return dispatch => {
    //debugger
    dispatch(success(amount-deduction));
  };
  function success(amount) {
    return { type: accountConstants.ACCOUNT_DETAILS_ALTERED, amount };
  }
}

 
