import React from 'react';
import { Outlet } from 'react-router-dom';
import Nabbar from '../pages/Nabbar/Nabbar';

const Main = () => {
    return (
        <div>
            <Nabbar></Nabbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;