import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import OrderHistory from '../pages/order-history/OrderHistory'

import Detail from '../pages/detail/Detail';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} exact/>
            <Route path='/login' element={<Login />}/>
            <Route path='/lich-su-dat-mon' element={<OrderHistory />}/>
            <Route path='/ho-chi-minh/an-vat-mr-phuong-duong-so-19' element={<Detail/>}/>
        </Routes>
    )
}

export default Router