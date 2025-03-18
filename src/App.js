import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CardGrid from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <SearchBar />
        <h2 className="text-danger">
          10 All-Inclusive, Adults Only Resorts in Cancun and Playa del Carmen
        </h2>
        <p className="me-5">
          Whether you are looking to canoodle on Bali-beds surrounded by white
          sand, take advantage of bottomless margaritas from the swim-up bar or
          dance the night away with tempting new friends these resorts will see
          your wildest dreams fulfilled.{" "}
        </p>
        <CardGrid />
      </div>
    </div>
  );
}

export default App;
