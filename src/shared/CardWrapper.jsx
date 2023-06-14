/* eslint-disable react/prop-types */
import React from 'react'
import {Card,CardBody} from '@chakra-ui/react'

const CardWrapper = ({children}) => {
    return (
        <Card display={'flex'} justifyContent={'center'} my={5}>
            <CardBody>
                {children}
            </CardBody>
        </Card>
    )
}

export default CardWrapper

