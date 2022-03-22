var mongoose = require('mongoose');
const { stringify } = require('querystring');
mongoose.connect('mongodb://localhost/embed_demo');

// Post
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model('Post', postSchema);

// User
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model('User', userSchema);





// var newUser = new User({
//     email: 'hermione@house.com',
//     name: 'Hermione Granger',
// });

// newUser.posts.push({
//     title: 'How to brew polyjuice',
//     content: 'Just Kidding'
// })

// newUser.save(function (err, user) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(user)
//     }
// })

// var newPost = new Post({
//     title: 'The Kingdom',
//     content: 'Chronicles of Narnia'
// })

// newPost.save(function (err, post) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(post)
//     }
// })

User.findOne({ name: 'Hermione Granger' }, function (err, user) {
    if (err) {
        // console.log(err)
    } else {
        user.posts.push({
            title: 'things i hate',
            content: 'actually its everything'
        })
        user.save(function (err, user) {
            if (err) {
                console.log(err)
            } else {
                console.log(user)
            }
        })
    }
})