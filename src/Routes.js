import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import PropTypes from 'prop-types';
const Router = props => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

Routes.propTypes = {}

export default Router