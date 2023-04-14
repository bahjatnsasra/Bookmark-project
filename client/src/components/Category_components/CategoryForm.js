import React , {useState} from 'react';

function CategoryForm({tabs, onClose }) {
    const [inputValue,setInputValue] = useState('')
    const [tabValue,setTabValue] = useState('')

    let category = {
        "tab" : tabValue,
        "categoryName" : inputValue
    }

    function addNewCategory() {
        if (category.categoryName != '') {
            fetch('/category', {
                method: 'POST',
                body: JSON.stringify(category),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            onClose()
        }
    }
    
    return (
        <div>
            <h2>Tab</h2>
            <div>
                <select onChange={(e) => setTabValue(e.target.value)}>
                    {tabs.map(t => <option value={`${t.tabName}`}>{t.tabName}</option>)}
                </select>
            </div>
            <br/>
            <h2>Add New Category</h2>
            <input value={inputValue} 
            onChange={(e) => {setInputValue(e.target.value)}} 
            className='newValueInput' 
            type="text" 
            placeholder='Category Name'/>
            <div className='btnContainer'>
                <button onClick={addNewCategory} className='btnPrimary'><span className='bold'>Save</span></button>
            </div>
        </div>
    )
}

export default CategoryForm