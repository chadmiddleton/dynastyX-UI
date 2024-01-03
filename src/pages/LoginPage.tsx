import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {apiUrl} from "../config";

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post(`${apiUrl}/login`, {username, password});
            const {token} = response.data;

            // Store the token in local storage or state (replace with your preferred method)
            localStorage.setItem('token', token);

            // Redirect to the account page
            navigate('/account');
        } catch (error) {
            console.error('Login failed:', error);
            // Handle login error
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <div>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginPage;