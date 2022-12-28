// import style from './Products.module.css';
import Item from './Item';
import React from 'react';
import { products } from '../../data/products';
export const itemData = React.createContext();
const Products = () => {
    const mealsList = products.map((meal) => {
        return (
            <itemData.Provider key={meal.id} value={meal}>
                <Item />
            </itemData.Provider>
        )
    });
    return (
        <ul>
            {mealsList}
        </ul>
    )
}
export default Products;