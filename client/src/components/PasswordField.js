import React, { useState, useEffect } from 'react';
import axiosClient from '../components/AxiosClient';

const PasswordField = ({ id, value, removePasswordField, primary }) => {
    const userId = document.cookie
        .split("; ")
        .find((row) => row.startsWith("user_id="))
        ?.split("=")[1];

    const [isEditable, setIsEditable] = useState(false);
    const [showId, setShowId] = useState(false);
    const [password, setPassword] = useState(value);
    const [originalPassword, setOriginalPassword] = useState(value);

    useEffect(() => {
        setPassword(value);
    }, [value]);

    const handleInputChange = (e) => {
        setPassword(e.target.value);
    };

    const toggleId = () => {
        setShowId(!showId);
    };

    const openModal = () => {
        document.getElementById('delete_password_modal').showModal();
    };

    const copyToClipboard = () => {
        const input = document.createElement('input');
        input.value = password;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
    };

    const updatePasswordInDatabase = async (newPassword, oldPassword) => {
        try {
            await axiosClient.post(`/update`, { user_id: userId, newpassword: newPassword, oldpassword: oldPassword });
        } catch (error) {
            console.error('Error updating password:', error);
        }
    };

    const passwordToShow = password.trim() !== "" ? password : "No Password";

    const handleEditFinish = () => {
        console.log('Password has been changed');
        console.log('Old password:', originalPassword);
        console.log('New password:', password);
        updatePasswordInDatabase(password, originalPassword);
        setOriginalPassword(password);
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
                    <button className="btn btn-circle bottom-3 right-3 absolute" onClick={copyToClipboard}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                        </svg>
                    </button>
                </h2>
                {isEditable ? (
                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered input-info w-full max-w-xs"
                        value={password}
                        onChange={handleInputChange}
                        onBlur={handleEditFinish}
                    />
                ) : (
                    <textarea className="textarea" placeholder="" disabled>{passwordToShow}</textarea>
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
                            <button className="btn btn-primary" onClick={() => { removePasswordField(id); document.getElementById('delete_password_modal').close() }}>Delete</button>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default PasswordField;
