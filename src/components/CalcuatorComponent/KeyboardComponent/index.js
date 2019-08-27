import React from 'react';
import {Key} from './KeyComponent';
import {BUTTONS} from '../../../constants/calculatorKeys';
import './style.scss';


export function Keyboard () {
    return (
        <div>
            {BUTTONS.map((item, id) => {
                return <Key value={item.value} key={id}/>
            })}
        </div>
    )
}
