import React from 'react';

import './modal.styles.scss';

const Modal = ({ selectedImg, setSelectedImg }) => {
    const handleClick = event => {
        if(event.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }

    return (
        <div className='backdrop' onClick={handleClick}>
            <img src={selectedImg} alt='enlarge pic' />
        </div>
    )
}

export default Modal;