import React from 'react';
import './test.css'

function Test(params) {
    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }
    
    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }

    function tabForm(params) {
        return (
            <div className="form-popup" id="myForm">
                <div class="form-container">
                    <h1>Login</h1>

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" required/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required/>

                    <button type="submit" class="btn">Login</button>
                    <button type="button" class="btn cancel" onClick={closeForm('none')}>Close</button>
                </div>
            </div>
        )
    }

    return (
        <div>
            <button class="open-button" onClick={() => openForm('block')}>Open Form</button>
            
        </div>
    )
}

export default Test