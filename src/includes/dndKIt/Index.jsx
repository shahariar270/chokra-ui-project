import { closestCorners, DndContext } from '@dnd-kit/core'
import { arrayMove, SortableContext } from '@dnd-kit/sortable'
import React, { useState } from 'react'
import { Column } from './Column'

export const DndKit = () => {
    const [task, setTask] = useState([
        { id: 1, title: 'hello i am shahariar' },
        { id: 2, title: 'hello i am sadiya' },
        { id: 3, title: 'hello i am samiya' },
    ])

    const getTaskPos = (id) => task.findIndex((task) => task.id === id);

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (active.id === over.id) return;

        setTask((task) => {
            const originalPos = getTaskPos(active.id);
            const newPos = getTaskPos(over.id);

            return arrayMove(task, originalPos, newPos);
        });
    };

    return (
        <DndContext
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}
        >

            <Column task={task} />
        </DndContext>
    )
}
