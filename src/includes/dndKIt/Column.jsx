import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import React from 'react'
import { Task } from './Task'

export const Column = ({ task }) => {
    return (
        <div>
            <SortableContext items={task} strategy={horizontalListSortingStrategy}>
                {
                    task.map(item =>(
                        <Task key={item.id} id={item.id} title={item.title} />
                        
                    ))
                }
            </SortableContext>
        </div>
    )
}
