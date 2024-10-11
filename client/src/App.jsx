import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Spinner from "./components/Spinner";
import RouteProtected from "./components/RouteProtected";
import HomePage from "./pages/homepage/HomePage";
import RoutePublic from "./components/RoutePublic";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { useSelector } from "react-redux";

function App() {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <Router>
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <RouteProtected>
                <HomePage />
              </RouteProtected>
            }
          />
          <Route
            path="/login"
            element={
              <RoutePublic>
                <Login />
              </RoutePublic>
            }
          />

          <Route
            path="/register"
            element={
              <RoutePublic>
                <Register />
              </RoutePublic>
            }
          />
        </Routes>
      )}
    </Router>
  );
}

export default App;
