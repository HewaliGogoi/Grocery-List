import React from 'react';
import GroceryInput from './GroceryInput';
import GroceryList from './GroceryList';
import { v4 as uuid } from 'uuid';

const Grocery = () => {
    const [item, setItem] = React.useState('');
    const [list, setList] = React.useState([]);

    const addItem = (e) => {
        console.log(e)
        setItem(e.target.value)
    }

    const addToList = () => {
        const obj = {
            items : item,
            key : uuid()
        }
        setList([...list, obj])
        setItem('');
    }

    const del = (key) => {
        setList(list.filter((el) => el.key != key))
    }

    return (
        <>
            <h1>Grocery List</h1>
            <GroceryInput item = {item} addList = {addToList} addItem = {addItem}/>
            <GroceryList list = {list} del = {del}/>
        </>
    )
}

export default Grocery;