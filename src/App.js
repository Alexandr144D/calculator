import React, {useReducer} from 'react';
import './App.scss';
import {Context} from "./context";
import {Calculator} from './components/CalcuatorComponent';
import {reducer} from "./reducer";
import {initialState} from './reducer/initialState'

function App () {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="App">
            <Context.Provider value={{...state, dispatch}}>
                <Calculator />
            </Context.Provider>
        </div>
    );
}

export default App;
