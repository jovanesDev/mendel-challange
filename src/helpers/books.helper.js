export const filterBooks = (arr, params) => {
    return arr.filter((book) => params.every((prop) => book[prop]))
}

export const newBookObjWithLessValues = (arr) => {
    return arr.map(({first_publish_year,author_name,title,key})=> {
        const author = Array.isArray(author_name) ? author_name[0] : author_name
        if(!first_publish_year || !author || !title || !key) return
        return {
            first_publish_year,
            author_name:author,
            title,
            key
        }
    })
}


export const shortTitle = (text,maxLength) => {
    return  text.length > maxLength ? text.slice(0, maxLength) + '...' : text
}