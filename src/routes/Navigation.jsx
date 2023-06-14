import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Books from '../views/Home'
import Book from '../views/Book/Book'


const Navigation = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Books/>}/>
                <Route path='/works/:id' element={<Book/>}/>
            </Routes>
        </Router>
    )
}

export default Navigation
