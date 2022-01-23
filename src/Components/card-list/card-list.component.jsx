import React from 'react';
import {CardSingle} from "../card-single/card-single.component";

import './card-list.style.css';

export const CardList = props => {

    return <div className='card-list'>
        {
            props.monsters.map(monster =>
                <CardSingle key={monster.id} monster={monster}/>
            )
        }
    </div>;
}
