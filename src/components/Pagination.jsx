/* eslint-disable react/prop-types */
import React from 'react'
import {
    Pagination,
    usePagination,
    PaginationPage,
    PaginationNext,
    PaginationPrevious,
    PaginationPageGroup,
    PaginationContainer,
    PaginationSeparator,
} from '@ajna/pagination'
import {Text} from '@chakra-ui/react'

const PaginationComponent = (props) => {
    const {books,handlePageChange} = props
    const {
        pages,
        pagesCount,
        currentPage,
        setCurrentPage,
        isDisabled,
    } = usePagination({
        total: books.length,
        limits: {
            outer: 2,
            inner: 2
        },
        initialState: {
            pageSize: 5,
            isDisabled: false,
            currentPage: 1
        }
    })

    const handlePaginationPageChange = (nextPage) => {
        setCurrentPage(nextPage)
        handlePageChange(nextPage)
    }

    return (
        <Pagination
            pagesCount={pagesCount}
            currentPage={currentPage}
            isDisabled={isDisabled}
            onPageChange={handlePaginationPageChange}
        >
            <PaginationContainer
                align="start"
                justify="space-evenly"
                mx={'auto'}
                w="100%"
            >
                <PaginationPrevious
                    w={8}
                    _hover={{
                        bg: 'blue.400',
                    }}
                >
                    <Text>{'<'}</Text>
                </PaginationPrevious>
                <PaginationPageGroup
                    align="center"
                    separator={
                        <PaginationSeparator
                            bg="blue.300"
                            fontSize="sm"
                            w={7}
                        />
                    }
                >
                    {pages.map((page) => (
                        <PaginationPage
                            w={8}
                            key={`pagination_page_${page}`}
                            page={page}
                            fontSize="sm"
                            _hover={{
                                bg: 'blue.400',
                            }}
                            _current={{
                                bg: 'blue.400',
                                fontSize: 'sm',
                                w: 8,
                            }}
                        />
                    ))}
                </PaginationPageGroup>
                <PaginationNext
                    _hover={{
                        bg: 'blue.400',
                    }}
                >
                    <Text>{'>'}</Text>
                </PaginationNext>
            </PaginationContainer>
        </Pagination>
    )
}

export default PaginationComponent
