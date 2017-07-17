class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    set clientId(giventId) {
        let clientIdValidationPattern = /^[\d]{6}$/g;
        if (!clientIdValidationPattern.exec(giventId)) {
            throw new TypeError('Client ID must be a 6-digit number');
        }

        this._clientId = giventId;
    }

    set email(givenEmail) {
        let emailValidationPattern = /^\w+@[a-zA-Z\.]+$/g
        if (!emailValidationPattern.exec(givenEmail)) {
            throw new TypeError('Invalid e-mail');
        }

        this._email = givenEmail;
    }

    set firstName(givenName) {
        let firstNameValidationPattern = /^[a-zA-Z]+$/g
        if (givenName.length < 3 || givenName.length > 20) {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }

        if (!firstNameValidationPattern.exec(givenName)) {
            throw new TypeError('First name must contain only Latin characters');
        }

        this._firstName = givenName;
    }

    set lastName(givenName) {
        let lastNameValidationPattern = /^[a-zA-Z]+$/g
        if (givenName.length < 3 || givenName.length > 20) {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }

        if (!lastNameValidationPattern.exec(givenName)) {
            throw new TypeError('Last name must contain only Latin characters');
        }

        this._lastName = givenName;
    }
}

try {
    // let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov')
    //acc = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov')
    // acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')
    acc = new CheckingAccount('423415', 'petkan@another.co.uk', 'Petkan', 'Draganov')
} catch (error) {
    console.log(error.message)
}