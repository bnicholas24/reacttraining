import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
 
    return (
        <div className="sidebar">
            <Link to='/'><div>Form</div></Link>
            <Link to='/products'><div>Products</div></Link>
        </div>
    )
}
export default Sidebar;