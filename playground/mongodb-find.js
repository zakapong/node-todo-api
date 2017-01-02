//const MongoClient= require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if(err){

return console.log('Unable to connect to mongodb server.');
}
console.log('Connected to mongodb server');

//db.collection('Todos').find({"completed": true, "text": "Walk the dog"}).toArray().then((docs)=>{

// db.collection('Todos').find({
//   _id:ObjectID('5869fd0b9a838257e8b59014')
// }).toArray().then((docs)=>{
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err)=>{
// console.log('Unable to fetch todos', err);

//db.collection('Todos').find().count().then((count)=>{
  //console.log(`Todos count: ${count}`);

db.collection('Users').find({"name": "Zakaria Mahmud", "age": 25}).toArray().then((docs)=>{

console.log('users');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err)=>{
console.log('Unable to fetch todos', err);

});

//db.close();

});
