const intialUserState = {
  usersList: []
};

export const userReducer = (state = intialUserState, action) => {
  console.log(action);
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        usersList: [...action.payload.usersList]
      };
    default:
      return state;
  }
};
