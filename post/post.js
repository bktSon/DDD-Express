'use strict';

class Post {
    constructor(title, content, author, postDate) {
        this.title    = title;
        this.content  = content;
        this.author   = author;
        this.postDate = postDate;
    }
}

const post1 = new Post('some title', 'some content', 'sonbkt', new Date());

console.log(post1);