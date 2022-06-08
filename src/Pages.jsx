import React from 'react';

import { Route, Routes } from 'react-router-dom';

// import Loading from './Loading';
import Homepage from './Homepage';
import TourDetail from './TourDetail';
import ToursList from './ToursList';
const Pages = ({ tours }) => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/Tourslist' element={<ToursList />} />
            <Route path='/Tour-Detail/:id' element={<TourDetail tours={tours} />} />
        </Routes>
    )
}

export default Pages;