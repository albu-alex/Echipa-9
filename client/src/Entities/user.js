class User {
    #id;
    #username;
    #name;
    #email;
    #phoneNumber;
    #address;
    #age;
    #type;

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

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }

    get username() {
        return this.#username;
    }

    set username(value) {
        this.#username = value;
    }

    get name() {
        return this.#name;
    }

    set name(value) {
        this.#name = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }

    get phoneNumber() {
        return this.#phoneNumber;
    }

    set phoneNumber(value) {
        this.#phoneNumber = value;
    }

    get address() {
        return this.#address;
    }

    set address(value) {
        this.#address = value;
    }

    get age() {
        return this.#age;
    }

    set age(value) {
        this.#age = value;
    }

    get type() {
        return this.#type;
    }

    set type(value) {
        this.#type = value;
    }

    // getId() {return this.#id;}
    // getUsername() { return this.#username; }
    // getName() { return this.#name; }
    // getEmail() { return this.#email; }
    // getPhoneNumber() { return this.#phoneNumber; }
    // getAddress() { return this.#address; }
    // getAge() { return this.#age; }
    // getType() { return this.#type; }
    //
    // setUsername(newUsername) { this.#username = newUsername; }
    // setName(newName) { this.#name = newName; }
    // setEmail(newEmail) { this.#email = newEmail; }
    // setPhoneNumber(newPhoneNumber) { this.#phoneNumber = newPhoneNumber; }
    // setAddress(newAddress) { this.#address = newAddress; }
    // setAge(newAge) { this.#age = newAge; }
    // setType(newType) { this.#type = newType; }

    toString() { return `Name: ${this.#name} | Email: ${this.#email}`}

    // ! check default id in firebase

    toFirestore() {
        // this.#username = "placinta";
        return {
            username: this.#username,
            name: this.#name,
            email: this.#email,
            phoneNumber: this.#phoneNumber,
            address: this.#address,
            age: this.#age,
            type: this.#type
        }
    }

    static fromFirestore(Object) {
        let user = new User(Object.name, Object.email, Object.type);
        user.username = Object.username;
        user.phoneNumber = Object.phoneNumber;
        user.address = Object.address;
        user.age = parseInt(Object.age);

        return user;
    }
}

exports.User = User;