import { closestCenter, DndContext } from "@dnd-kit/core";
import { arrayMove, horizontalListSortingStrategy, SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable";
import React, { useState } from "react";
import { CSS } from "@dnd-kit/utilities";

export const DndKit = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            value: "Shahariar"
        },
        {
            id: 2,
            value: "Shahariar1"
        },
        {
            id: 3,
            value: "Shahariar2"
        },
    ])


    return (
        <>
            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={(event) => {
                    const { active, over } = event;

                    setTasks((task) => {
                        const newIndex = task.indexOf(over.id);
                        const oldindex = task.indexOf(active.id);
                        return arrayMove(task, oldindex, newIndex)
                    })
                }}
            >
                <SortableContext
                    items={tasks}
                    strategy={verticalListSortingStrategy}
                >
                    {tasks.map((task) => (
                        <SortableItem
                            key={task.id}
                            id={task}
                        />

                    ))}
                </SortableContext>
            </DndContext>
        </>


    )
};

const SortableItem = ({ id }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }
    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {id.value}

        </div>
    )

}