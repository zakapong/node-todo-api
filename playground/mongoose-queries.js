const {ObjectID}= require('mongodb');
const {mongoose}= require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo');
const {Users}= require('./../server/models/user');


var id='586a474912a0190eb853526f';

if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}

// var id='586b9ab88d833511d42f19ae1';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todos', todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by id', todo);
// }).catch((e)=>{
//   console.log(e);
// });

Users.findById(id).then((user)=>{
  if(!user){
    return console.log('Unable to find user');
  }
  console.log('User found:', user);
}).catch((e)=>{
  console.log(e);
});
