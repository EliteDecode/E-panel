const reducer = (state, action) => {
  if (action.type === "LOGIN") {
    return {
      currentUser: action.payload,
    };
  }

  if (action.type === "LOGOUT") {
    return {
      currentUser: null,
    };
  }
  return state;
};

export default reducer;
