import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import PasswordField from '../components/PasswordField';
import { v4 as uuidv4 } from 'uuid';
import { TbHelpHexagon } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useStateContext } from '../components/Context/ContextProvider';
import axiosClient from '../components/AxiosClient';

const Main = () => {
    const { user } = useStateContext();
    const [passwordFields, setPasswordFields] = useState([]);
    const [showPasswordFields, setShowPasswordFields] = useState(false);
    const [helpText, setHelpText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosClient.post('/show', { user_id: user.id });
                const passwordsFromServer = response.data.passwords;
                setPasswordFields(passwordsFromServer.map(password => ({ id: uuidv4(), value: password })));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [user.id]);

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

    const toggleHelpText = () => {
        setHelpText(helpText ? "" : "Here you can save your passwords, or change it if you want to. To edit click the slide");
    };

    return (
        <div>
            <div className='min-h-screen bg-white dark:bg-custom-black'>
                <Header />
                <div className="flex justify-end px-3 mt-2">
                    <TbHelpHexagon className="text-4xl cursor-pointer hover:text-oraange" onClick={toggleHelpText} />
                    {helpText && (
                        <span className="ml-2 dark:text-white text-lg">{helpText}</span>
                    )}
                </div>

                <ul className='indicator'>
                    <span className="indicator-item badge badge-secondary"></span>
                    <Link to="/RPG" className="px-2 text-xl">Random Password Generator</Link>
                </ul>

                <div className="flex justify-center mt-10">
                    <button className="btn btn-primary  text-lg btn-outline" onClick={togglePasswordFields}>Show Passwords</button>
                </div>

                {showPasswordFields && passwordFields.length > 0 && (
                    <div className="flex justify-center mt-5 space-x-4 flex-wrap">
                        {passwordFields.map((field, index) => (
                            <React.Fragment key={field.id}>
                                <PasswordField
                                    id={field.id}
                                    value={field.value}
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
