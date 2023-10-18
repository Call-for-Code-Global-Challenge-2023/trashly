"use client";

import { PiHandCoinsFill } from "react-icons/pi";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

export default function Sell() {
    // auth guard
    const [authChecking, setAuthChecking] = useState(true);
    const router = useRouter();
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (!user) router.push("/login");
        else setAuthChecking(false);
      });
    }, []);
    if (authChecking) return <p>Loading...</p>;

    const handleSubmit = () => {
      document.getElementById("floatingTextarea").value="";
      document.getElementById("formFileLg").value="";
      alert("Your data has been saved. A trader will reach your location soon.")
    }

  return (
    <div
      style={{
        marginTop: "5rem",
        minHeight: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "80%",
        }}
      >
        <p className="display-6 text-start text-white mt-4">
          Sell your Plastic and get assured cashbacks and deals
          <span>
            <PiHandCoinsFill className="mx-2" />
          </span>
        </p>
        <div
          className="form-floating rounded m-4 rounded"
          style={{ boxShadow: "0px 0px 8px 3px #FF9EAA", width: "100%" }}
        >
          <textarea
            className="form-control text-black rounded"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            style={{ boxShadow: "0px 0px 8px 3px #1520A6" }}
          ></textarea>
          <label for="floatingTextarea" className="text-black">
            Add product Details
          </label>
        </div>
        <div style={{ width: "100%" }}>
          <label
            for="formFileLg"
            className="form-label text-white mt-4"
            style={{ fontFamily: "monospace", marginBottom: "0.5rem" }}
          >
            Upload your plastic image here
          </label>
          <input
            className="form-control form-control rounded"
            style={{ boxShadow: "0px 0px 8px 3px #3DED97" }}
            id="formFileLg"
            type="file"
          />
        </div>
        <button type="button" class="btn btn-outline-warning rounded my-4" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
