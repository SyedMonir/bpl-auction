import React, { useEffect, useState } from 'react';

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

  return <div></div>;
};

export default Players;
