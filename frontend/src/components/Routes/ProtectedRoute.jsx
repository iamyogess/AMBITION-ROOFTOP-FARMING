import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import axios from "axios";
import Login from "../../pages/Login";
// import { Outlet } from "react-router-dom";
// import Spinner from "../../Spinner";
import { Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/v1/user/user-auth/"
        );
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setOk(false);
      }
    };
    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token]);

  // return ok ? <Outlet /> : <Spinner path=""/>;
  return ok ? <Outlet /> : <Login />;
};

export default PrivateRoute;
