export const fetchUsersList = (data) => {
  return (dispatch) => {
    fetch("https://reqres.in/api/users?page=1")
      .then((res) => res.json())
      .then((response) => {
        dispatch(fetchUsersAction(response.data));
      });
  };
};

export const fetchUsersAction = (usersList) => ({
  type: "FETCH_USERS",
  payload: {
    usersList
  }
});
