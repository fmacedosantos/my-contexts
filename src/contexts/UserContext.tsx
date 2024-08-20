import { createContext } from "react";

interface UserContextProps{
    nome: string
}

export const UserContext = createContext<UserContextProps | undefined>(undefined) 

export default function UserContextProvider({children}: any){
    const contextValue = {nome: 'Felipão'}

    return(
        <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
    )
}