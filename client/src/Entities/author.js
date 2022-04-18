const {User} = require("./user");

class Author extends User {
    constructor(name, email) {
        super(name, email, "author");
    }
}
