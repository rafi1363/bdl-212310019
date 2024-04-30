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

// db.createCollection("customer");
// db.createCollection("film");
// db.createCollection("actor");

// db.customer.insert([{
//     id: "Fernanda",
//     fullname: "Fernanda Ramos",
//     email: "fernadaramos4@uol.com.br",
//     age: 24
// },
// {
//     id: "Mark",
//     fullname: "Mark Philips",
//     email: "mphilips12@shaw.ca",
//     city: "San Francisco"
// },
// {
//     id: "Jennifer",
//     fullname: "Jennifer Peterson",
//     email: "jenniferp@rogers.ca",
//     occupation: "teacher"
// }])

// db.film.insertMany([{
//     id: "1",
//     Film_Name: "Agak Lain",
//     Language: "Indonesia",
//     Rating: "13+"
// },
// {
//     id: "2",
//     Film_Name: "Agak Lain 2",
//     Language: "Indonesia",
//     Rating: "13+"
// },
// {
//     id: "3",
//     Film_Name: "Agak Lain 3",
//     Language: "Indonesia",
//     Rating: "13+"
// }])

// db.actor.insertMany([{
//     id: "1",
//     Actor_Name: "Rafi",
//     Born: "Indonesia",
//     Age: "13"
// },
// {
//     id: "2",
//     Actor_Name: "Zuhair",
//     Born: "Indonesia",
//     Age: "14"
// },
// {
//     id: "3",
//     Actor_Name: "Artadinata",
//     Born: "Indonesia",
//     Age: "15"
// }])

// db.customer.update(
//     { id: "Jennifer" },
//     { $set: { fullname: 'Jennifer Aniston' } }
// )

// db.customer.remove(
//     { id: "Jennifer" }

// db.createCollection("address");

// db.address.insertMany([{
//     Nama_Produk: "hape",
//     Harga: 10000000,
//     Berat_Produk: 8.9,
//     Rusak: false,
//     Tanggal_Masuk: new Date(),
//     Tag: ["Elektronik", "gadget"],
//     Dimensi: {
//         tinggi: 80,
//         panjang: 50,
//         lebar: 20
//     },
//     Id_Product: ObjectId()
// },
// {
//     Nama_Produk: "pintu",
//     Harga: 10000000,
//     Berat_Produk: 8.9,
//     Rusak: false,
//     Tanggal_Masuk: new Date(),
//     Tag: ["Elektronik", "peralatan"],
//     Dimensi: {
//         tinggi: 80,
//         panjang: 50,
//         lebar: 20
//     },
//     Id_Product: ObjectId()
// }])

// db.createCollection("continent", {
//     validator: {
//         $jsonSchema: {
//             bsonType: "object",
//             title: "continent validator",
//             required: ["continent", "last_update"],
//             properties: {
//                 continent: {
//                     bsonType: "string",
//                     description: "'continent harus dalam rupa string dan wajib diisi"
//                 },
//                 Last_Update: {
//                     bsonType: "date",
//                 }
//             }
//         }
//     }

// })

// db.continent.insertOne({
//     continent: "asia",
//     last_update: ISODate()
// })

// db.continent.insertOne({
//     continent: 12,
//     last_update: ISODate()
// })

db.customer.aggregate({
    $lookup: {
        "actor"
        localField: "fullname",
        foreignField: "fullname",
        as: "join"
    }
});