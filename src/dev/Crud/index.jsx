import React, { useState } from 'react'
import './styles.css'
import { RandomId } from '../../Utils/Helper';
import { addData, deleteData } from '../../reduer/Crud';
import { useDispatch, useSelector } from 'react-redux';

export const Crud = () => {
    const [text, setText] = useState('');
    const [items, setItems] = useState([]);
    const [editIndex, setEditIndex] = useState(null)
    const [editMode, setEditMode] = useState(false)
    const crud = useSelector((state) => state.crud.crud);

    console.log(crud);
    const disPatch = useDispatch();


    const submitHandler = (e) => {
        e.preventDefault();
        disPatch(addData(RandomId(), text));
    }

    const deleteHandle = (id) => {
       disPatch(deleteData(id))
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
                    crud.map((item, index) => (
                        <li key={index} className="list-item">
                            <span>{item.value}</span>
                            <button
                                className="list-button edit-button"
                                onClick={(e) => handelEdit(item.id)}
                            >
                                edit
                            </button>
                            <button
                                className="list-button delete-button"
                                onClick={(e) => deleteHandle(item.id)}
                            >
                                delete
                            </button>
                        </li>
                    ))

                }
            </ul>
        </>
    )
}
