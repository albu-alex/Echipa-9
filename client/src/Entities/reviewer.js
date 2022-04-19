const {User} = require("./user");

class Reviewer extends User {
    constructor(name, email) {
        super(name, email, "reviewer");
    }
}
