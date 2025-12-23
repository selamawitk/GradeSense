import React,{createContext, useState, useEffect, Children} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({Children}) =>{

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const storedUser = JSON.parse(localStorage.getItem("user"));
        const storedToken = localStorage.getItem("token");

        if (storedUser && storedToken) {
            setUser(storedUser)
            setToken(storedToken)
        }
        setLoading(false)
    },[]);

    const login= (userData,token) =>{
        localStorage.setItem("user",JSON.stringify(userData))
        localStorage.setItem("token", token)
        setUser(userData)
        setToken(token)
    };

    const logout = () =>{
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser(null)
        setToken(null)
    };
    return (
        <AuthContext.Provider value={{user,token,login,logout, loading}}>
            {Children}
        </AuthContext.Provider>
    );
};
