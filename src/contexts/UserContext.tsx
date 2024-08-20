import { createContext, useState } from "react";

interface UserContextProps{
    username: string
    save: (user: string) => void
}

export const UserContext = createContext<UserContextProps | undefined>(undefined) 

export default function UserContextProvider({children}: any){
    const [name, setName] = useState<string>("")

    const contextValues: UserContextProps = {
        username: name,
        save: saveLoginUserToCache
    }

    function saveLoginUserToCache(user: string){
        setName(user)
    }

    return(
        <UserContext.Provider value={contextValues}>{children}</UserContext.Provider>
    )
}