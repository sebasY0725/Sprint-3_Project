import React from "react";

function AutoCompletarGif({ handleSearchBtn, AutoData }) {
  console.log(AutoData);
  return (
    <div
      onClick={handleSearchBtn}
      className={`${
        AutoData.length > 0
          ? "suggestions-container margin-top-20 margin-bottom-30 "
          : ""
      }`}
    >
      <div className="relative">{Suggestions({ AutoData })}</div>
    </div>
  );
}

function Suggestions({ AutoData }) {
  return (
    <div>
      {AutoData.map((data) => {
        return (
          <div className="relative">
            <img className="icon-search" src="/resource/lupa.png" alt="" />
            <li className="suggestions font padding-left-40 flex align-items-center color-gris">
              {""}
              {data.name}
            </li>
          </div>
        );
      })}
    </div>
  );
}

export default AutoCompletarGif;
