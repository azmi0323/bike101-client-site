import React from "react";
import { Table } from "react-bootstrap";

const UserInfo = ({user}) => {
  return (
    <div className="container my-4">
      <Table bordered hover size="lg">
        <thead>
          <tr>
            <th>Email</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.email}</td>
            <td>Otto</td>
            <td>
                <button>dlt</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default UserInfo;
