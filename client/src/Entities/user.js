class User {
    #username
    #password
    #name
    #email
    #phoneNumber
    #address
    #age
    #type

    /*
    constructor(username, password, name, email, phoneNumber, address, age) {
        this.#username = username;
        this.#password = password;
        this.#name = name;
        this.#email = email;
        this.#phoneNumber = phoneNumber;
        this.#address = address;
        this.#age = age;
    }
    */

    constructor(name, email, type) {
        this.#name = name;
        this.#email = email;
        this.#type = type;
    }

    getUsername() { return this.#username; }
    getPassword() { return this.#password; }
    getName() { return this.#name; }
    getEmail() { return this.#email; }
    getPhoneNumber() { return this.#phoneNumber; }
    getAddress() { return this.#address; }
    getAge() { return this.#age; }
    getType() { return this.#type; }

    setUsername(newUsername) { this.#username = newUsername; }
    setPassWord(newPassword) { this.#password = newPassword; }
    setName(newName) { this.#name = newName; }
    setEmail(newEmail) { this.#email = newEmail; }
    setPhoneNumber(newPhoneNumber) { this.#phoneNumber = newPhoneNumber; }
    setAddress(newAddress) { this.#address = newAddress; }
    setAge(newAge) { this.#age = newAge; }
    setType(newType) { this.#type = newType; }

    toString() { return `Name: ${this.#name} | Email: ${this.#email}`}

    
    toFirestore() {
        return {
            name: this.#name,
            email: this.#email,
            type: this.#type
        }
    }

    static fromFirestore(Object) {
        return new User(
            Object.name,
            Object.email,
            Object.type,
        );
    }

    /*
    toFirestore() {
        return {
            username: this.#username,
            password: this.#password,
            name: this.#name,
            email: this.#email,
            phoneNumber: this.#phoneNumber,
            address: this.#address,
            age: this.#age
        }
    }

    static fromFirestore(Object) {
        return new User(
            Object.username,
            Object.password,
            Object.name,
            Object.email,
            Object.phoneNumber,
            Object.address,
            parseInt(Object.age)
        );
    }
    */
}

exports.User = User;