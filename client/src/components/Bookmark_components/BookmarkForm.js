import React , {useState} from 'react';


function BookmarkForm({category,onClose}) {
    const [bookmarkValue,setBookmarkValue] = useState('')
    const [urlValue,setUrlValue] = useState('')
    
    let bookmark = {
        "category" : category,
        "name" : bookmarkValue,
        "link" : urlValue,
        "icon" : ''
    }

    function addNewBookmark() {
        if (bookmark.name != '') {
            fetch('/bookmarks', {
                method: 'POST',
                body: JSON.stringify(bookmark),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            onClose()
        }
    }


    return (
        <div>
            <h2>Add New Bookmark</h2>
            <input value={bookmarkValue} 
            onChange={(e) => {setBookmarkValue(e.target.value)}} 
            className='newValueInput' 
            type="text" 
            placeholder='Bookmark Title'/>
            
            <h2>URL</h2>
            <input value={urlValue} 
            onChange={(e) => {setUrlValue(e.target.value)}} 
            className='newValueInput' 
            type="text" 
            placeholder='Bookmark URL'/>

            <div className='btnContainer'>
                <button onClick={addNewBookmark} className='btnPrimary'><span className='bold'>Save</span></button>
            </div>
        </div>
    )
}


export default BookmarkForm