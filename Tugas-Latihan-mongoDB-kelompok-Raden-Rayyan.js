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

//ANGGOTA KELOMPOK:
//1. Muhammad Rafi Zuhair Artadinata - 212310019
//2. Muhammad Zacky Afiff - 212310010
//3. Muhammad Agus Setiawan - 212310004
//4. Daphne Holy - 212310030
//5. Raden Rayyan Pratama Rakhmadie - 212310034


//tugas latihan nomor 1 - 4
//NOMOR 1
// db.actor.createIndex({"country": 1})
// db.actor.createIndex({"country": 1}, {unique: true})

// db.film.createIndex({"LanguageID": 1}, {sparse:true})

// db.city.createIndex({"last_update":1},{expireAfterSeconds:60})

// db.customer.createIndex({"AddressID":1},{v:1})

// db.film.createIndex({Title: "text"}, {weights:{Title:5}})

// db.customer.createIndex({Email:"text"}, {default_language:"english"})
// db.customer.createIndex({First_Name: "text"},{language_override:"spanish"})
//AKHIR NOMOR 1

//NOMOR 2
// db.actor.aggregate([{$group: {_id: null,  ID:{$sum:'$ID'}}}])
// db.actor.aggregate([{$group: {_id: null,  ID:{$avg:'$ID'}}}])
// db.actor.aggregate([{$group: {_id: null,  ID:{$min:'$ID'}}}])
// db.actor.aggregate([{$group: {_id: null,  ID:{$max:'$ID'}}}])
//AKHIR NOMOR 2

//NOMOR 3
// db.actor.aggregate([{$project: {
//   "ID" : "3"
// }
// }])

// db.actor.aggregate([{$project: {"Last_Update": 0}}, {$match: {First_Name: "Rafi"}}]);

// db.actor.aggregate([{$project:{ID: '$active',
// }}]);
// [{ ID: 'Y' }, { ID: 'T' }, { ID: 'N' }]

// db.actor.aggregate([{$sort: {
//   Last_Name: 1
// }}]);

// db.actor.aggregate([{$limit: 2}])

// db.actor.aggregate([{$unwind: {
//   path: '$Tag',
// }}]);
//AKHIR NOMOR 3

//NOMOR 4
// db.customer.aggregate([
//     { $match: { Active: "T" } },
//     { $sort: { First_Name: -1 } },
//     { $limit: 1 }
// ])
//AKHIR NOMOR 4