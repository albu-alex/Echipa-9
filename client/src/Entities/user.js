class User {
    #id
    #name
    #email
    #phoneNumber
    #address
    #type

    constructor(id, name, email, type) {
        this.#id = id;
        this.#name = name;
        this.#email = email;
        this.#phoneNumber = null;
        this.#address = null;
        this.#type = type;
    }

    getId() {return this.#id;}
    getName() { return this.#name; }
    getEmail() { return this.#email; }
    getPhoneNumber() { return this.#phoneNumber; }
    getAddress() { return this.#address; }
    getType() { return this.#type; }

    setName(newName) { this.#name = newName; }
    setEmail(newEmail) { this.#email = newEmail; }
    setPhoneNumber(newPhoneNumber) { this.#phoneNumber = newPhoneNumber; }
    setAddress(newAddress) { this.#address = newAddress; }
    setType(newType) { this.#type = newType; }

    toString() { return `ID: ${this.#id} | Name: ${this.#name} | Email: ${this.#email} | Type: ${this.#type}`}

    toFirestore() {
        return {
            name: this.#name,
            email: this.#email,
            phoneNumber: this.#phoneNumber,
            address: this.#address,
            type:this.#type
        }
    }

    static fromFirestore(userId, Object) {
        let user = new User(userId, Object.name, Object.email, Object.type);
        user.setPhoneNumber(Object.phoneNumber);
        user.setAddress(Object.address);

        console.log(user.toString());
        return user;
    }
}

exports.User = User;