import { useOutletContext, useParams } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUser: string;
}

function Followers() {
  const { userId } = useParams();
  console.log(userId);
  const ctx = useOutletContext();
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();
  console.log(ctx);
  return (
    <>
      <h1>Here are {nameOfMyUser} of Followers</h1>
    </>
  );

}

export default Followers;