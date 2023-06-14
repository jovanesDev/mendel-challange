import  { useEffect, useState } from 'react'

const useDisplayedBooks = (books) => {
    const pageSize = 5
    const [displayedBooks,setDisplayedBooks] = useState([...books])
    const [startIndex,setStartIndex] = useState(0)
    const endIndex = startIndex + pageSize

    const handlePageChange = (nextPage) => {
        setStartIndex((nextPage - 1) * pageSize)
        setDisplayedBooks(books.slice(startIndex, endIndex))
    }

    useEffect(() => {
        setDisplayedBooks(books.slice(startIndex, endIndex))
        return () => {
            setDisplayedBooks([])
        }
    }, [startIndex])
    

    return {
        displayedBooks,
        handlePageChange
    }
}

export default useDisplayedBooks