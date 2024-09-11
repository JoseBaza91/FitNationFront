import Reservation from "../components/Reservation";
import AmdinUserPage from "./AdminUserPage";

const UserPage = () => {
  return (
    <>
      <div className="d-flex justify-content-center my-5">
        <Reservation />
        <AmdinUserPage arrayUsuarios={usuarios} />
      </div>
    </>
  );
};

export default UserPage;
