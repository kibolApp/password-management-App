import React from 'react';
import zxcvbn from 'zxcvbn';

const PasswordStrengthMeter = ({ password }) => {
    const testResult = zxcvbn(password);
    const num = testResult.score * 100 / 4;

    const createPassLabel = () => {
        switch (testResult.score) {
            case 0:
                return 'Very weak';
            case 1:
                return 'Weak';
            case 2:
                return 'meh';
            case 3:
                return 'Good';
            case 4:
                return 'Strong';
            default:
                return '';
        }
    }

    const funcProgressColor = () => {
        switch (testResult.score) {
            case 0:
                return '#000000';
            case 1:
                return '#EA1111';
            case 2:
                return '#FFAD00';
            case 3:
                return '#9bc158';
            case 4:
                return '#00b500';
            default:
                return 'none';
        }
    }

    const changePasswordColor = () => ({
        width: `${num}%`,
        background: funcProgressColor(),
        height: '8px',
    })

    return (
        <>
            <div className="progress mt-20" style={{ height: '8px' }}>
                <div className="progress-bar" style={changePasswordColor()}></div>
            </div>
            <p className={`text-3xl text-custom-dark dark:text-white ${funcProgressColor()}`}>{createPassLabel()}</p>
        </>
    )
}

export default PasswordStrengthMeter