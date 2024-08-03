import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import routes from "./routes";
import DashboardPage from "../pages/Dashboard";


const Router = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path={routes.dashboard} Component={DashboardPage} />
          <Route path="*" element={<Navigate to={routes.dashboard} />}>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default Router;
