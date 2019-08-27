import * as type from './types';


export function reducer (state, action) {

    switch (action.type) {

        case type.TURN_OFF:
            console.log('turn me off')
            return {
                ...state,
                isWorking: false,
                operator: '',
                displayValue: 0,
                memory: 'not used',
                result: 0,
            };

        case type.SET_TO_DEFAULT:
            return {
                ...state,
                isWorking: true,
                operator: '',
                displayValue: 0,
                memory: 'not used',
                result: 0,
            };

        case type.SET_NUMBER:
            if (state.displayValue === 0) {
                return {...state, displayValue: action.payload};
            }
            if (state.displayValue > 0) {
                return {...state, displayValue: '' + state.displayValue + action.payload};
            }
            if (state.displayValue === "0.") {
                return {...state, displayValue: "0." + action.payload};
            }
            if (["+", "-", "*", "/"].includes(state.displayValue)) {
                return {...state, displayValue: action.payload}
            }

        case type.SET_OPERATOR:
            if (isNaN(state.displayValue)) {
                return {...state, operator: action.payload, displayValue: action.payload}
            }
            if (action.payload === '.' && state.displayValue === 0) {
                return {...state, displayValue: '0.'};
            }
            if (action.payload === '.') {
                if (String(state.displayValue).indexOf(".") === -1) {
                    if (["+", "-", "*", "/"].includes(state.displayValue)) {
                        return {...state}
                    }
                    return {...state, displayValue: state.displayValue + '.'};
                }
            }
            if (["+", "-", "*", "/"].includes(action.payload)) {
                if (action.payload === "+") {
                    if (state.memory === 'not used') {
                        return {
                            ...state,
                            displayValue: action.payload,
                            memory: state.displayValue,
                            result: state.displayValue,
                            operator: action.payload
                        };
                    } else {
                        if (state.operator === "=") {
                            return {
                                ...state,
                                displayValue: action.payload,
                                memory: state.displayValue,
                                result: state.displayValue,
                                operator: action.payload
                            };
                        }
                        if (state.operator === "+") {
                            return {
                                ...state,
                                displayValue: action.payload,
                                memory: Number(state.memory) + Number(state.displayValue),
                                result: Number(state.memory) + Number(state.displayValue),
                                operator: action.payload
                            };
                        }
                        if (state.operator === "-") {
                            return {
                                ...state,
                                displayValue: action.payload,
                                memory: Number(state.memory) - Number(state.displayValue),
                                result: Number(state.memory) - Number(state.displayValue),
                                operator: action.payload
                            };
                        }
                        if (state.operator === "*") {
                            return {
                                ...state,
                                displayValue: action.payload,
                                memory: Number(state.memory) * Number(state.displayValue),
                                result: Number(state.memory) * Number(state.displayValue),
                                operator: action.payload
                            };
                        }
                        if (state.operator === "/") {
                            return {
                                ...state,
                                displayValue: action.payload,
                                memory: Number(state.memory) / Number(state.displayValue),
                                result: Number(state.memory) / Number(state.displayValue),
                                operator: action.payload
                            };
                        }
                    }
                }
                if (action.payload === "-") {
                    if (state.memory === 'not used') {
                        return {
                            ...state,
                            displayValue: action.payload,
                            memory: state.displayValue,
                            result: state.displayValue,
                            operator: action.payload
                        };
                    } else {
                        if (state.operator === "=") {
                            return {
                                ...state,
                                displayValue: action.payload,
                                memory: state.displayValue,
                                result: state.displayValue,
                                operator: action.payload
                            };
                        }
                        if (state.operator === "+") {
                            return {
                                ...state,
                                displayValue: action.payload,
                                memory: Number(state.memory) + Number(state.displayValue),
                                result: Number(state.memory) + Number(state.displayValue),
                                operator: action.payload
                            };
                        }
                        if (state.operator === "-") {
                            return {
                                ...state,
                                displayValue: action.payload,
                                memory: Number(state.memory) - Number(state.displayValue),
                                result: Number(state.memory) - Number(state.displayValue),
                                operator: action.payload
                            };
                        }
                        if (state.operator === "*") {
                            return {
                                ...state,
                                displayValue: action.payload,
                                memory: Number(state.memory) * Number(state.displayValue),
                                result: Number(state.memory) * Number(state.displayValue),
                                operator: action.payload
                            };
                        }
                        if (state.operator === "/") {
                            return {
                                ...state,
                                displayValue: action.payload,
                                memory: Number(state.memory) / Number(state.displayValue),
                                result: Number(state.memory) / Number(state.displayValue),
                                operator: action.payload
                            };
                        }
                    }
                }
                if (action.payload === "*") {
                    if (state.memory === 'not used') {
                        return {
                            ...state,
                            displayValue: action.payload,
                            memory: state.displayValue,
                            result: state.displayValue,
                            operator: action.payload
                        };
                    } else {
                        if (state.operator === "=") {
                            return {
                                ...state,
                                displayValue: action.payload,
                                memory: state.displayValue,
                                result: state.displayValue,
                                operator: action.payload
                            };
                        }
                        if (state.operator === "+") {
                            return {
                                ...state,
                                displayValue: action.payload,
                                memory: Number(state.memory) + Number(state.displayValue),
                                result: Number(state.memory) + Number(state.displayValue),
                                operator: action.payload
                            };
                        }
                        if (state.operator === "-") {
                            return {
                                ...state,
                                displayValue: action.payload,
                                memory: Number(state.memory) - Number(state.displayValue),
                                result: Number(state.memory) - Number(state.displayValue),
                                operator: action.payload
                            };
                        }
                        if (state.operator === "*") {
                            return {
                                ...state,
                                displayValue: action.payload,
                                memory: Number(state.memory) * Number(state.displayValue),
                                result: Number(state.memory) * Number(state.displayValue),
                                operator: action.payload
                            };
                        }
                        if (state.operator === "/") {
                            return {
                                ...state,
                                displayValue: action.payload,
                                memory: Number(state.memory) / Number(state.displayValue),
                                result: Number(state.memory) / Number(state.displayValue),
                                operator: action.payload
                            };
                        }
                    }
                }
                if (action.payload === "/") {
                    if (state.memory === 'not used') {
                        return {
                            ...state,
                            displayValue: action.payload,
                            memory: state.displayValue,
                            result: state.displayValue,
                            operator: action.payload
                        };
                    } else {
                        if (state.operator === "=") {
                            return {
                                ...state,
                                displayValue: action.payload,
                                memory: state.displayValue,
                                result: state.displayValue,
                                operator: action.payload
                            };
                        }
                        if (state.operator === "+") {
                            return {
                                ...state,
                                displayValue: action.payload,
                                memory: Number(state.memory) + Number(state.displayValue),
                                result: Number(state.memory) + Number(state.displayValue),
                                operator: action.payload
                            };
                        }
                        if (state.operator === "-") {
                            return {
                                ...state,
                                displayValue: action.payload,
                                memory: Number(state.memory) - Number(state.displayValue),
                                result: Number(state.memory) - Number(state.displayValue),
                                operator: action.payload
                            };
                        }
                        if (state.operator === "*") {
                            return {
                                ...state,
                                displayValue: action.payload,
                                memory: Number(state.memory) * Number(state.displayValue),
                                result: Number(state.memory) * Number(state.displayValue),
                                operator: action.payload
                            };
                        }
                        if (state.operator === "/") {
                            return {
                                ...state,
                                displayValue: action.payload,
                                memory: Number(state.memory) / Number(state.displayValue),
                                result: Number(state.memory) / Number(state.displayValue),
                                operator: action.payload
                            };
                        }
                    }
                }
            }

        case type.SHOW_RESULT:
            if (state.memory === 'not used') {
                return {
                    ...state,
                    displayValue: action.payload,
                    memory: state.displayValue,
                    result: state.displayValue,
                    operator: action.payload
                }
            } else {
                if (state.operator === "+") {
                    return {
                        ...state,
                        displayValue: Number(state.memory) + Number(state.displayValue),
                        memory: Number(state.memory) + Number(state.displayValue),
                        result: Number(state.memory) + Number(state.displayValue),
                        operator: action.payload
                    };
                }
                if (state.operator === "-") {
                    return {
                        ...state,
                        displayValue: Number(state.memory) - Number(state.displayValue),
                        memory: Number(state.memory) - Number(state.displayValue),
                        result: Number(state.memory) - Number(state.displayValue),
                        operator: action.payload
                    };
                }
                if (state.operator === "*") {
                    return {
                        ...state,
                        displayValue: Number(state.memory) * Number(state.displayValue),
                        memory: Number(state.memory) * Number(state.displayValue),
                        result: Number(state.memory) * Number(state.displayValue),
                        operator: action.payload
                    };
                }
                if (state.operator === "/") {
                    return {
                        ...state,
                        displayValue: Number(state.memory) / Number(state.displayValue),
                        memory: Number(state.memory) / Number(state.displayValue),
                        result: Number(state.memory) / Number(state.displayValue),
                        operator: action.payload
                    };
                }
            }
            return {...state, displayValue: state.result}

        default:
            return state;
    }
}
