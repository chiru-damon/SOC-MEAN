const {MongoClient, Timestamp} = require('mongodb')

const conn = new MongoClient('mongodb://localhost:27017')

const insert=async (doc)=>{
    //{'name':'chiru','position':'ceo','salary':100000,'hireDate':'timestamp'}
    const db= conn.db('day2')
    const coll = db.collection('employees')
    doc['hireDate']=Timestamp
    let exist = coll.find({'name':doc.name,'position':doc.position}).toArray()
    if((await exist).length>0){
        return 'User Already Exist'
    }else{
        await coll.insertOne(doc).then((res)=>{
            console.log(res)
        })
    }
    return 'Inserted'
}

const display= async ()=>{
    const db= conn.db('day2')
    const coll = db.collection('employees')
    return await coll.find().toArray();
}


//        Update one employee or multipleee
// const updateSal = async()=>{
//     const db= conn.db('day2')
//     const coll = db.collection('employees')
//     let exist = coll.find({'name':doc.name,'position':doc.position}).toArray()
//     if((await exist).length>0){

//     }
// }

const del = async (filter)=>{
    const db= conn.db('day2')
    const coll = db.collection('employees')
    var exist= coll.find(filter).toArray()
    if((await exist).length<1){
        return 'Does not Exist'
    }else{
        console.log(await coll.deleteOne(filter))
    }
    return 'Deleted'
}

module.exports={
    del,insert,display
}