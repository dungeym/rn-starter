import React, { useState, useReducer } from "react";
import { StyleSheet, View } from "react-native";
import ColourCounter from "../components/ColourCounter";

const CHANGE_RED = 'change_red';
const CHANGE_GREEN = 'change_green';
const CHANGE_BLUE = 'change_blue';

const SquareScreen = () => {
    const COLOUR_STEP = 25;

    // useState
    // const [red, setRed] = useState(128);
    // const [green, setGreen] = useState(128);
    // const [blue, setBlue] = useState(128);
    // onIncrease={() => setRed(setColour(red, COLOUR_STEP))} onDecrease={() => setRed(setColour(red, -1 * COLOUR_STEP))}

    // useReducer    
    const [state, dispatch] = useReducer(reducer, { red: 128, green: 128, blue: 128 });
    const { red, green, blue } = state;

    return (
        <View>
            <ColourCounter onIncrease={() => dispatch({ type: CHANGE_RED, payload: COLOUR_STEP })} onDecrease={() => dispatch({ type: CHANGE_RED, payload: -1 * COLOUR_STEP })} colour='Red' />
            <ColourCounter onIncrease={() => dispatch({ type: CHANGE_GREEN, payload: COLOUR_STEP })} onDecrease={() => dispatch({ type: CHANGE_GREEN, payload: -1 * COLOUR_STEP })} colour='Green' />
            <ColourCounter onIncrease={() => dispatch({ type: CHANGE_BLUE, payload: COLOUR_STEP })} onDecrease={() => dispatch({ type: CHANGE_BLUE, payload: -1 * COLOUR_STEP })} colour='Blue' />
            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></View>
        </View>
    )
};

const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number}
    // action === {type: 'change_red', payload: number}

    switch (action.type) {
        case CHANGE_RED:
            if (state.red + action.payload <= 255 && state.red + action.payload >= 0) {
                return { ...state, red: state.red + action.payload };
            }
        case CHANGE_GREEN:
            if (state.green + action.payload <= 255 && state.green + action.payload >= 0) {
                return { ...state, green: state.green + action.payload };
            }
        case CHANGE_BLUE:
            if (state.blue + action.payload <= 255 && state.blue + action.payload >= 0) {
                return { ...state, blue: state.blue + action.payload };
            }
        default:
            return state;
    }
};

// const setColour = (colour, step) => {
//     if(colour + step > 255)
//     {
//         return 255;
//     }
//     else if(colour + step < 0)
//     {
//         return 0;
//     }

//     return colour + step;
// };

const styles = StyleSheet.create({});

export default SquareScreen;