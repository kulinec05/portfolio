import { DatePicker } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <NavLink to='about'>about</NavLink>
            <NavLink to='myprojects'>myprojects</NavLink>
        </div>
    );
}

export default Home;
