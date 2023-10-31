import React from 'react';
import { Info } from '../info/info';
import { Button } from '../button/button';
import { Gentleman } from '../gentleman/gentleman';
import { gentlemanData } from '../../data/data';

export function App() {
  console.log('Loaded Main 😺');

  return (
    <div className="container">
      <Info></Info>
      <Button></Button>
      <Gentleman cards={gentlemanData}></Gentleman>
      <p>Loaded Kitty 😺</p>
    </div>
  );
}
