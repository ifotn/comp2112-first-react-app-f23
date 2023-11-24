import { logout } from "../services/AuthService";

function Logout() {
    const handleLogout = async() => {
        try {
            // call api to remove Http Only cookie with JWT
            const response = await logout();

            // clear session var
            sessionStorage.removeItem('username');

            // redirect home
            window.location.href = '/';
        }
        catch (error) {
            console.log(`Logout error: ${error}`);
        }
    }

    // execute logout handler
    handleLogout();

    // empty jsx return (required)
    return (<></>);
}

export default Logout;