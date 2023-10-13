// add User prop to this page; a user should be passed any time this loads
function Home(User) {
    return (
        <section className="container">
            <h1>Welcome to our First React App, {User.displayName}</h1>
            <p>We're building this for COMP2112.</p>
        </section>
    );
}

export default Home;