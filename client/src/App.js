import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import PasswordStrengthMeter from './components/PasswordStrengthMeter';

function App() {
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <div className="h-screen flex justify-center items-center bg-white dark:bg-custom-black">
      <div className="col-md-6 text-center ">
        <h3 className="my-5 text-5xl">
          <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-6xl">Agatka Cybersekiurity</span>
        </h3>
        <div>
          <h1 className='text-center text-black dark:text-white my-2 mt-4 text-2xl'>check the strength of your password!</h1>
        </div>
        <div className="form-group relative mb-1">
          <input
            type={hidePassword ? "password" : "text"}
            className="form-control shadow-none my-4 px-4 py-3 rounded-lg border text-black border-gray-300 relative"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            className="absolute inset-y-0 right-36 transform translate-x-1/2 flex items-center justify-center px-2"
            onClick={togglePasswordVisibility}
          >
            {hidePassword ? <EyeOffIcon className="h-6 w-6 text-gray-800" /> : <EyeIcon className="h-6 w-6 text-gray-800" />}
          </button>
        </div>
        <div className='my-4'>
          <PasswordStrengthMeter password={password} />
        </div>
      </div>
    </div>
  );
}

export default App;
