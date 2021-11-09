import React from "react";
import AutoComplete from "./AutoComplete";

function Filter({
  mode,
  handleSearch,
  search,
  handleSearchBtn,
  dataGif,
  AutoData,
  handleCancelSearch
}) {
  return (
    <div className="filter flex align-items-center flex-direction ">
      <h1
        className={`${
          mode ? "font weight-400 color" : "font weight-400 color-white"
        }`}
      >
        ¡Inspire yourself and search the bests{" "}
        <span className="weight-900">GIFS</span>!{" "}
      </h1>
      <img src="/resource/ilustra_header.svg" alt="lustracion header" />
      <form className="flex" onSubmit={handleSearchBtn}>
        .
        <div className="flex align-items-center">
          <div className="relative">
            <img
              onClick={handleCancelSearch}
              className="icono-cerrar"
              src={search !== "" ? "/resources/cerrar.png" : ""}
              alt=""
            />
            <input
              className={`${
                mode
                  ? "input font color-gris size-18 padding-left-19"
                  : "input-dark font color-white size-18 padding-left-19"
              }`}
              onChange={handleSearch}
              value={search}
              placeholder=" Buscar Gif"
              type="text"
            />
          </div>
          <button className="btn-busqueda">
            <img src="/resources/icon-search-mod-noc.svg" alt="buscar" />
          </button>
        </div>
        {search === "" ? (
          <></>
        ) : dataGif.length >= 0 && search !== "" ? (
          <AutoComplete
            dataAuto={AutoData}
            manejarBuscarBtn={handleSearchBtn}
          />
        ) : (
          <></>
        )}
      </form>
    </div>
  );
}

export default Filter;
