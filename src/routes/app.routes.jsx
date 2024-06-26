import { Routes, Route } from 'react-router-dom';

import { NewNote } from '../pages/NewNote';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Details } from '../pages/Details';

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/new' element={<NewNote />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/details/:id' element={<Details />} />
        </Routes>
    )
}