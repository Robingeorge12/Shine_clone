import { Children, useContext } from "react"
import { Navigate } from "react-router-dom"
import { AppContext } from "../Context/AppContext"

export default function Private({children})
{
    const {isAuth} = useContext(AppContext)
if(!isAuth)
{
    return <Navigate to="/login" />
}
return children

    
}