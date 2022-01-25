import { AdminProfile } from "../AdminInterface/AdminProfile";
import { ParentProfile } from "../ParentInterface/ParentProfile";

interface ProfileProps {
  logOut: () => void;
}

export const Profile: React.FunctionComponent<ProfileProps> = ({ logOut }) => {
  let role = localStorage.getItem("ROLE");

  return (
    <>
      {role === "PARENT" && <ParentProfile logOut={logOut} />}
      {role === "ADMIN" && <AdminProfile logOut={logOut} />}
    </>
  );
};
