import React, { createContext, useState } from "react"
export const AppContext = React.createContext()


export default function AppContextProvider({ children }) {
    const [state, setState] = useState()
    console.log(state)
    return (
        <div>
            <AppContext.Provider value={{ state, setState }}>
                {children}
            </AppContext.Provider>

        </div>
    )
}