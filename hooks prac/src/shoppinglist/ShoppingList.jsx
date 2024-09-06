import React, { useReducer, useState } from 'react'

function ShoppingList() {

    const [itemState, setItemState] = useState('');
    const [itemqty, setItemqty] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null); // Tracks the index of the item being edited

    const initialState = {
        items: []
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'ADD_ITEM':
                return {
                    ...state, items: [...state.items, { name: action.payload.name, quantity: action.payload.quantity }]
                };
            case 'REMOVE_ITEM':
                return {
                    ...state, items: state.items.filter((_, index) => index !== action.payload.index)
                };
            case 'EDIT_ITEM':
                return state;
            case 'UPDATE_ITEM':
                const updatedItems = [...state.items];
                updatedItems[action.payload.index] = { name: action.payload.name, quantity: action.payload.quantity };
                return {
                    ...state, items: updatedItems
                };
            default:
                return state;
        }
    }

    const handleAddItem = () => {
        if (itemState && itemqty) {
            dispatch({ type: "ADD_ITEM", payload: { name: itemState, quantity: itemqty } });
            setItemState("");
            setItemqty("");
        }
    }

    const handleEdit = (index) => {
        const item = state.items[index];
        setItemState(item.name);
        setItemqty(item.quantity);
        setIsEditing(true);
        setCurrentIndex(index); // Set the current index being edited
    }

    const handleUpdateItem = () => {
        if (itemState && itemqty) {
            dispatch({ type: "UPDATE_ITEM", payload: { index: currentIndex, name: itemState, quantity: itemqty } });
            setItemState("");
            setItemqty("");
            setIsEditing(false);
            setCurrentIndex(null); // Reset the index after updating
        }
    }

    const handleToRemove = (index) => {
        dispatch({ type: "REMOVE_ITEM", payload: { index } });
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <div>
                <input type="text" value={itemState} placeholder='Item name' onChange={(e) => setItemState(e.target.value)} />
                <input type="text" value={itemqty} placeholder='quantity' onChange={(e) => setItemqty(e.target.value)} />
                {isEditing ? (
                    <button onClick={handleUpdateItem}>Update Item</button>
                ) : (
                    <button onClick={handleAddItem}>Add Item</button>
                )}
            </div>
            <div>
                <ul>
                    {state.items.map((item, index) => (
                        <li key={index}>
                            Added item {item.name} with {item.quantity}
                            <button onClick={() => handleEdit(index)}>Edit Item</button>
                            <button onClick={() => handleToRemove(index)}>Remove Item</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ShoppingList;
