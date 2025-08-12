import React, { useState } from 'react'
import './styles.css'

export const Crud = () => {
    const [text, setText] = useState('');
    const [items, setItems] = useState([]);
    const [editIndex, setEditIndex] = useState(null)
    const [editMode, setEditMode] = useState(false)


    const submitHandler = (e) => {
        e.preventDefault();
        if (text === "") {
            alert('Plz Enter A value');
            return;
        }
        console.log(editIndex);
        if (editIndex !== null) {
            const updateItem = [...items]
            updateItem[editIndex] = text
            setItems(updateItem)
            setEditIndex(null)

        } else {
            setItems([...items, text]);
        }

        setText("");

    }

    const deleteHandle = (id) => {
        const vaule = items.filter((item, index) => index !== id)
        setItems(vaule)
    }

    const handelEdit = (id) => {
        setEditIndex(id)
        setText(items[id])
        setEditMode(true)
    }

    return (
        <>
            <form action="" onSubmit={submitHandler}>
                <label htmlFor="text">
                    added text
                    <input
                        type="text"
                        name='text'
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                    />
                    <button type="submit">
                        {
                            editMode ? 'Update' : 'Add'
                        }
                    </button>
                </label>
            </form>
            <ul>
                {
                    items.map((item, index) => (

                        // console.log(item)
                        <li
                            key={index}
                            className="list-item"
                        >
                            <span>{item}</span>
                            <button
                                className="list-button edit-button"
                                onClick={(e) => handelEdit(index)}
                            >edit</button>
                            <button
                                className="list-button delete-button"
                                onClick={(e) => deleteHandle(index)}
                            >delete</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
