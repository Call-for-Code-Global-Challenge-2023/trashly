"use client";

import React, { useState } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";

function LogoutButton() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    signOut(auth)
      .then(() => router.replace("/"))
      .catch((error) => alert(`[error] ${error.code} ${error.message}`));
  };

  // don't show button if not logged in
  onAuthStateChanged(auth, (user) => setUser(user));

  return (
    <>
      {user && (
        <>
          <div className="dropdown-divider"></div>
          <center>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout!
            </button>
          </center>
        </>
      )}
    </>
  );
}

export default LogoutButton;
