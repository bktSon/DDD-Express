'use strict';

class Database {
    constructor(initialData) {
        this.data = initialData;
    }

    getAuthors() {
        return this.data.authors;
    }

    getAuthor(authorId) {
        return this.data.authors[authorId];
    }

    getPosts() {
        return this.data.posts;
    }

    getPost(postId) {
        return this.data.posts[postId];
    }
}

let database = new Database({
    authors: {
        "001" : {
            name: "sonbkt",
            dateOfBirth: "30-03-1994"
        },

        "002" : {
            name: "Nothing",
            dateOfBirth: "30-02-1994"
        }
    },

    posts : {
        "post1" : {
            title: "Some title 1",
            content: "Some content 1",
            postDate: new Date(),
            authorId: "001"
        },

        "post2" : {
            title: "Some title 2",
            content: "Some content 2",
            postDate: new Date(),
            authorId: "002"
        }
    }
});
console.log(database);