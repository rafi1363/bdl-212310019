/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('film');

// db.actor.find({ ID : { $in : [ "1","2"] } } ).pretty()

// db.actor.find( { $and : [ { ID : "1" , First_Name : "Rafi" } ] } ).pretty()
// db.actor.find( { $or : [ { ID : "1" , First_Name : "Rafi" } ] } ).pretty()

// db.actor.find( {ID : {$not : { $eq : "1"}}}).pretty()

// db.actor.find({First_Name: {$exists: true}})

// db.actor.find({First_Name: {$type: "string"}})

// db.actor.find({First_Name: {$regex : /^R/, $options : "1"}})

// db.actor.find({$expr: {$gt : ["$Last_Update", "$ID"]}})

// db.actor.find().next()

// db.actor.find().sort({ID: -1})

// db.actor.find().limit(2).pretty()

// db.actor.updateMany({ID : "1"}, {$rename : {Last_Name : "Nama Belakang"}})





// db.actor.updateOne({ID: "10"}, {$set : {nama : "Dendol", dob: ISODate()}}, {upsert: true})


// db.film.update({ ID: "1" }, { $set: { Release_Year: 2003 } });

// db.film.update({ID:"1"}, {$set: {Release_Year: 2004}});
// db.actor.remove({ID:"10"})

// db.film.deleteOne({Length: 80})

// db.film.deleteMany({Length: 90})

// db.customer.find().limit(2)
// db.actor.find().limit(2).skip(2)

// db.actor.createIndex({"country": 1})
// db.actor.createIndex({"country": 1}, {unique: true})

// db.film.createIndex({"LanguageID": 1}, {sparse:true})

// db.city.createIndex({"last_update":1},{expireAfterSeconds:60})

// db.customer.createIndex({"AddressID":1},{v:1})

// db.film.createIndex({Title: "text"}, {weights:{Title:5}})

// db.customer.createIndex({Email:"text"}, {default_language:"english"})

// db.actor.aggregate([{$group: {_id: null,  ID:{$sum:'$ID'}}}])
// db.actor.aggregate([{$group: {_id: null,  ID:{$avg:'$ID'}}}])
// db.actor.aggregate([{$group: {_id: null,  ID:{$min:'$ID'}}}])
// db.actor.aggregate([{$group: {_id: null,  ID:{$max:'$ID'}}}])

// db.actor.updateOne({ID:10},{$push:{Nama:"Daphne Holy"}})
// db.actor.updateOne({ID:10},{$addToSet:{Nama:"RaV"}})



// db.customer.createIndex({First_Name: "text"},{language_override:"spanish"})