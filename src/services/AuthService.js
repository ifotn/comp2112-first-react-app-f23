const apiUrl = 'https://blog-demo-jwt.onrender.com/api';

// login method => post username/password to api, receive JWT if successful
const login = async(credentials) => {
    try {
        // set up Login POST request to server api
        const response = await fetch(`${apiUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials),
            //credentials: 'include'  // automatically pass the cookie on all requests
        });

        console.log(response);
        // check response from fetch call
        if (response.ok) {
            // token we get back stored in HttpOnly cookie.  visible in browser but not from code           
            return response.json();
        }
        else {
            throw new Error('Invalid Credentials');
        }
    }
    catch (error) {
        console.log(error.message)
        throw error;
    }
};

export { login };