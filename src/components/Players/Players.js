import React, { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/SyedMonir/bpl-auction/main/public/players.json'
    )
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  console.log(players);

  return (
    <div className="container">
      <div className="row">
        {players.map((player) => (
          <Player key={player.id} player={player}></Player>
        ))}
      </div>
    </div>
  );
};

export default Players;
