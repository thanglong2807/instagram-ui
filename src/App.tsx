import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // RouteProps,
} from "react-router-dom";
import { privateRoute } from "./Routes";
import LoginWrapper from "./Pages/LoginWrapper";
import Login from "./Pages/Login";
import { useSelector } from "react-redux";

function App() {
  const check = useSelector((state: any) => state.checkLogin.loggedIn);
  console.log(check);

  return (
    <Fragment>
      <Router>
        <Routes>
          {check ? (
            <Route element={<LoginWrapper />}>
              {privateRoute.map((item) => {
                const Layout = item.component;
                return (
                  <Route key={item.id} path={item.path} element={<Layout />} />
                );
              })}
            </Route>
          ) : (
            <Route path="/" element={<Login />} />
          )}
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
