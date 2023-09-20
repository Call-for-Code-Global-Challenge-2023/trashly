import React from "react";


export default function RedeemCard({title,desc,points,icon}) {
  return (
    <div class="card text-white bg-primary m-4 border-white" style={{width:"15rem"}}>
      <div class="card-header d-flex justify-content-center align-items-center">
        
        {icon}
      </div>
      <div class="card-body">
        <h4 class="card-title">{title}</h4>
        <p class="card-text">
            {desc}
        </p>
        <p class="card-subtitle text-success">{points}</p>
      </div>
    </div>
  );
}
