import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Player.css';

const Player = ({ player }) => {
  const { img, name, Salary } = player;
  return (
    <div className="col-md-4 g-3 player">
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{Salary} USD</Card.Text>
          <Button variant="">Hire Player</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Player;
