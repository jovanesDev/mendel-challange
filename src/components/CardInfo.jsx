/* eslint-disable react/prop-types */
import React from 'react'
import {Heading,Text,Stack} from '@chakra-ui/react'
const CardInfo = (props) => {
    const {book,author} = props
    return (
        <Stack mt="2" spacing='2'>
            <Heading size='md'>{ author ? 'Author Name'  : 'Title'}</Heading>
            <Text>
                { !author ?book.title || '-' : book.author_info?.name || '-'}
            </Text>
            <Heading  size='sm'>{!author ? 'First Publish Year' : 'Author Bio'}</Heading>
            <Text color={!author ? 'blue' : 'black'}>
                {!author ?  book.first_publish_year || '-' : book.author_info?.bio || '-' }
            </Text>
            { !author &&
            <>
                <Heading size='sm'>Description</Heading>
                <Text>
                    {book.description || '-'}
                </Text>
            </>  
            }
        </Stack>
    )
}

export default CardInfo