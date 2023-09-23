import React from "react";
import {MdRedeem} from 'react-icons/md'

export default function RedeemCard({ title, desc, points, icon }) {
  return (
    <div
      className="hoverShadow card text-white bg-primary m-4 border-white"
      style={{ width: "15rem" }}
    >
      <div className="card-header d-flex justify-content-center align-items-center pt-4">
        {icon}
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{desc}</p>
        <p className="card-subtitle text-success">{points}</p>
      </div>
      <div className="card-body">
        <button
          style={{ width: "100%" }}
          className="btn btn-outline-info rounded"
          type="button"
        >
          redeem{" "}
          <MdRedeem style={{ width: "1.5rem", height: "1.5rem" }} />
        </button>
      </div>
    </div>
  );
}
