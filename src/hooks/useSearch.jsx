import {useFormik} from 'formik'
import { searchValidationSchema } from '../validation/search.validation'
import { useContext } from 'react'
import { BookContext } from '../context/BookProvider'
const useSearch = () => {

    const {getBooks} = useContext(BookContext)
    
    const formik = useFormik({
        initialValues: {
            search: '',
        },
        onSubmit: values => {
            let {search} = values
            search = search.replace(/\s+/g, '+')
            getBooks(`/search.json?q=${search}`)
        },
        validationSchema:searchValidationSchema,
        validateOnMount:true
    })
    
    return {
        formik
    }
}

export default useSearch