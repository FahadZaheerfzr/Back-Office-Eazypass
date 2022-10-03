import React from "react";



export default (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                rows: [action.payload, ...state.rows],
            }

        case 'REMOVE_ITEM':
            return {
                rows: state.rows.filter(item => item !== action.payload),
            }

        default:
            return state;
    }
}