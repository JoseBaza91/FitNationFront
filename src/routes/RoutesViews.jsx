import { Route, Routes } from "react-router-dom";
import RegisterPage from "../page/RegisterPage";

const RoutesViews = () => {
  return (
    <>
      <Routes>
        <Route path="/registro" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default RoutesViews;
