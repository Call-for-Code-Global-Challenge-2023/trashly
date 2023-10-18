import React, { Children } from "react";
import Image from "next/image";

function Jumbotron({maintext, leadtext, children, id}) {
  return (
    <>
    <div id={id} className="image-bg d-flex align-items-center justify-content-center flex-column">
        <div className="container d-flex align-items-center justify-content-center flex-column">
        <h1>{maintext}</h1>
        <p className="lead">{leadtext}</p>
        {children}
        </div>
      </div>
    </>
  );
}

export default Jumbotron;
