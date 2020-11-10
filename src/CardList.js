import React from 'react';
import { Container } from 'reactstrap';
import CardComponent from './CardComponent';

import roboJSON from './robo.json';

const CardList = () => {
    const cardMap = roboJSON.map((user, i) => {
        return (<CardComponent
            key={i}
            id={roboJSON[i].id}
            name={roboJSON[i].name}
            email={roboJSON[i].email}
        />)
    })
    return (
        <>
            <Container>
                {/* <div className="row col-12"> */}
                {cardMap}
                {/* </div> */}
            </Container>
        </>
    );
};

export default CardList;