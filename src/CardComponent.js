import React from 'react';
import './CardComponent.css';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


const CardComponent = ({ id, name, email }) => {
  return (
    <>
      <Card className="cardComp hvr-grow shadow bg-info mt-5 ">
        <CardImg className="cardImage1" src={`https://robohash.org/robo${id}`} alt="Robot Picture" />
        <CardBody className="cb">
          <CardTitle tag="h5">{name}</CardTitle>
          <CardText >{email}</CardText>
        </CardBody>
      </Card>
    </>
  );
};

export default CardComponent;