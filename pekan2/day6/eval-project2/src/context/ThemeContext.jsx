import { createContext, useReducer } from "react";
import { themeReducer, initialThemeState } from "../reducers/themeReducer";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(
    themeReducer,
    initialThemeState
  );

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
