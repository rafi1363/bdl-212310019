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
use('filmdb');

// db.createCollection("ArrTest");

// db.ArrTest.insertOne({
//     id:1,
//     nama:"kelas TI-21-PA",
//     anggota_kelas: ["Rafi Zuhair", "Raden Rayyan", "Mahesa Alghifari", "Daphne Holy"]
// });

// db.ArrTest.updateOne({id:1},{$push  :{anggota_kelas: "Rizki Nur"}});
// db.ArrTest.updateOne({id:1},{$pull  :{anggota_kelas: "Rizki Nur"}});
// db.ArrTest.updateOne({id:1},{$addToSet  :{anggota_kelas: "Rizki Nur Asyifa"}});

// db.customer.find({id: {$in:["Fernanda", "Ramos"]}})
// db.customer.find({id: {$nin:["Fernanda", "Ramos"]}})

// db.film.insertMany([{
//     _id : ObjectId(),
//     id: "4",
//     Film_Name: "Mario Bros",
//     Language: "English",
//     Rating: "SU"
// },
// {
//     _id: ObjectId(),
//     id: "5",
//     Film_Name: "Interstellar",
//     Language: "English",
//     Rating: "13+"
// }])

// db.film.find({Film_Name:{$regex:/g$/}})

// db.customer.find().limit(2)

// db.film.find().sort({Film_Name : 1})