import { List, ListItem, ListRoot, Table } from '@chakra-ui/react'
import React from 'react'

export const DndKit = (

) => {

    const data = [
        {
            id:1,
            value:'wakeup at 6 am'
        },
        {
            id:2,
            value:'cutting grass'
        },
        {
            id:3,
            value:'out cow form '
        },
        {
            id:4,
            value:'hellp'
        },
    ]
    return (
        <>
        {
            data.map(item => (
                <>
                <ListRoot key={item.id}>
                    <ListItem>{item.value}</ListItem>
                </ListRoot>
                </>
            ))
        }

        </>
    )

}
