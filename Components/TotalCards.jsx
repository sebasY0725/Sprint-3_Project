import React from "react";
import Cards from "./Cards";
import NoResults from "./NoResults";

function TotalCards({ gifs, send, searchBtn, mode }) {
  return (
    <div>
      <h3
        className={`${
          mode
            ? "margin-top-60 font color weight-400 flex justify-content-center"
            : "margin-top-60 font color-white weight-400 flex justify-content-center"
        }`}
      >
        {`Resultados de la búsqueda`}{" "}
      </h3>
      {gifs.length > 0 && send !== "" ? (
        OnlyCards({ gifs })
      ) : gifs !== [] && searchBtn === false ? (
        <NoResults />
      ) : (
        <></>
      )}
    </div>
  );

  function OnlyCards() {
    return (
      <div
        className={`${
          mode
            ? "margin-top-20 flex fondo-light flex-wrap margin-bottom-30 justify-content-center "
            : "margin-top-20 flex fondo-dark flex-wrap margin-bottom-30 justify-content-center "
        }`}
      >
        {gifs.map((gif) => {
          return <Cards key={gif.id} {...gif} />;
        })}
      </div>
    );
  }
}

export default TotalCards;
