
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../views/Home/Home'
import List from '../../views/List/List'
import LogIn from '../../views/Login/Login'
import Curriculum from '../../views/Curriculum/Curriculum'


export default function CustomRutes(){
    return <Router >
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/list" element={<List />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="*" element={<div>Not found</div>} />
        </Routes>
    </Router>
}