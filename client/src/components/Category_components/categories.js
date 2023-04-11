import React from 'react';
import Category from './category'
import './categories.css'


function Categories({categories}) {
    return (
        <div className='categoriesContainer' >
            {categories.map(c => <Category category = {c.categoryName}/>)}
        </div>
    )
}

export default Categories