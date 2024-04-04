import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const { auth } = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/v1/auth/user-auth", {
          headers: {
            Authorization: auth?.token,
          },
        });

        console.log("Response Status:", res.status);
        console.log("Response Headers:", res.headers);
        console.log("Response Data:", res.data);


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
