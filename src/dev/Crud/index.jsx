import React, { useState } from 'react'
import './styles.css'

export const Crud = () => {
    const [text, setText] = useState('');
    const [items, setItems] = useState([]);


    const submitHandler = (e) => {
        e.preventDefault();

        setItems([...items, text])


    }

    return (
        <>
            <form action="" onSubmit={submitHandler}>
                <label htmlFor="text">
                    added text
                    <input type="text" name='text' onChange={(e) => setText(e.target.value)} />
                    <button type="submit">added data</button>
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
                            >edit</button>
                            <button className="list-button delete-button">delete</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
