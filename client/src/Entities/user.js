class User {
    #id
    #username
    #name
    #email
    #phoneNumber
    #address
    #age
    #type

    constructor(id, name, email, type) {
        this.#id = id;
        this.#username = null;
        this.#name = name;
        this.#email = email;
        this.#phoneNumber = null;
        this.#address = null;
        this.#age = null;
        this.#type = type;
    }

    getId() {return this.#id;}
    getUsername() { return this.#username; }
    getName() { return this.#name; }
    getEmail() { return this.#email; }
    getPhoneNumber() { return this.#phoneNumber; }
    getAddress() { return this.#address; }
    getAge() { return this.#age; }
    getType() { return this.#type; }

    setUsername(newUsername) { this.#username = newUsername; }
    setName(newName) { this.#name = newName; }
    setEmail(newEmail) { this.#email = newEmail; }
    setPhoneNumber(newPhoneNumber) { this.#phoneNumber = newPhoneNumber; }
    setAddress(newAddress) { this.#address = newAddress; }
    setAge(newAge) { this.#age = newAge; }
    setType(newType) { this.#type = newType; }

    toString() { return `Name: ${this.#name} | Email: ${this.#email} | Type: ${this.#type}`}

    toFirestore() {
        return {
            username: this.#username,
            name: this.#name,
            email: this.#email,
            phoneNumber: this.#phoneNumber,
            address: this.#address,
            age: this.#age,
            type:this.#type
        }
    }

    static fromFirestore(Object) {
        let user = new User(Object.name, Object.email, Object.type);
        user.setUsername(Object.username);
        user.setPhoneNumber(Object.phoneNumber);
        user.setAddress(Object.address);
        user.setAge(parseInt(Object.age));

        return user;
    }
}

exports.User = User;