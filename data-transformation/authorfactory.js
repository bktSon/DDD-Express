'use strict';

class AuthorFactory {
    factory(rawAuthorData) {
        return {
            name : rawAuthorData.name,
            dateOfBirth: rawAuthorData.dateOfBirth.getAge()
        }
    }
}

module.exports = AuthorFactory;