export const initialThemeState = {
  theme: "light",
};

export function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
}
