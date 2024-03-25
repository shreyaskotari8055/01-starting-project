import { createContext } from "react";

export const CartContecxt = createContext({
    items : [],
    addItemsToCart : () => {},
    updateItemQuantity : () => {},
});

