import React , {useEffect,useState} from 'react';
import Bookmarks from '../Bookmark_components/bookmarks'
import './categories.css'



function Category({category}) {

    let [bookmarks,setBookmarks] = useState([])
    useEffect(() => {
        fetch(`/bookmarks/${category}`)
        .then(categories => categories.json())
        .then(data => {setBookmarks(data)})
    },[])

    return (
        <div>
            <div className='categoryContainer'>
                <h1>{category}</h1>
                <Bookmarks bookmarks = {bookmarks}/>
            </div>
        </div>
    )
}

export default Category