import { createContext, useState,useEffect } from "react";
import { apiKey } from '../spotifyApi/api.js';

export const SpotifyContext = createContext({
    token: "",
    isAuthenticated: false,
    login: () => { },
    tokenParser: () => {},
});

export default function SpotifyProvider({ children }) {
    const [token, setToken] = useState("");

    function handleLogin() {
        window.location.href = `http://www.last.fm/api/auth/?api_key=${apiKey}`
    }
    
    function tokenParser(hash) {
        setToken(hash);
    }

    const ctxValue = {
        token,
        isAuthenticated: token?true:false,
        login: handleLogin,
        tokenParser,
    }

    return (
        <SpotifyContext.Provider value={ctxValue}>
            {children}
        </SpotifyContext.Provider>
    )
}
