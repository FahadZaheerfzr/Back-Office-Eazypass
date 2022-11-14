import React ,{ createContext, useReducer } from "react";
import ManagerReducer from "./ManagerReducer";

const initialState = {
    fixed: true
}

export const ManagerContext = createContext(initialState);

export const ManagerProvider = ({children}) => {
    const [state, dispatch] = useReducer(ManagerReducer, initialState);
    function setClick() {
        dispatch({
          type: 'SET_CLICK',
        })
      }
    return (
        <ManagerContext.Provider value={{
            fixed:state.fixed, setClick
        }}>
            {children}
        </ManagerContext.Provider>
    )

}