import { ParentProfile } from "../ParentInterface/ParentProfile";

interface ProfileProps {
  role: string;
}

export const Profile: React.FunctionComponent<ProfileProps> = ({ role }) => {
  return (
    <>
      {role === "PARENT" && <ParentProfile />}
      {role === "dsfs" && <div>dsfsd</div>}
    </>
  );
};
