class User {
    #username;
    #password;
    #name;
    #email;
    #phoneNumber;
    #address;
    #age;

    constructor(username, password, name, email, phoneNumber, address, age) {
        this.#username = username;
        this.#password = password;
        this.#name = name;
        this.#email = email;
        this.#phoneNumber = phoneNumber;
        this.#address = address;
        this.#age = age;
    }

    getUsername() { return this.#username; };
    getPassword() { return this.#password; };
    getName() { return this.#name; };
    getEmail() { return this.#email; };
    getPhoneNumber() { return this.#phoneNumber; };
    getAddress() { return this.#address; };
    getAge() { return this.#age; };

    setUsername(newUsername) { this.#username = newUsername; };
    setPassWord(newPassword) { this.#password = newPassword; };
    setName(newName) { this.#name = newName; };
    setEmail(newEmail) { this.#email = newEmail; };
    setPhoneNumber(newPhoneNumber) { this.#phoneNumber = newPhoneNumber; };
    setAddress(newAddress) { this.#address = newAddress; };
    setAge(newAge) { this.#age = newAge; };

    toString() { return `User: ${this.#username} | Password: **** | Name: ${this.#name} | `};

    
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
}

exports.User = User;