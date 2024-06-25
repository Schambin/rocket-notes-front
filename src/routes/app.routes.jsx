import {Routes, Route } from 'react-router-dom';

import { NewNote } from '../pages/NewNote';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Details } from '../pages/Details';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/New' element={<NewNote />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Details/:id' element={<Details />} />
        </Routes>
    )
}