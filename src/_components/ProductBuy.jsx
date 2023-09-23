import React from "react";
import {BsFillCartPlusFill} from "react-icons/bs"

export default function ProductBuy({ imagelink, price, title, desc }) {
  return (
    <div className="hoverShadow card m-4 rounded" style={{ width: "25rem" }}>
      <div className="card-body">
        <h5 className="card-title h2">{title}</h5>
        <h6 className="card-subtitle text-muted">{desc}</h6>
      </div>
      <img className="px-2" style={{width:"100%",height:"15rem",objectFit:"cover",borderRadius:"0.75rem"}} src={imagelink} alt={desc} />
      <div className="card-body">
        <p className="card-text fw-bold">{price}</p>
      </div>
      <div className="card-body">
      <button style={{width:"100%"}} className="btn btn-primary rounded" type="button">Add to Cart <BsFillCartPlusFill style={{width:"1.5rem",height:"1.5rem"}}/></button>
      </div>
    </div>
  );
}
