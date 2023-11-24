import React, { useState } from 'react';
import { login } from '../services/AuthService';

function Login() {
    // state vars for form inputs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // event handler for Login button
    const handleLogin = async () => {
        /*console.log(`Button clicked: ${username} / ${password}`);
        console.log(document.cookie);*/
        try {
            // call api to log user in, if successful, store username in session storage & redirect to blog
            const response = await login({ username, password })

            sessionStorage.setItem('username', response.user.username);
            window.location.href = '/blog';
        }
        catch (error) {
            console.log(`Login failure: ${error.message}`);
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <fieldset className="pb-3">
                <label htmlFor="username">Username:</label> 
                <input name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </fieldset>
            <fieldset className="pb-3">
                <label htmlFor="password">Password:</label> 
                <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </fieldset>
            <button className="btn btn-info offset-2" onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;