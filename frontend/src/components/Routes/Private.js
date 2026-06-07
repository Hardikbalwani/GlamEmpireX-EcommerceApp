import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

const API = process.env.REACT_APP_API || '';

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const { auth } = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get(`${API}/api/v1/auth/user-auth`, {
          headers: {
            Authorization: auth?.token,
          },
        });

        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error("Error while checking authentication:", error);
        setOk(false);
      }
    };

    if (auth?.token) {
      authCheck();
    }
    // eslint-disable-next-line
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}