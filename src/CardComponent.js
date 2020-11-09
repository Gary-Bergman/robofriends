import React from 'react';
import './CardComponent.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const CardComponent = (props) => {
  return (
    <>
      <Card className="cardComp hvr-grow">
        <CardImg className="cardImage1" src="https://robohash.org/robo1" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
         
        </CardBody>
      </Card>
    </>
  );
};

export default CardComponent;