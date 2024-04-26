import React, { useState } from 'react';
import Header from '../components/header';

const Main = () => {
    const [passwordFields, setPasswordFields] = useState([{ id: 1 }, { id: 2 }]);
    const [showPasswordFields, setShowPasswordFields] = useState(false);

    const togglePasswordFields = () => {
        setShowPasswordFields(!showPasswordFields);
    };

    const addPasswordField = () => {
        const newId = passwordFields.length + 1;
        setPasswordFields([...passwordFields, { id: newId }]);
    };

    const removePasswordField = (idToRemove) => {
        setPasswordFields(passwordFields.filter(field => field.id !== idToRemove));
    };

    return (
        <div>
            <div className='min-h-screen bg-white dark:bg-custom-black'>
                <Header />
                <div className="avatar flex justify-end">
                    <div className="w-24 mr-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Avatar" />
                    </div>
                </div>
                <div className="flex-1 px-2 mx-2 ">Password Manager</div>

                <div className="flex justify-center mt-10">
                    <button className="btn btn-primary  text-lg btn-outline" onClick={togglePasswordFields}>Show Passwords</button>
                </div>

                {showPasswordFields && (
                    <div className="flex justify-center mt-5 space-x-4 flex-wrap">
                        {passwordFields.map((field, index) => (
                            <React.Fragment key={field.id}>
                                <div className={`card w-96 mt-3 mb-3 ${index % 2 === 0 ? 'bg-primary text-primary-content' : 'bg-neutral text-neutral-content'}`}>
                                    <div className="card-body">
                                        <h2 className="card-title">Password Field {field.id}</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn" onClick={() => removePasswordField(field.id)}>Remove</button>
                                            <button className="btn">Edit</button>
                                        </div>
                                    </div>
                                </div>
                                {index !== passwordFields.length - 1 && <div className="divider divider-horizontal">X</div>}
                            </React.Fragment>
                        ))}
                    </div>
                )}

                {showPasswordFields && (
                    <div className="flex justify-center mt-5">
                        <button className="btn btn-primary text-lg btn-outline" onClick={addPasswordField}>+</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Main;
