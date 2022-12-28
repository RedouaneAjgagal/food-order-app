import CartItemData from "./CartItemsData";
import React, { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalPrice: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD__ITEM':
            let updatedItems = state.items.concat(action.item);
            const updatedTotalAmount = state.totalPrice + action.item.price * action.item.amount;
            const existingItemIndex = state.items.findIndex((sts) => sts.id === action.item.id)
            const existingCartItem = state.items[existingItemIndex];
            if (existingCartItem) {
                // const updatedItemsAmount = {
                //     ...existingCartItem,
                //     amount: existingCartItem.amount + action.item.amount
                // }
                // updatedItems = [...state.items];
                // updatedItems[existingItemIndex] = updatedItemsAmount;
                updatedItems = state.items.map((item) => {
                    if (item.id === action.item.id) {
                        return { ...item, amount: item.amount + action.item.amount }
                    } else {
                        return item
                    }
                });
            }
            return {
                items: [...updatedItems],
                totalPrice: updatedTotalAmount
            }
        case 'REMOVE__ITEM':
            const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
            const existingItem = state.items[existingCartItemIndex];
            const totalAmountUpdated = state.totalPrice - existingItem.price;
            let itemsUpdated;
            if (existingItem.amount === 1) {
                itemsUpdated = state.items.filter((item) => {
                    return item.id !== action.id;
                });
            } else {
                // const updatedItem = {...existingItem, amount: existingItem.amount - 1};
                // itemsUpdated = [...state.items];
                // itemsUpdated[existingCartItemIndex] = updatedItem;
                itemsUpdated = state.items.map((item) => {
                    if (item.id === action.id) {
                        return { ...item, amount: item.amount - 1}
                    } else {
                        return item
                    }
                });
            }
            return {
                items: [...itemsUpdated],
                totalPrice: totalAmountUpdated
            }
        default:
            return state;
    }
}

const InsideCartItemData = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    const addItemHandler = (item) => {
        dispatchCartAction({ type: 'ADD__ITEM', item: item });
    }
    const removeItemHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE__ITEM', id: id });
    }
    const data = {
        items: cartState.items,
        totalAmount: cartState.totalPrice,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return (
        <CartItemData.Provider value={data}>
            {props.children}
        </CartItemData.Provider>
    )
}
export default InsideCartItemData;