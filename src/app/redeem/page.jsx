"use client";

import RedeemCard from "@/_components/RedeemCard";
import { SiBookmyshow } from "react-icons/si";
import { SiZomato } from "react-icons/si";
import { SiSwiggy } from "react-icons/si";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";

export default function Redeem() {
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

  var redeemList = [
    {
      title: "Book My Show",
      desc: "40% off on all hindi films",
      points: "40 points",
      icon: <SiBookmyshow style={{ width: "10rem", height: "8rem" }} />,
    },
    {
      title: "Zomato",
      desc: "40% off on all chinese food items",
      points: "25 points",
      icon: <SiZomato style={{ width: "10rem", height: "8rem" }} />,
    },
    {
      title: "Swiggy",
      desc: "30% off on all chinese food items",
      points: "35 points",
      icon: <SiSwiggy style={{ width: "8rem", height: "7rem" }} />,
    },
  ];
  return (
    <div
      className="p-4 d-flex flex-row flex-wrap justify-content-center align-items-center pg_margin"
      style={{minHeight:"60vh"}}
    >
      {redeemList.map((ele, index) => {
        return (
          <RedeemCard
            key={index}
            title={ele.title}
            desc={ele.desc}
            points={ele.points}
            icon={ele.icon}
          />
        );
      })}
    </div>
  );
}
