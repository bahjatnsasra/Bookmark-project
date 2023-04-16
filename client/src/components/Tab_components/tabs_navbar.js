import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './tabs_navbar.css'

function deleteTab(tabName,navigate) {
    
    let tab = {
        "tab" : tabName
    }
    fetch('/tabs', {
        method: 'DELETE',
        body: JSON.stringify(tab),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    navigate('/')
}

function creatNavLink(tab,updateTabName,navigate) {
    return (
        <li className="navbar-link">
            <Link onClick={() => updateTabName(tab)} to={`/${tab}`}>{tab}</Link>
            <button onClick={() => deleteTab(tab,navigate)} className='deleteTap_btn'>x</button>
        </li>
    )
}



function TabNav({tabs,updateTabName}) {
    const navigate = useNavigate();
    return (
        <nav className="tabs_navbar">
            <ul className='nav_list'>
                <li className="navbar-link" >
                    <Link onClick={() => updateTabName('Main')} to="/Main">Main</Link>
                </li>
                {tabs.filter(tab => tab.tabName != "Main").map(tab => creatNavLink(tab.tabName,updateTabName,navigate))}
            </ul>
        </nav>
        )
}

export default TabNav