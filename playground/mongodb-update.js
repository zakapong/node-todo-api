//const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if(err){

return console.log('Unable to connect to mongodb server.');
}
console.log('Connected to mongodb server');

// db.collection('Todos').findOneAndUpdate({
//   _id:ObjectID('586a23909a838257e8b59699')
// }, {
//   $set:{
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result)=>{
// console.log(result);

db.collection('Users').findOneAndUpdate({
  _id:ObjectID('586a056d9a838257e8b592aa')
}, {
  $set:{
    name: 'Jaadu'
  },
  $inc:{
    age:1
  }
}, {
  returnOriginal: false
}).then((result)=>{
console.log(result);


});

//db.close();

});
