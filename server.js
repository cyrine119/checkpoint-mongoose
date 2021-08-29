const express = require("express");

const connectDB = require ("./DB/connectDB")

const PersonDB = require('./Model/model')

//Save New Person
// const Person = new PersonDB({name:"Maya", age:15, favoriteFoods:["Pasta","Pizza"]})
// Person.save((err)=>{
//    if(err) return handleError(err)
//    // save
// })


//  Create many records
//  const docs = PersonDB.create([
//    {name:"Tiyé",age:23,favoriteFoods:["Salad","Chikken"]},
//    {name:"Adam",age:5,favoriteFoods:["Rice","Seafood"]},
//    {name:"Sabri",age:29,favoriteFoods:["Pizza","Lasagnes"]},
//    {name:"Tiyé",age:15,favoriteFoods:["Couscous","pasta"]}
//  ])


// Find All
// const search = async()=>{
//     try{
// const data = await PersonDB.find({});
// console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }
// search()


// Find One
// const search = async()=>{
//     try{
// const data = await PersonDB.findOne({favoriteFoods:["Salad","Chikken"]});
// console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }
// search()


// Find By Id 
// const search = async()=>{
//     try{
// const data = await PersonDB.findById({_id:"61269e7f4e76532a646cc09e"});
// console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }
// search()


// Classic Updates by Running Find, Edit, then Save
// const update = async()=>{
//     const Person = await PersonDB.findById({_id:"61269ec0244db21e68a5d263"})
//     Person.favoriteFoods=["Pasta", "Pizza", "Hamburger"]
//     Person.save((err)=>{
//            if(err) return handleError(err)
//             //save
//         })
// }
// update()


// Updates Using model.findOneAndUpdate()
// const query={name:"Adam"}
// const UpdatePerson = async()=>{
//     await PersonDB.findOneAndUpdate(query,{$set:{age:20}},{new:true, useFindAndModify: false}, (err,data)=>{
//         try {
//             console.log("updated")
//         } catch (err) {
//             console.log(err)
//         }
//     })
// }
// UpdatePerson()


// Delete One 
// const Remove = async()=>{
//   await PersonDB.findByIdAndRemove({_id:"61269ec0244db21e68a5d264"}, (err,data)=>{
//     try {
//       console.log("removed")
//     } catch (error) {
//       console.log(err)
//     }
//   })
// }
// Remove()


// Delete Many 
// const RemovePerson = async()=>{
//   const res = await PersonDB.remove({name:"Tiyé"}, (err,data) =>{
//     try {
//       console.log("removed Persons")
//     } catch (error) {
//       console.log(err)
//     }
//   })
// }
// RemovePerson()



// chain()
// const chain = async() => {
//    try {
//      const data = await PersonDB.find({favoriteFoods: {$elemMatch: {$eq: "Pizza"}}}).sort({name: 'Maya'}).limit(2).select({age: 0, __v: 0}).exec()
//          console.log(data)
//     } catch (err) {
//        console.error(err)
//     }
// }
// chain()

connectDB()

const app = express();

const PORT = 3000;

app.listen(PORT,(err)=>{
    err?
    console.log(err)
    : console.log(`server is running in ${PORT}...`)

})