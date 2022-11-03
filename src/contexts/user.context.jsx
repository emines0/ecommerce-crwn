import { useState, useEffect } from 'react';
import { createContext } from 'react';
import { onAuthStateChangedListerner, createUserDocumentFromAuth } from '../utils/firebas.utils';
//as the actual value you want to access
export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState();
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListerner((user) => {
            if(user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user);
        })
    
        return unsubscribe
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
