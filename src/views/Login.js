function Login() {
    return (
        <div className="container">
            <h1>Login</h1>
            <form>
                <fieldset className="pb-3">
                   <label htmlFor="username">Username:</label> 
                   <input name="username" />
                </fieldset>
                <fieldset className="pb-3">
                   <label htmlFor="password">Password:</label> 
                   <input name="password" type="password" />
                </fieldset>
                <button className="btn btn-info offset-2">Login</button>
            </form>
        </div>
    );
}

export default Login;