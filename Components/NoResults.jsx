import React from "react";

function NoResults() {
  return (
    <div>
      <div className="not-found margin-bottom-30 margin-top-20 flex flex-direction justify-content-center align-items-center">
        <img width="230" src="/resource/confused.png" alt="" />
        <br />
        <h1 className="font color-white weight-400 ">
          Sorry we can't found what are you looking for
        </h1>
        <h2 className="font color-white">¡Try Again!</h2>
      </div>
    </div>
  );
}

export default NoResults;
