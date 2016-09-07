'use strict';

class Author {
    constructor(name, dateOfBirth) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
 }
    setId(Id) {
        return this.Id = Id;
    }

    getId() {
        return this.Id;
    }

    getAge() {
        return new Date() - this.dateOfBirth;
    }
}

// const author1 = new Author('sonbkt', '111111111111111111');
// author1.setId('B12DCVT331');
// console.log(author1.getAge());
module.exports = Author;
