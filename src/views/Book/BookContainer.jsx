/* eslint-disable react/prop-types */
import React, { memo } from 'react'
import {
    Card,
    CardBody,
    Img,
    Divider,
    Button,
    Text,
    Container,
    Skeleton
} from '@chakra-ui/react'
import {ArrowBackIcon} from '@chakra-ui/icons'
import CardInfo from '../../components/CardInfo'
import default_image from '../../assets/default_book_img.png'
import useImageLoading from '../../hooks/useImageLoading'
import { useNavigate } from 'react-router-dom'

const BookContainer = memo(function BookContainer(props) {
    const { book,resetData } = props
    const image = book?.covers?.[0] ? 
        `https://covers.openlibrary.org/b/id/${book?.covers?.[0]}.jpg` : default_image
    const navigate = useNavigate()
    const {imgRef,imageLoaded,handleImageLoaded} = useImageLoading()

    return (
        <Card my={10}>
            <CardBody>
                <Button onClick={()=>{
                    navigate(-1)
                    resetData()
                }} 
                variant="solid" 
                colorScheme="blackAlpha"
                >
                    <ArrowBackIcon mx={2}/>
                    <Text>
                    Volver
                    </Text>  
                </Button>
                <Skeleton 
                    p={'10'} 
                    my={'10'} 
                    height={'full'}  
                    isLoaded={imageLoaded}
                >
                    <Img
                        src={image}
                        ref={imgRef}
                        alt="Green double couch with wooden legs"
                        borderRadius="lg" 
                        onLoad={handleImageLoaded}     
                        width={'56'}
                        mx={'auto'}
                        my={10}
                    />
                </Skeleton>
                <Divider />
                <Container>
                    <CardInfo book={book} />
                    <Divider />
                    <CardInfo 
                        book={book} 
                        author 
                    />
                </Container>
            </CardBody>
        </Card>
    )
})

export default BookContainer
