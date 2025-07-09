import React, { useState } from 'react';
import {
    DndContext,
    useDraggable,
    useDroppable,
} from '@dnd-kit/core';

export default function DndKit() {
    const [dropped, setDropped] = useState(null);

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (over && over.id === 'drop-zone') {
            setDropped(active.id);
        }
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 40 }}>
                <Draggable id="cow-task" />
                <Droppable id="drop-zone">
                    {dropped ? <strong>Dropped: {dropped}</strong> : 'Drop here'}
                </Droppable>
            </div>
        </DndContext>
    );
}

function Draggable({ id }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

    const style = {
        transform: transform
            ? `translate(${transform.x}px, ${transform.y}px)`
            : undefined,
        padding: '10px 20px',
        backgroundColor: '#90cdf4',
        border: '2px solid #3182ce',
        borderRadius: '8px',
        cursor: 'grab',
        userSelect: 'none',
    };

    return (
        <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
            {id}
        </div>
    );
}

function Droppable({ id, children }) {
    const { setNodeRef, isOver } = useDroppable({ id });

    const style = {
        width: 200,
        height: 150,
        backgroundColor: isOver ? '#f6ffe0' : '#edf2f7',
        border: '2px dashed #a0aec0',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
    };

    return (
        <div ref={setNodeRef} style={style}>
            {children}
        </div>
    );
}
