const {MongoClient} = require('mongodb')

const conn = new MongoClient('mongodb://localhost:27017')

const insert= async (doc)=>{
    //{"title":'love is war',"author":'Chiranjeevi',"genre":'drama',"publicationYear":2025}
    var db= conn.db('day2')
    var coll = db.collection('books')
    const exist = await coll.find({'title':doc.title}).toArray()
    if((await exist).length>0){
        return {'msg' : 'Book already exist'}
    }else{
        console.log(await coll.insertOne(doc))
        return {'msg' : 'Book Inserted'}
    }
}

const displayAll = async ()=>{
    var db= conn.db('day2')
    var coll = db.collection('books')
    return await coll.find().toArray()
}

const displayBasedGenre = async(filter)=>{
    var db= conn.db('day2')
    var coll = db.collection('books')
    return await coll.find(filter).toArray()
}

const updateAuthor = async (filter,doc)=>{
    var db= conn.db('day2')
    var coll = db.collection('books')
    const exist = await coll.find(filter).toArray()
    if((exist).length>0){
        
    }


}