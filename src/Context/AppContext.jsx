import React, { createContext, useState } from "react"
export const AppContext = React.createContext()


export default function AppContextProvider({ children }) {
    const [state, setState] = useState()
    const [state2, setState2] = useState()
    console.log(state2)
    return (
        <div>
            <AppContext.Provider value={{ state, setState,state2, setState2 }}>
                {children}
            </AppContext.Provider>

        </div>
    )
}