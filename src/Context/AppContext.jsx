import React, { createContext, useState } from "react"
export const AppContext = React.createContext()


export default function AppContextProvider({ children }) {
    const [state, setState] = useState()
    const [state2, setState2] = useState()
  
      const [isAuth,setIsAuth]=useState(false)
const toggleAuth= ()=>{

    setIsAuth(true)

}


    return (
        <div>
            <AppContext.Provider value={{ state, setState,state2, setState2,isAuth,setIsAuth,toggleAuth}}>
                {children}
            </AppContext.Provider>

        </div>
    )
}