import React, { useState } from "react";
import Header from "./Components/Header";
// import BootstrapCarousel from "./Components/BootstrapCarousel";
import Catalogue from "./Components/Catalogue";
import catalogue from "./utilities/catalogue.json";
import { Switch, Route } from "react-router-dom";
import Movies from "./Components/Movies";
import Shows from "./Components/Shows";
import Anime from "./Components/Anime";
import MoviePlayer from "./Components/MoviePlayer";


const App = () => {
  const [catalogueData, setCatalogueData] = useState(catalogue);
  const [moviesData, setMoviesData] = useState(catalogue.filter(item => item.category === "Movies" ))
  const [showsData, setShowsData] = useState(catalogue.filter(item => item.category === "Shows" ))
  const [animeData, setAnimeData] = useState(catalogue.filter(item => item.category === "Anime" ))
  

  const handleSearch = (searchText) => {
    let newCatalogueData = [...catalogueData];
    newCatalogueData = newCatalogueData.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
    setCatalogueData(newCatalogueData);

    let newMoviesData = [...moviesData]
    newMoviesData = newMoviesData.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
    setMoviesData(newMoviesData)

    let newShowsData = [...showsData]
    newShowsData = newShowsData.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
    setMoviesData(newShowsData)

    let newAnimeData = [...animeData]
    newAnimeData = newAnimeData.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()));
    setMoviesData(newAnimeData)

  };
  return (
    <>
      <Header onSearch={handleSearch}/>
      {/* <BootstrapCarousel /> */}
      <Switch>
        <Route exact path="/"><Catalogue catalogueData={catalogueData} /></Route>
        <Route exact path="/movies"><Movies moviesData={moviesData} /></Route>
        <Route exact path="/shows"><Shows showsData={showsData} /></Route>
        <Route path="/anime"><Anime animeData={animeData} /></Route>
        <Route path="/movies/:name"><MoviePlayer/></Route>
      </Switch>
      
    </>
  );
};

export default App;
