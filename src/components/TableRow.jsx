/* eslint-disable react/prop-types */
import React from 'react'
import {Tr,Td,Icon} from '@chakra-ui/react'
import {ViewIcon} from '@chakra-ui/icons'
import { shortTitle } from '../helpers/books.helper'
import { useNavigate } from 'react-router-dom'

const TableRow = ({author_name,title,first_publish_year,id}) => {

    const navigate = useNavigate()

    return (
        <Tr>
            <Td>{author_name}</Td>
            <Td>{shortTitle(title,24)}</Td>
            <Td>{first_publish_year}</Td>
            <Td 
                textAlign={'center'}
            >
                <Icon 
                    onClick={()=>navigate(`${id}`)}
                    color={'blue.500'} 
                    fontSize={'2xl'} 
                    cursor={'pointer'} 
                    as={ViewIcon}
                />
            </Td>
        </Tr>
    )
}

export default TableRow