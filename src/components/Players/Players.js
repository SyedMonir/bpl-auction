import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Player from '../Player/Player';
import './Players.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const Players = () => {
  const [players, setPlayers] = useState([]);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/SyedMonir/bpl-auction/main/public/players.json'
    )
      // fetch('players.json')
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  //   console.log(players);

  return (
    <section id="players">
      <div className="container">
        <div className="row">
          {players.map((player) => (
            <Player key={player.id} player={player}></Player>
          ))}
        </div>
      </div>
      <div id="cart" onClick={openModal}>
        🛒 <sup>0</sup>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      ></Modal>
    </section>
  );
};

export default Players;
