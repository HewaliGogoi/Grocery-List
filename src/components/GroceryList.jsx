import React from 'react';

const GroceryList = (props) => {
    const {list, del} = props;

    return (
        <>
            {list.map(({items, key}) => <div key = {key}>
                <button onClick = {() => del(key)}>DELETE</button> 
                <p>{items}</p> 
                </div>)}
        </>
    )
}

export default GroceryList;