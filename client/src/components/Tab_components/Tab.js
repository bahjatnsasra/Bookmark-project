import React , {useState , useEffect} from 'react';
import Categories from '../Category_components/categories'

function Tab({tab}) {

    let [categories,setCategories] = useState([])
    useEffect(() => {
        fetch(`/categories/${tab}`)
        .then(categories => categories.json())
        .then(data => {setCategories(data)})
    },[categories])

    if (!categories) {
        return <div>loading...</div>
    }else{
        return <div><Categories categories = {categories}/></div>
    }
}

export default Tab