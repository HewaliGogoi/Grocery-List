import React from 'react';

const GroceryInput = (props) => {
    const {addItem, addList, item} = props;

    return (
        <>
            <input value = {item} placeholder="Type the item" onChange = {(e) => addItem(e)}/>
            <button onClick = {() => addList()}>ADD</button>
        </>
    )
}

export default GroceryInput;