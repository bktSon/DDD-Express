'use strict';

class WritingPostService {
    constructor(database, serialize) {
        this.database   = database;
        this.serializer = serialize;
    }

    writingPost(author, title, content) {
        const post = author.writingPost(title, content);
        this.database.savePost(this.serializer.serialize(post));
        return post;
    }

}

// const database  = require('./../database');
// const Serialize = require('./../data-transformation/postserializer');
// const serialize  = new Serialize;
// const Author     = require('./../author/author');
// const author =  new Author('sonbkt', '30-03-1994');
// author.setId('B12DCVT331');
// const writing = new WritingPostService(database, serialize);
// writing.writingPost(author, '1', '2');
// console.log(database);

module.exports = WritingPostService;

