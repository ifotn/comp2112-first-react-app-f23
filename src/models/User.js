class User {
    /* constructor: the method that gets called to create a new instance of an object
    using the current class definition
    this object takes 2 input parameters and sets each to a property of the corresponding
    name
    */
    constructor(username, displayName) {
        this.username = username;
        this.displayName = displayName;
    }
}

export default User;