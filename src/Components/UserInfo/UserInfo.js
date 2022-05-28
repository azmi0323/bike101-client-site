import axios from "axios";
import React from "react";
const UserInfo = ({ user,setLoading }) => {
  const makeAdmin = () => {
    axios.put(`/user/${user._id}`).then((res) => {
      if(res.data){
        setLoading(true);
      }
    });
  };
  const deleteUser = () => {
    axios.delete(`/user/${user._id}`).then((res) => {
      if(res.data){
        setLoading(true);
      }
    });
  };

  return (
    <tbody>
      <tr>
        <td>{user.email}</td>
        <td>{user.role ? user.role : "user"}</td>
        <td>
          <button disabled={user.role==='admin'} onClick={makeAdmin} className="btn btn-primary">
            Make Admit
          </button>
          <button onClick={deleteUser} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    </tbody>
  );
};

export default UserInfo;
