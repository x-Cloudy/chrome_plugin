import ruanImg from "../../assets/juan";
import "./UserInfo.css";

const UserInfo = ({ name = "Bivolt", role = "Admin", avatar = ruanImg }) => (
  <div className="user-info-fixed">
    <div className="user-avatar">
      <img src={avatar} alt={name} />
    </div>
    <div className="user-details">
      <div className="user-name">{name}</div>
      <div className="user-role">{role}</div>
    </div>
  </div>
);

export default UserInfo;