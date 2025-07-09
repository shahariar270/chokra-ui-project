import { List, ListItem, ListRoot, Table } from '@chakra-ui/react'
import { DndContext, useDroppable } from '@dnd-kit/core'
import React, { useState } from 'react'

export const DndKit = (


) => {
    const [droppedItem, setDroppedItem] = useState(null);


    const data = [
        {
            id: 1,
            value: 'wakeup at 6 am'
        },
        {
            id: 2,
            value: 'cutting grass'
        },
        {
            id: 3,
            value: 'out cow form '
        },
        {
            id: 4,
            value: 'hellp'
        },
    ]
    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (over && over.id === 'droppable') {
            setDroppedItem(active.id);
            console.log(`${active.id} dropped into ${over.id}`);
        }
    };
    return (
        <>
            <DndContext onDragEnd={handleDragEnd}>
                <Drag data={data} />
                <Droppable id="droppable">
                    {droppedItem ? <p>Dropped: {droppedItem}</p> : <p>Drop here</p>}
                </Droppable>
            </DndContext>
        </>


    )

}


export const Drag = ({ data }) => {

    return (
        <>
            {data.map((item) => (
                <div
                    key={item.id}
                    id={item.id}
                    draggable="true"
                    style={{
                        padding: '10px 20px',
                        margin: '10px',
                        border: '1px solid #ccc',
                        background: 'white',
                        borderRadius: '4px',
                        cursor: 'grab',
                    }}
                >
                    <li>{item.value}</li>
                </div>
            ))}
        </>
    )
}

function Droppable({ id, children }) {
    const { setNodeRef, isOver } = useDroppable({ id });

    const style = {
        width: 200,
        height: 150,
        backgroundColor: isOver ? '#c8f7c5' : '#f0f0f0',
        border: '2px dashed #ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px'
    };

    return (
        <div ref={setNodeRef} style={style}>
            {children}
        </div>
    );
}
