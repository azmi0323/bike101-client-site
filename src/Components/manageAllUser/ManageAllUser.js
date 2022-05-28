import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import UserInfo from "../UserInfo/UserInfo";


const ManageAllUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("/users").then((res) => {
        setUsers(res.data)
        setLoading(false)
    });
  }, [loading]);

  if (loading ) {
    return (
      <div className="middle_spinner">
        <Spinner animation="border" variant="info" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  return (
    <div>
      <div className="container my-4">
        <Table bordered hover size="lg" className="text-center">
          <thead>
            <tr>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          {users.map((user) => (
            <UserInfo key={user._id} setLoading={setLoading} user={user}></UserInfo>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageAllUser;
