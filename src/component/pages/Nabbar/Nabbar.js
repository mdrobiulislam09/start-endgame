import React from 'react';
import { Link } from 'react-router-dom';

const Nabbar = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">

                <div className="navbar-start">

                </div>
                <div className="navbar-center">
                    <div className="btn-group">
                        <Link to='/'><button className="btn btn-lg">Home</button></Link>
                        <Link to='/media'><button className="btn btn-lg">Media</button></Link>
                        <Link to='/message'><button className="btn btn-lg">Message</button></Link>
                        <Link to='/about'><button className="btn btn-lg">About</button></Link>   
                    </div>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </div>
    );
};

export default Nabbar;