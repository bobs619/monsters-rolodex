import React from 'react';
import { Card } from '../card/card';
import './cardList.css';

export const CardList = props => (
<div className='card-list'>
    {props.monsters.map(x=><Card key={x.id} monster={x} bob={props.cardClick} />)}
</div>
);
  
