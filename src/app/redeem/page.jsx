import RedeemCard from "@/_components/RedeemCard";
import React from "react";
import { SiBookmyshow } from "react-icons/si";
import { SiZomato } from "react-icons/si";
import { SiSwiggy } from "react-icons/si";

export default function Redeem() {
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
