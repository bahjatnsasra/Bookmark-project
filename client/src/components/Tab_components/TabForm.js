import React , {useState} from 'react';


function TabForm({onClose}) {
    const [inputValue,setInputValue] = useState('')

    let tab = {
        "tabName" : inputValue,
    }

    function addNewTab() {
        if (tab.tabName != '') {
            fetch('/tabs', {
                method: 'POST',
                body: JSON.stringify(tab),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            onClose()
        }
    }

    return (
        <div>
            <h2>Add New Tab</h2>
            <input value={inputValue} 
            onChange={(e) => {setInputValue(e.target.value)}} 
            className='newValueInput' 
            type="text" 
            placeholder='Tab Name'/>
            <div className='btnContainer'>
                <button onClick={addNewTab} className='btnPrimary'><span className='bold'>Save</span></button>
            </div>
        </div>
    )
}

export default TabForm