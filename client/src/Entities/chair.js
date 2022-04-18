const {User} = require("./user");

class Chair extends User {
    constructor(name, email) {
        super(name, email, "chair");
    }
}
