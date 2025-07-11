import { useSortable } from '@dnd-kit/sortable'
import React from 'react'

export const Task = ({ id, title }) => {
    const { attributes, listeners, transform, setNodeRef, transition } = useSortable({ id })

    const style = {
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
        transition,
    };

    return (
        <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
            {title}
        </div>
    )
}


