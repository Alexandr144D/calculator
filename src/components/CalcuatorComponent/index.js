import React from 'react';
import './style.scss';
import {Display} from './DisplayComponent';
import {Keyboard} from './KeyboardComponent';


export function Calculator() {
    return (
        <div className='calculator_wrapper'>
            <Display />
            <Keyboard />
        </div>
    )
}
