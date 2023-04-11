import React from 'react';
import Bookmark from '../Bookmark_components/bookmark'
import '../Category_components/categories.css'


function Bookmarks({bookmarks}) {
    return (
        <ul class="bookmark-list">
            {bookmarks.map(b => <li><Bookmark bookmark = {b}/></li>)}
        </ul>
    )
}

export default Bookmarks