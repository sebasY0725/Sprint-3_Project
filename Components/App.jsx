import { useState, useEffect } from "react";
import Filter from "./Filter";
import Header from "./Header";
import Results from "./Results";
import "../Components/App.css";

function App(props) {
  const [mode, upDateMode] = useState(true);
  const [search, updateSearch] = useState("");
  const [searchBtn, updateSearchBtn] = useState(false);
  const [dataGif, updateDataGif] = useState([]);
  const [send, updateSend] = useState("");
  const [AutoData, updateAutoData] = useState([]);
  const handleMode = () => {
    upDateMode(!mode);
  };
  const handleSearch = (e) => {
    const busqueda = e.target.value;
    updateSearch(busqueda);
  };
  const handeCancelSearch = () => {
    updateSearch("");
  };
  const handleSearchBtn = (e) => {
    e.preventDefault();
    updateSearchBtn(true);
    updateSend(search);
  };
  useEffect(() => {
    if (searchBtn === true) {
      let key = "KhppVowaFbDBvza3viJRfIbaXZofRSVs";
      let urlSearch = "https://api.giphy.com/v1/gifs";
      let request = fetch(
        `${urlSearch}?api_key=${key}&q=${search}&limit=12&offset=0&rating=g&lang=en`
      );
      request
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          updateSearchBtn(false);
          updateSearch("");
          updateDataGif(data.data);
        });
    }
  }, [searchBtn, search]);
  useEffect(() => {
    let key = "KhppVowaFbDBvza3viJRfIbaXZofRSVs";
    let request = fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=${key}&q=${search}&limit=5&offset=0&rating=g&lang=en`
    );
    request
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        updateAutoData(data.data);
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
      <Header handleMode={handleMode} mode={mode} />
      <Filter
        mode={mode}
        handleSearch={handleSearch}
        search={search}
        handleSearchBtn={handleSearchBtn}
        dataGif={dataGif}
        AutoData={AutoData}
        handeCancelSearch={handeCancelSearch}
      />
      <Results
        dataGif={dataGif}
        updateDataGif={updateDataGif}
        searchBtn={searchBtn}
        search={search}
        mode={mode}
        send={send}
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
