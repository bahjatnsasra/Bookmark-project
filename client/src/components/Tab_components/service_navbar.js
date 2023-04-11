import React from 'react';
import { Link } from 'react-router-dom';
import './service_navbar.css'




function ServiceNav() {
    return (<nav className="navbar">
            <div className="navbar-link">
                <Link to="/">Add Category</Link>
            </div>
            <div className="navbar-link">
                <Link to="/">Add Tab</Link>
            </div>
        </nav>)
}

export default ServiceNav