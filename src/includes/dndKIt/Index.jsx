import { Table } from '@chakra-ui/react'
import React from 'react'

export const DndKit
    = () => {
        return (
            <>
                <Table.Root>
                    <Table.ColumnGroup>
                        <Table.Column htmlWidth="50%" />
                        <Table.Column htmlWidth="40%" />
                        <Table.Column />
                    </Table.ColumnGroup>
                    <Table.Row>
                        <Table.ColumnHeader>Product</Table.ColumnHeader>
                        <Table.ColumnHeader>Category</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>heelo</Table.Cell>
                        <Table.Cell>Category</Table.Cell>
                        <Table.Cell textAlign="end">120</Table.Cell>
                    </Table.Row>
                </Table.Root>
            </>
        )

    }
