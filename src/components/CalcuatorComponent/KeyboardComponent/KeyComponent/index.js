import React from 'react';
import './style.scss';
import {Context} from "../../../../context";
import * as type from './../../../../reducer/types';
import {operator} from './../../../../constants/operators'
import {numbers} from './../../../../constants/numbers'

export function Key (props) {
    const {dispatch} = React.useContext(Context);

    async function dispatchValue () {
        if (props.value === 'Off') {
            return dispatch({type: type.TURN_OFF})
        }
        if (props.value === 'C') {
            return dispatch({type: type.SET_TO_DEFAULT})
        }
        if (numbers.includes(props.value)) {
            return dispatch({type: type.SET_NUMBER, payload: props.value})
        }
        if (operator.includes(props.value)) {
            return dispatch({type: type.SET_OPERATOR, payload: props.value})
        }
        if (props.value === "=") {
            return dispatch({type: type.SHOW_RESULT, payload: props.value})
        }
    }

    return (
        <button
            onClick={dispatchValue}
            className={
                `key-button ${["+", "-", "*", "/"].includes(props.value) ?
                    "operator-key" : ["="].includes(props.value) ?
                        "equal-key" : ["√", "%", "."].includes(props.value) ?
                            "grey-background" : ["C", "Off"].includes(props.value) ?
                                "system-keys" : null}`
            }
        >
            {props.value}
        </button>
    )
}
