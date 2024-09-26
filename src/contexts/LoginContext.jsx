import React, {useState, createContext} from "react";

export const LoginContext = createContext();
export const LoginContextProvider = ({children}) => {
    const [authedUser, setAuthedUser] = useState(true)

    return <LoginContext.Provider value={{authedUser, setAuthedUser}}>
        {children}
    </LoginContext.Provider>
}