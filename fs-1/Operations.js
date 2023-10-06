const {MongoClient} = require("mongodb");

const con = new MongoClient('mongodb://127.0.0.1:27017')

const insert=async (doc)=>{
    await con.connect();
    const db=con.db('day1')
    const coll=db.collection('Program1')
    return await coll.insertOne(doc)
}

const insertAll=async (docs)=>{
    await con.connect();
    const db=con.db('day1')
    const coll=db.collection('Program1')
    return await coll.insertMany(docs)
}

const readAll=async ()=>{
    await con.connect();
    const db=con.db('day1')
    const coll=db.collection('Program1')
    return await coll.find().toArray()
}

const read=async (doc)=>{
    await con.connect();
    const db=con.db('day1')
    const coll=db.collection('Program1')
    return await coll.find(doc).toArray()
}

const delet=async (doc)=>{
    await con.connect();
    const db=con.db('day1')
    const coll=db.collection('Program1')
    return await coll.deleteOne(doc)
}


const deleteAll=async (doc)=>{
    await con.connect();
    const db=con.db('day1')
    const coll=db.collection('Program1')
    return await coll.deleteMany()
}

const update=async (filter,doc)=>{
    await con.connect();
    const db=con.db('fruits')
    const coll=db.collection('vegetable')
    const res=coll.find(filter).toArray();
    if ((await res).length>0){
        console.log(await coll.updateOne(filter,{$set:doc}))
        return 'updated'
    }else{
        return 'specified doc is not found'
    }
}


const insertVeg = async (doc)=>{
    await con.connect();
    const db=con.db('fruits')
    const coll=db.collection('vegetable')
    const res=coll.find({'name':doc.name}).toArray();
    if ((await res).length>0){
        return 'Already Exixted'
    }else{
        await coll.insertOne(doc)
        return 'Inserted'
    }   
}

module.exports={
    insert,
    insertAll,
    read,
    readAll,delet,deleteAll,
    insertVeg,update
}