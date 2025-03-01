import React, { useState } from 'react';
import { setUserCookie } from "../../Authstore/AuthStore.js";

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!username.trim()) {
            setError("Username is required.");
            return;
        }

        setUserCookie(username);
        onLogin();
        setError('');
    };

    return (
        <div className={'flex flex-col p-4 '}>
            <h2 className={'mine-logo text-start text-xl '}>Login</h2>
            <label>
                Username:
            </label>

            <input
                type="text"
                placeholder="Enter username"
                className={'border-2 border-black rounded-md p-1 w-full'}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            {error && <p style={{color: "red", fontSize: "14px"}}>{error}</p>}

            <button onClick={handleLogin} disabled={!username.trim()}>
                Login
            </button>
        </div>
    );
};

export default Login;
