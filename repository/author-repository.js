'use strict';

class AuthorRepository {
    constructor(databse , factory) {
        this.database = databse;
        this.factory  = factory;
    }

    getAuthor(authorId) {
        return this.database.getAuthor(authorId);

    }
}

module.exports = AuthorRepository;





