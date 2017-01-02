var express = require('express');
var bodyParser= require('body-parser');



var {mongoose}= require('./db/mongoose');
var {Todo}= require('./models/todo');
var {Users}= require('./models/user');

var app= express();

app.use(bodyParser.json());

app.post('/todo', (req, res)=>{
  var todo= new Todo({
  text: req.body.text
  });

  todo.save().then((doc)=>{
res.send(doc);
}, (e)=>{
  res.status(400).send(e);
});
});

app.listen(3000,()=>{
  console.log('Start on port 3000');
});
// var Todo=mongoose.model('Todo',{
//   text:{
//     type: String,
//     required: true,
//     minlength: 1,
//     trim:true
//   },
//   completed:{
//     type: Boolean,
//    default: false
//   },
//   completedAt:{
//     type: Number,
//     default: null
//   }
// });

//
// var Users=mongoose.model('Users',{
//   email:{
//     type: String,
//     required: true,
//     minlength: 1,
//     trim:true
//   }
// });
//
//
// var newTodoChallenge= new Users({
//   email:'  zaka.pong@gmail.com   '
//   // completed: true,
//   // completedAt:2016701
// });
//
//
//
// // var newTodo= new Todo({
// //   text: 'Cook diner'
// // });
//
//
// // var newTodoChallenge= new Todo({
// //   text:' Edit the video '
// //   // text: 'Had lunch in the morning',
// //   // completed: true,
// //   // completedAt:2016701
// // });
//
//
// newTodoChallenge.save().then((doc)=>{
//
//   console.log('Saved todo', doc);
// }, (e)=>{
//   console.log('Unable to save todo ' + e);
// });
