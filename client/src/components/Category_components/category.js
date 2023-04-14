import React , {useEffect,useState} from 'react';
import Bookmarks from '../Bookmark_components/bookmarks'
import BookmarkForm from '../Bookmark_components/BookmarkForm';
import Modal from '../Category_components/Modal'

import './category.css'



function Category({category}) {


    let [bookmarks,setBookmarks] = useState([])
    const [bookmarkModal, setBookmarkModal] = useState(false);


    function bookmarkForm() {
        return <BookmarkForm onClose={() => setBookmarkModal(false)} category ={category}/>
    }
    
    useEffect(() => {
        fetch(`/bookmarks/${category}`)
        .then(categories => categories.json())
        .then(data => {setBookmarks(data)})
    },[bookmarks])

    return (
        <div>
            <div className='categoryContainer'>
            <button onClick={() => setBookmarkModal(true)} class="bookmark_button">Add Bookmark</button>
            <Modal open={bookmarkModal} onClose={() => setBookmarkModal(false)} form = {bookmarkForm}/>
                <h1>{category}</h1>
                <Bookmarks category = {category} bookmarks = {bookmarks}/>
            </div>
        </div>
    )
}

export default Category