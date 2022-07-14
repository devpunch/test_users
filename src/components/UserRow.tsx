import { useNavigate } from "react-router-dom";
import { userRowProps } from "../types";
import { FC } from "react";

const UserRow: FC<userRowProps> = (props) => {
  const { name, email, phone } = props;
  const nameID = name.toLowerCase().split(" ").join("_");
  const navigation = useNavigate();
  const handleClickShowUserInfo = () => {
    navigation(`/user/${nameID}`);
  };
  return (
    <div>
      <div>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
      <button onClick={handleClickShowUserInfo}>Show user info</button>
    </div>
  );
};

export default UserRow;
