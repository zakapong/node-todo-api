const {ObjectID}= require('mongodb');
const {mongoose}= require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo');
const {Users}= require('./../server/models/user');


// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

Todo.findOneAndRemove(_id:'586ce4be09984666aef90a8f').then((todo)=>{
  console.log(todo);
});



Todo.findByIdAndRemove('586ce4be09984666aef90a8f').then((todo)=>{
  console.log(todo);
});
