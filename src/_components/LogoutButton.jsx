"use client";

import React, { useState } from 'react'
import {  signOut  } from 'firebase/auth';
import { auth } from "@/firebase";
import { useRouter } from 'next/navigation';

function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    signOut(auth)
      .then(() => router.replace("/"))
      .catch((error) => alert(`[error] ${error.code} ${error.message}`));
  };

  return (
    <center>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout!
        </button>
    </center>
  );
}

export default LogoutButton;
