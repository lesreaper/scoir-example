import * as React from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import { useAppSelector } from './redux/hooks';

import { Dashboard } from "./components/Dashboard";
import { LoginPage } from "./components/Login/LoginPage";

function RequireAuth({ children }: { children: JSX.Element }): JSX.Element {
  const { loggedin } = useAppSelector((state) => state.user);
  const location = useLocation();
  if (!loggedin) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}

