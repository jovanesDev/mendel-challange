import React from 'react'
import {
    Card,
    CardBody,
    HStack,
    Button,
    Input
} from '@chakra-ui/react'
import useSearch from '../hooks/useSearch'

const Search = () => {

    const {formik} = useSearch()
    
    return (
        <Card my={2}>
            <CardBody>
                <form onSubmit={formik.handleSubmit}>
                    <HStack spacing={5}>
                        <Input type='text' onChange={formik.handleChange} value={formik.values.search} name='search'/>
                        <Button disabled={!formik.isValid} size={'md'} px={10} colorScheme={formik.isValid ? 'blue' : 'gray'} type='submit'>Filtrar</Button>
                    </HStack>
                </form>
            </CardBody>
        </Card>
    )
}

export default Search