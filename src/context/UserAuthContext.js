import { createContext, useContext, useEffect, useState } from "react";

import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
    const [users, setUsers] = useState({});

    function logIn(email,password){
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Auth', currentUser);
            setUsers(currentUser);
        });
        return () => {
            unsubscribe()
        }
    },[])

    return (
        <userAuthContext.Provider value={{ users, logIn }}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext)
}