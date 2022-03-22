var mongoose = require('mongoose');
const { stringify } = require('querystring');
mongoose.connect('mongodb://localhost/reference_data_demo');

var Post = require('/home/backar/models/post');
var User = require('/home/backar/models/user');



User.create({
    email: 'hamad@gmail.com',
    name: "Hamad Balwa"
});

// Post.create({
//     title: 'Export File',
//     content: 'The exported post and user files should be connected now'
// }, function (err, post) {
//     User.findOne({ email: 'bob@gmail.com' }, function (err, foundUser) {
//         if (err) {
//             console.log(err)
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function (err, data) {
//                 if (err) {
//                     console.log(err)
//                 } else {
//                     console.log(data)
//                 }
//             })
//         }
//     })
// })

// User.findOne({ email: "bob@gmail.com" }).populate('posts').exec(function (err, user) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(user)
//     }
// })