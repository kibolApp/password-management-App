import React, { useState } from 'react';
import Header from '../components/header';
import PasswordField from '../components/PasswordField';
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
    const [passwordFields, setPasswordFields] = useState([{ id: 1 }, { id: 2 }]);
    const [showPasswordFields, setShowPasswordFields] = useState(false);

    const togglePasswordFields = () => {
        setShowPasswordFields(!showPasswordFields);
    };

    const addPasswordField = () => {
        if (passwordFields.length >= 7) return;
        const newId = uuidv4();
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
                                <PasswordField
                                    id={field.id}
                                    removePasswordField={() => removePasswordField(field.id)}
                                    primary={index % 2 === 0}
                                />
                                {(index + 2) % 2 === 0 && index !== passwordFields.length - 1 && <div className="divider divider-horizontal">X</div>}
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
