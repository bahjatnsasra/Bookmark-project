import React from 'react';
import Bookmark from '../Bookmark_components/bookmark'
import './Bookmarks.css'


function Bookmarks({bookmarks,category}) {

    function deleteBookmark(bookmarkId,category) {
        let bookmark = {
            "Id" : bookmarkId,
            "category" : category
        }
        fetch('/bookmark', {
            method: 'DELETE',
            body: JSON.stringify(bookmark),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }
    console.log(bookmarks);
    return (
        <ul class="bookmark-list">
            {bookmarks.map(b => <li><Bookmark bookmark = {b}/> <button onClick={() => deleteBookmark(b._id,category)} className='deleteBookmark'>X</button></li>)}
        </ul>
    )
}

export default Bookmarks