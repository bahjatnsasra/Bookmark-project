import React from 'react';
import '../Category_components/categories.css'
const LOGO_API = "https://api.kickfire.com/logo?website="

function Bookmark({bookmark}) {
    return (
        <div className='bookmarkContainer'>
            
            <img width={"30px"} height={"30px"} src={bookmark.icon} alt=''/>
            
            <a className='bookmarkLink' href={bookmark.link} target="_blank" rel="noreferrer">{bookmark.name}</a>
        </div>
    )
}

export default Bookmark