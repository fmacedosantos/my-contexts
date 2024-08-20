import { createContext } from "react";

export const UserContext = createContext({}) 

export default function UserContextProvider({children}: any){
    const contextValue = {nome: 'Felipão'}

    return(
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    )
}