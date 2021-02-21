import { useState } from 'react';
import './App.css';
import Row from "./Components/Row"
import requests from "./requests";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav"

function App() {

  return (
    <div className="app">
      <Nav></Nav>
      <Banner></Banner>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} ></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} ></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} ></Row>
      <Row title="NETFLIX ORIGIALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      ></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow ></Row>
      <Row title="Romence Movies" fetchUrl={requests.fetchRomanceMovies} ></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies} ></Row>
    </div>
  );
}

export default App;
