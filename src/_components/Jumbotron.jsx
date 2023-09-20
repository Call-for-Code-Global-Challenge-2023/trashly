import React from "react";
import Image from "next/image";

function Jumbotron({maintext, leadtext}) {
  return (
    <>
    <div className="image-bg d-flex align-items-center justify-content-center flex-column">
        <div className="container d-flex align-items-center justify-content-center flex-column">
        <h1>{maintext}</h1>
        <p className="lead">{leadtext}</p>
        </div>
      </div>
    </>
  );
}

export default Jumbotron;
