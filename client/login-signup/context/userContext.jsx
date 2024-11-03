import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const userContext = createContext({})

export function userContextProvider({children}) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        if(!user) {
            axios.get('/profile').then(({data}) => {
                setUser(data)
            })
        }
    }, [])
    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    )
}