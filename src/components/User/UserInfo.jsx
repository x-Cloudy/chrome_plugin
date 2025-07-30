import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

import "./UserInfo.css";
import defaultImage from '../../assets/defaultImage'
import { IoIosCopy } from "react-icons/io";

const UserInfo = () => {
  const { user } = useContext(AuthContext);
  const [copied, setCopied] = useState(false);
  
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
        <div className="user-phone" 
        onClick={() => {
          navigator.clipboard.writeText(user.client.phone);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
        title={copied ? "Copiado!" : "Clique para copiar"}
        ><p>{user.client.phone}</p> <IoIosCopy />
        </div>
      </div>
    </div>
  );
};

export default UserInfo;