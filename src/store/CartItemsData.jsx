import React from "react";
const CartItemData = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (() => {}),
    removeItem: (() => {})
});
export default CartItemData;