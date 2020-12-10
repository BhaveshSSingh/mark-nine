import React from "react";
import "./styles.css";
import { useState } from "react";

const showDB = {
  Movies: [
    { name: "WatchMen", rating: "10/10", type: "Horror" },
    { name: "Silence of the Lambs", rating: "10/10", type: "Horror" }
  ],
  Anime: [
    { name: "Attack On Titan", rating: "10/10", type: "Horror" },
    { name: "Hunter X Hunter", rating: "10/10", type: "Horror" }
  ],

  Shows: [
    { name: "WatchMen TV series", rating: "10/10", type: "Horror" },
    { name: "Hannibal", rating: "9/10", type: "Horror" },
    { name: "Dark", rating: "9/10", type: "Horror" }
  ]
};

export default function App() {
  const [selectGenre, setGenre] = useState("Anime");
  function showClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>The Best Tv📺</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        My recommendations for Good Tv Shows🎞️ ,Movies🎥 and Anime🍿
      </p>
      <hr />
      <div>
        {Object.keys(showDB).map((genre) => (
          <button
            onClick={() => showClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {" "}
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {showDB[selectGenre].map((show) => (
            <li
              key={show.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {show.name} </div>
              <div style={{ fontSize: "larger" }}> {show.type} </div>
              <div style={{ fontSize: "larger" }}> {show.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
