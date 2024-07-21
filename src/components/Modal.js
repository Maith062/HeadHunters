import React, { useState } from 'react';
import './Modal.css'; 

const Modal = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>x</button>
                <div className="modal-body" style={{ overflowY: 'auto', maxHeight: '80vh' }}>
                    {children}
                </div>
            </div>
        </div>
    );
};


export default Modal;
