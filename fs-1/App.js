// const { insert, insertAll , readAll,read, delet, deleteAll, update, insertVeg} = require("./Operations")

// const datum={
//     'name':'chiru',
//     'roll':'539',
//     'mail':'c@gmail.com'
// }
// const data=[
//     {
//         'name':'joel',
//         'roll':'549',
//         'mail':'j@gmail.com'
//     },
//     {
//         'name':'kow',
//         'roll':'535',
//         'mail':'kow@gmail.com'
//     }
// ]

// // insert(datum).then((res)=>{
// //     console.log(res)
// // })

// // insertAll(data).then((res)=>{
// //     console.log(res)
// // })

// // readAll().then((res)=>{
// //     console.log(res)
// // })

// // read({'roll':'549'}).then((res)=>{
// //     console.log(res)
// // })

// // delet({'roll':'549'}).then((res)=>{
// //     console.log(res)
// // })

// // deleteAll().then((res)=>{console.log(res)})

// // let veg={'name':'carrot','id':'1901','price':'80'}

// // insertVeg(veg).then((res)=>{
// //     console.log(res)
// // })

// update({'id':'1901'},{'price':'2000'}).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

var express = require('express')

var app= express()
app.get('/',async (req,res)=>{
    res.send("hello")
})

app.listen(9009,()=>{
    console.log('started')
})
