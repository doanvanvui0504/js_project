class User {
    email
    password
    status

    constructor(email, password, status) {
        this.email = email
        this.password = password
        this.status = status
    }

    setStatus(status) {
        this.status = status
    }
}

export default User