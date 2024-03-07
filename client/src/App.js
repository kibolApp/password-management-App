import { useState } from 'react';
import PasswordStrengthMeter from './components/PasswordStrengthMeter';

function App() {
  const [password, setPassword] = useState('');

  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="col-md-6 text-center mx-auto">
        <h3 className="text-center my-5 text-5xl">Agatka Cybersekiurity</h3>
        <div className="form-group mb-1">
          <input
            type="password"
            className="form-control shadow-none my-4 px-4 py-3 rounded-lg border border-gray-300"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className='my-4'>
          <PasswordStrengthMeter password={password} />
        </div>
      </div>
    </div>
  );
}

export default App;