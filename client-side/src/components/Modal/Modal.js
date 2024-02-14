import React from 'react'
import avatar from "../assets/avatar.png";
import ReviewForm from './ReviewForm';

const Modal = ({ handleModal }) => {
    return (
        <div className="model">
            <div className="overlay"></div>
            <ReviewForm handleModal={handleModal} />
        </div >
    )
}

export default Modal