export const initialCartState = {
  totalItems: 0,
};

export function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { totalItems: state.totalItems + 1 };

    case "REMOVE_ITEM":
      return { totalItems: Math.max(0, state.totalItems - 1) };

    case "CLEAR_CART":
      return { totalItems: 0 };

    default:
      return state;
  }
}
