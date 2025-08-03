import React, { useState } from "react";
import {
    DndContext,
    closestCorners,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy, // use vertical for now
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const DndKit = () => {
    const [tasks, setTasks] = useState([
        { id: "1", title: "hello i am shahariar" },
        { id: "2", title: "hello i am sadiya" },
        { id: "3", title: "hello i am samiya" },
    ]);

    const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        const oldIndex = getTaskPos(active.id);
        const newIndex = getTaskPos(over.id);

        setTasks((prev) => arrayMove(prev, oldIndex, newIndex));
    };

    // Required sensors
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5, // how far pointer must move before dragging starts
            },
        })
    );

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragEnd={handleDragEnd}
        >
            <SortableContext
                items={tasks.map((task) => task.id)}
                strategy={verticalListSortingStrategy}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {tasks.map((task) => (
                        <SortableItem key={task.id} id={task.id} title={task.title} />
                    ))}
                </div>
            </SortableContext>
        </DndContext>
    );
};

// SortableItem component
const SortableItem = ({ id, title }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        background: isDragging ? "#e0f7fa" : "#f9f9f9",
        cursor: "grab",
        userSelect: "none",
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {title}
        </div>
    );
};
