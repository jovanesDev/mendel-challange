import React, { useContext } from 'react'
import { BookContext } from '../context/BookProvider'
import { Box } from '@chakra-ui/react'
import CardWrapper from '../shared/CardWrapper'
import TitleText from '../shared/TitleText'
import Search from '../components/Search'
import Loader from '../components/Spinner'
import TableComponent from '../components/Table'

const Home = () => {
    const {
        state: { loading, books },
    } = useContext(BookContext)

    return (
        <Box
            minH={'100vh'}
            bg="gray.100"
            display={'flex'}
            flexDir={'column'}
            alignItems={'center'}
        >
            <Box minWidth={'50%'} display={'flex'} flexDirection={'column'}>
                <TitleText
                    styles={{ textAlign: 'center', fontSize: '4xl', my: 10 }}
                    content="Mendel Book Finder"
                />
                <Search />
                {loading && (
                    <CardWrapper>
                        <Loader />
                    </CardWrapper>
                )}
                {books && !loading && (
                    <CardWrapper>
                        {!loading && books.length > 0 && <TableComponent books={books} />}
                        {!loading && !books.length && (
                            <TitleText
                                styles={{ textAlign: 'center', fontSize: 'xl' }}
                                content="No results found !"
                            />
                        )}
                    </CardWrapper>
                )}
            </Box>
        </Box>
    )
}

export default Home
