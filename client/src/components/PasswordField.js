import React, { useState } from 'react';

const PasswordField = ({ id, removePasswordField, primary }) => {
    const [isEditable, setIsEditable] = useState(false);
    const [showId, setShowId] = useState(false);
    const [password, setPassword] = useState('');

    const handleInputChange = (e) => {
        setPassword(e.target.value);
    };

    const toggleId = () => {
        setShowId(!showId);
    };

    const openModal = () => {
        document.getElementById('delete_password_modal').showModal();
    };

    return (
        <div className={`card w-96 h-72 mt-3 mb-3 ${primary ? 'bg-primary text-primary-content' : 'bg-neutral text-neutral-content'}`}>
            <div className="card-body text-white">
                <h2 className="card-title">
                    Password
                    {showId ? ` ${id}` : ''}
                    <div className='absolute bottom-3 left-3'>
                        <button className="btn btn-sm ml-2" onClick={toggleId}>
                            {showId ? 'Hide ID' : 'Show ID'}
                        </button>
                    </div>
                </h2>
                {isEditable ? (
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-info w-full max-w-xs"
                        value={password}
                        onChange={handleInputChange}
                    />
                ) : (
                    <textarea className="textarea textarea-primary" placeholder="Password">{password}</textarea>
                )}
                <div className="card-actions justify-end">
                    <div className="absolute top-3 right-3">
                        <button className="btn btn-circle" onClick={openModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <label className="toggle toggle-success absolute">
                        <input type="checkbox" className="toggle toggle-success" checked={isEditable} onChange={() => setIsEditable(!isEditable)} />
                        <span className="toggle-mark"></span>
                    </label>
                </div>

                <dialog id="delete_password_modal" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Are you sure?</h3>
                        <p className="py-4">This action cannot be undone. Your password will be gone.</p>
                        <div className="modal-action">
                            <button className="btn" onClick={() => document.getElementById('delete_password_modal').close()}>Cancel</button>
                            <button className="btn btn-primary" onClick={() => { removePasswordField(); document.getElementById('delete_password_modal').close() }}>Delete</button>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default PasswordField;
