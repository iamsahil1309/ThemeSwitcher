import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    // initial state
    themeMode : 'light',
    darkMode: () => {},
    lightMode : () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}