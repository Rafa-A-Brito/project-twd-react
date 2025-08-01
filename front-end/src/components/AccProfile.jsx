import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
const AccProfile = () => {
  const { user, setUser } = useUserContext();
  const [redirect, setRedirect] = useState(false);
  //   if (!user) return <></>;
  const logOut = async () => {
    try {
      const { data } = await axios.post("/users/logout");

      setUser(null);
      setRedirect(true);
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  if (redirect) return <Navigate to="/" />;
  return (
    <div className="flex flex-col items-center gap-4">
      <p>
        Logado como {user?.name} ({user?.email})
      </p>
      {/* optional chaining  */}
      <button
        onClick={logOut}
        className="bg-primary-400 min-w-44 cursor-pointer rounded-full px-4 py-2 text-white transition"
      >
        Log Out
      </button>
    </div>
  );
};

export default AccProfile;
