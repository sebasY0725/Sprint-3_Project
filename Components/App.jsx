import { useState, useEffect } from "react";
import Filter from "./Filter";
import Header from "./Header";
import Results from "./Results";
import "../Components/App.css";

function App(props) {
  const [mode, upDateMode] = useState(true);
  const [search, updateSearch] = useState("");
  const [searchBtn, actualizarBuscarBtn] = useState(false);
  const [dataGif, actualizarDataGif] = useState([]);
  const [enviar, actualizarEnviar] = useState("");
  const [AutoData, actualizarDataAuto] = useState([]);
  const manejarModo = () => {
    upDateMode(!mode);
  };
  const manejarBusqueda = (e) => {
    const busqueda = e.target.value;
    updateSearch(busqueda);
  };
  const manejarCancelarBusqueda = () => {
    updateSearch("");
  };
  const manejarBuscarBtn = (e) => {
    e.preventDefault();
    actualizarBuscarBtn(true);
    actualizarEnviar(search);
  };
  useEffect(() => {
    if (searchBtn === true) {
      let key = "KhppVowaFbDBvza3viJRfIbaXZofRSVs";
      let urlSearch = "https://api.giphy.com/v1/gifs/search";
      let petision = fetch(
        `${urlSearch}?api_key=${key}&q=${search}&limit=12&offset=0&rating=g&lang=en`
      );
      petision
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          actualizarBuscarBtn(false);
          updateSearch("");
          actualizarDataGif(data.data);
        });
    }
  }, [searchBtn, search]);
  useEffect(() => {
    let key = "KhppVowaFbDBvza3viJRfIbaXZofRSVs";
    let petision = fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=${key}&q=${search}&limit=5&offset=0&rating=g&lang=en`
    );
    petision
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        actualizarDataAuto(data.data);
      });
  }, [search]);
  return (
    <div
      className={`${
        mode
          ? "App flex flex-direction align-items-center"
          : " App flex flex-direction align-items-center modo-dark "
      }`}
    >
      <Header manejarModo={manejarModo} modo={mode} />
      <Filter
        modo={mode}
        manejarBusqueda={manejarBusqueda}
        search={search}
        manejarBuscarBtn={manejarBuscarBtn}
        dataGif={dataGif}
        AutoData={AutoData}
        manejarCancelarBusqueda={manejarCancelarBusqueda}
      />
      <Results
        dataGif={dataGif}
        actualizarDataGif={actualizarDataGif}
        searchBtn={searchBtn}
        search={search}
        moe={mode}
        enviar={enviar}
      />
    </div>
  );
}

export default App;

// // modo Dark
// export default function App() {
//   const [DarkMode, setDarkMode] = useState(false);

//   const handleChangeTheme = () => {
//     setDarkMode(!DarkMode);
//   };

//   return (
//     <div className={`${DarkMode ? "dark" : "light"} App`}>
//       <header className="header">
//         <h1>Galería de imágenes</h1>
//         <button
//           className={`${DarkMode ? "dark" : ""} btn-theme`}
//           onClick={handleChangeTheme}
//         >
//           {DarkMode ? "MODO LIGHT" : "MODO DARK"}
//         </button>
//       </header>
//     </div>
//   );
// }
