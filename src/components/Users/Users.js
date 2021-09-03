import React from "react";
import { connect } from "react-redux";
import { fetchUsersList } from "../../redux/action/user.action";
import User from "./User";
import "./User.css";

function Users(props) {
  const { usersList, fetchUsers } = props;
  const getUserList = () => {
    fetchUsers();
  };

  return (
    <>
      <button className="btn-control" onClick={getUserList}>
        Get User List
      </button>
      <div className="user-list-container">
        {usersList.map((user, idx) => (
          <User name={user.first_name} email={user.email} key={idx} />
        ))}
      </div>
    </>
  );
}

const mapStateToProps = ({ userReducer }) => ({
  usersList: userReducer.usersList
});
const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsersList())
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
