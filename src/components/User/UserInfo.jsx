import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

import "./UserInfo.css";
import defaultImage from '../../assets/defaultImage'


const UserInfo = () => {
  const { user } = useContext(AuthContext);
  
  console.log(user);
  return (
    <div className="user-info-fixed">
      <div className="user-avatar">
        <img
          src={ defaultImage}
          alt={user.name}
        />
      </div>
      <div className="user-details">
        <div className="user-name">{user.name} {user?.last_name}</div>
        <div className="user-role">{user.roles?.[0]?.toUpperCase()}</div>        
      </div>
    </div>
  );
};

export default UserInfo;