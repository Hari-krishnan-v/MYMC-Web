import React, { useState } from 'react';
import { setUserCookie } from '../../Authstore/AuthStore.js';
import { LoaderCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async () => {
        if (!username.trim()) {
            setError('Username is required.');
            return;
        }
        setLoading(true);
        try {
            const res = await axios.post('http://localhost:5000/api/store/login', { username });
            if (res.status === 200) {
                localStorage.setItem('user', JSON.stringify(res.data.data));
                setLoading(false);
                navigate('/home');
            }
        } catch (err) {
            setLoading(false);
            if (err.response) {
                setError(err.response.data.error);
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className="flex flex-col p-4 ">
            <h2 className="mine-logo text-start text-xl">Login</h2>
            <div className="mt-3 flex flex-col gap-3">
                <label>Username:</label>
                <input
                    type="text"
                    placeholder="Enter username"
                    className="border-2 border-black rounded-[10px] p-1 w-full min-h-[40px] pl-3"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}
                <button
                    onClick={handleLogin}
                    disabled={!username.trim() || loading}
                    className="border h-[30px] relative overflow-hidden button-click-effect"
                >
                    {loading ? <LoaderCircle className="w-6 h-6 animate-spin mx-auto" /> : 'Continue'}
                </button>
            </div>
        </div>
    );
};

export default Login;
