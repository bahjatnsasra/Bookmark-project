import React , {useState , useEffect} from 'react';
import Categories from '../Category_components/categories'

function Tab({tab}) {

    let [tabData,setTabData] = useState([])
    useEffect(() => {
        fetch(`/categories/${tab}`)
        .then(categories => categories.json())
        .then(data => {setTabData(data)})
    },[tab])

    if (!tabData.categories) {
        return <div>loading...</div>
    }else{
        return <div><Categories categories = {tabData.categories}/></div>
    }
}

export default Tab