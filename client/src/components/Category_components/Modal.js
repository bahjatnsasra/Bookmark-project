import React , {useState} from 'react';
import img from '../../images/img1.jpg';
import './Modal.css'


function Modal({ open, onClose ,form }) {

    if (!open) return null;
return (
    <div onClick={onClose} className='overlay'>
    <div
        onClick={(e) => {
        e.stopPropagation();
        }}
        className='modalContainer'
    >
        <img className='popUp_image' src={img} alt='/' />
        <div className='modalRight'>
        <p className='closeBtn' onClick={onClose}>
            X
        </p>
        <div className='content'>
            {form()}
        </div>
        
        </div>
    </div>
    </div>
);
}

export default Modal;