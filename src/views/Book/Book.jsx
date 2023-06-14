import React, { useContext, useEffect } from 'react'
import { BookContext } from '../../context/BookProvider'
import { useParams } from 'react-router-dom'
import { Container } from '@chakra-ui/react'
import CardWrapper from '../../shared/CardWrapper'
import Loader from '../../components/Spinner'
import BookContainer from './BookContainer'
import TitleText from '../../shared/TitleText'

const Book = () => {
    const {id} = useParams()
    const { state, getBook,resetData} = useContext(BookContext)
    const {loading,book} = state

    useEffect(() => {
        getBook(`/works/${id}.json`)
        return () => {}
    }, [])


    return (
        <Container 
            minH={'100vh'} 
            display={'flex'} 
            alignItems={'center'} 
            justifyContent={'center'}
        >
            {
                loading &&
                    <CardWrapper>
                        <Loader/>
                    </CardWrapper>
            }
            {
                !loading && book && 
                    <BookContainer resetData={resetData} book={book}/>
            }
            {
                !loading && !book && 
                    <CardWrapper>
                        <TitleText
                            styles={{ textAlign: 'center', fontSize: '4xl', my: 10 }}
                            content="Opps algo salio mal"
                        />
                    </CardWrapper>
            }
        </Container>
    )
}

export default Book
