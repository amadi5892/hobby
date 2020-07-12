import React from 'react';
import Pic from './Pic';

function Card(props) {
    return (
        <div class="card">
            <Pic 
            img={props.img}/>
            <h2 class="hobby">My favorite hobby is {props.hobby}</h2>
            <p class="descript">{props.description}</p>
        </div>
    )
}

export default Card