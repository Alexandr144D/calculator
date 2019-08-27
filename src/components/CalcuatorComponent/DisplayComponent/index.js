import React, {useContext} from 'react';
import {Context} from "../../../context";
import './style.scss';


export function Display() {
    const context = useContext(Context);

    return (
        <div className='display'>{context.isWorking ? context.displayValue : ""}</div>
    )
}
