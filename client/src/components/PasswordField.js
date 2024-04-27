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
                    <p>{password}</p>
                )}
                <div className="card-actions justify-end">
                    <div className="absolute top-3 right-3">
                        <button className="btn btn-circle" onClick={removePasswordField}>
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
            </div>
        </div>
    );
};

export default PasswordField;
