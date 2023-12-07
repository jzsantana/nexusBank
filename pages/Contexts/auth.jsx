import React, {createContext, useState} from "react";
import nexusAPI from "../../services/api";

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [cpf, setCpf] =  useState('')
    const [account, setAccount] = useState('')
    const [token, setToken] = useState(null);

    return(
        <AuthContext.Provider value={{token, setToken, setNome, setCpf, cpf, nome}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider