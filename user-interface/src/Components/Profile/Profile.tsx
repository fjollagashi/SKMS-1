import { AdminProfile } from "../AdminInterface/AdminProfile";
import ParentProfile from "../ParentInterface/ParentProfile";
import { useStore } from "../Stores/Store";

interface ProfileProps {
  logOut: () => void;
}

export const Profile: React.FunctionComponent<ProfileProps> = ({ logOut }) => {
  const { role } = useStore().userStore;

  return (
    <>
      {role === "PARENT" && <ParentProfile logOut={logOut} />}
      {role === "ADMIN" && <AdminProfile logOut={logOut} />}
    </>
  );
};
