/* eslint-disable react/prop-types */
import React from 'react'
import {Text} from '@chakra-ui/react'
const TitleText = (props) => {
    const {content,styles} = props
    return (
        <Text {...styles || null }>{content}</Text>
    )
}

export default TitleText