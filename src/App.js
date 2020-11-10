import React, { useState } from 'react';
import './App.css';
import roboJSON from './robo.json'
// import Test from './Test';
import CardComponent from './CardComponent'

const App = () => {
  return (
    <>
      {/* <Test /> */}
      <CardComponent id={roboJSON[0].id} name={roboJSON[0].name} email={roboJSON[0].email} />
      <CardComponent id={roboJSON[1].id} name={roboJSON[1].name} email={roboJSON[1].email} />
      <CardComponent id={roboJSON[2].id} name={roboJSON[2].name} email={roboJSON[2].email} />
      <CardComponent id={roboJSON[3].id} name={roboJSON[3].name} email={roboJSON[3].email} />
      <CardComponent id={roboJSON[4].id} name={roboJSON[4].name} email={roboJSON[4].email} />
      <CardComponent id={roboJSON[5].id} name={roboJSON[5].name} email={roboJSON[5].email} />
      <CardComponent id={roboJSON[6].id} name={roboJSON[6].name} email={roboJSON[6].email} />
      <CardComponent id={roboJSON[7].id} name={roboJSON[7].name} email={roboJSON[7].email} />
    </>
  );
}


export default App;
