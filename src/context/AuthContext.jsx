import { createContext,useState } from "react";

export const AuthContext = createContext();


export default function AuthContextProvier ({children}){

    const [login,setLogin]  = useState(false);
    const [data,setData] = useState({});


    const value = {

        login,
        setLogin,
        data,
        setData,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}



