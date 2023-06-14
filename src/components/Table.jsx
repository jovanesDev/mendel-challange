/* eslint-disable react/prop-types */
import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
    TableCaption

} from '@chakra-ui/react'
import TableRow from './TableRow'
import Pagination from './Pagination'
import useDisplayedBooks from '../hooks/useDisplayedBooks'

// eslint-disable-next-line react/display-name
const TableComponent = React.memo(function TableComponent (props){
    const {books} = props
    const { displayedBooks,handlePageChange } = useDisplayedBooks(books)
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>
                    <Pagination handlePageChange={handlePageChange} books={books}/>
                </TableCaption>
                <Thead>
                    <Tr>
                        <Th>Author</Th>
                        <Th>Title</Th>
                        <Th>Year</Th>
                        <Th>Learn More</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {displayedBooks.map((book)=> (
                        <TableRow key={book.key} id={book.key} {...book}/>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
})

export default TableComponent