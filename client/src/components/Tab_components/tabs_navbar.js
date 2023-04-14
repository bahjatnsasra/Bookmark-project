import React from 'react';
import { Link } from 'react-router-dom';
import './tabs_navbar.css'



function creatNavLink(tab,updateTabName) {
    return (
        <div className="navbar-link">
            <Link onClick={() => updateTabName(tab)} to={`/${tab}`}>{tab}</Link>
        </div>
    )
}

function TabNav({tabs,updateTabName}) {
    return (<nav className="tabs_navbar">
            <div className="navbar-link">
                <Link onClick={() => updateTabName('Main')} to="/Main">Main</Link>
            </div>
            {tabs.filter(tab => tab.tabName != "Main").map(tab => creatNavLink(tab.tabName,updateTabName))}
        </nav>)
}

export default TabNav