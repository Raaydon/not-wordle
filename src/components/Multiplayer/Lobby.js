import React from "react";
import "./Multiplayer.css";
import { TextField, Button } from "@mui/material";
import socket from "../socketio";

function startGame() {
    console.log('test')
    socket.emit('start-game', {
        name: 'test',
    })
}

export default function Lobby() {
  const playerList = socket.emit('fetchUserList',{})
  console.log(playerList)
  return (
    <div className="lobby">
      <h2 className="lobby-title">
        Game Code: <span className="code-txt">{}</span>
      </h2>
      <h2
        style={{ fontSize: "1rem", marginTop: "-20px" }}
        className="loading-text"
      >
        Waiting for players
      </h2>
      <div className="player-list">
        {Object.keys(playerList).map(function (key, index) {
          return (
            <div className="player-list-item" key={index}>
              {key}
            </div>
          );
        })}
      </div>
      <Button
        className="start-game-btn"
        variant="contained"
        onClick={() => {
          startGame();
        }}
      >
        Start game
      </Button>
    </div>
  );
}
