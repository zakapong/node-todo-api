var express = require('express');
var bodyParser= require('body-parser');
const {ObjectID}= require('mongodb');


var {mongoose}= require('./db/mongoose');
var {Todo}= require('./models/todo');
var {Users}= require('./models/user');

var app= express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
  var todo= new Todo({
  text: req.body.text
  });

  todo.save().then((doc)=>{
res.send(doc);
}, (e)=>{
  res.status(400).send(e);
});
});

app.get('/todos', (req, res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (e)=>{
    res.status(400).send(e);
  });
});

// app.get('/todos/:id',(req, res)=>{
//   res.send(req.params);
// });

app.get('/todos/:id',(req, res)=>{
  var id=req.params.id;
  if(!ObjectID.isValid(id)){
    res.status(404).send();
  }
    Todo.findById(id).then((todos)=>{
    if(!todos){
    return res.status(404).send();
    }
    res.send({todos});
    }).catch((e)=>{
      res.status(400).send();
    });

});

app.listen(3000,()=>{
  console.log('Start on port 3000');
});

module.exports={app};
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
