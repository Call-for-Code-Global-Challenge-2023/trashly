import React from "react";


export default function RedeemCard({title,desc,points,icon}) {
  return (
    <div className="card text-white bg-primary m-4 border-white" style={{width:"15rem"}}>
      <div className="card-header d-flex justify-content-center align-items-center">
        
        {icon}
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">
            {desc}
        </p>
        <p className="card-subtitle text-success">{points}</p>
      </div>
    </div>
  );
}
