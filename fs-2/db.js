const {MongoClient} = require('mongodb')


const client = new MongoClient('mongodb://127.0.0.1:27017');


// 1. /insertOrder 
// 	 	 	 method - GET
// 	 	 	 query - 
// 	 	 	 	 	 orderNumber,
// 	 	 	 	 	 products,
// 	 	 	 	 	 totalAmount,
// 	 	 	 	 	 customerName
// 	 	 	 backendParams -
// 	 	 	 	 	 orderStatus
// 	 	 	 response - 
// 	 	 	 	 	 json - string


async function insertOrder(query){
    //query = {"orderNumber":1,"products":"ton bat","totalAmount":1500,"customerName":"Harsha"}
    await client.connect();
    const db = client.db('day3').collection('day3_col1');
    const temp = await db.find({"orderNumber":query.orderNumber}).toArray();
    if (temp.length>0){
        return "Order already exist";
    }
    else{
        const result = await db.insertOne(query);
        return "Order Inserted";
    }
}


// 2. /readOrders 
// 	 	 	 method - GET
// 	 	 	 query - NA
// 	 	 	 response - 
// 	 	 	 	 	 json - documents


async function readOrders(){
    await client.connect();
    const db = client.db('day3').collection('day3_col1');
    const temp =await db.find({}).toArray();
    if( temp.length>0){
        return temp;
    }
    else{
        return "no orders to display"
    }

}


// 3. /readOrderByStatus 
// 	 	 	 method - GET
// 	 	 	 query -
// 	 	 	 	 	 orderStatus
// 	 	 	 response -
// 	 	 	 	 	 json - documents


async function readOrderByStatus(query){
    //query = {"orderStatus":"pending"}
    await client.connect();
    const db = client.db('day3').collection('day3_col1');
    const temp =await db.find(query).toArray();
    if (temp.length>0){
        return temp ;
    }
    else{
        return "no orders to display";
    }
}


// 4. /readOrderByOrderNumber 
// 	 	 	 method - GET
// 	 	 	 query -
// 	 	 	 	 	 orderNumber
// 	 	 	 response -
// 	 	 	 	 	 json - document


async function readOrderByOrderNumber(query){
    //query = {"orderNumber":1}
    await client.connect();
    const db = client.db('day3').collection('day3_col1')
    const temp = await db.find(query).toArray();
    if(temp.length>0){
        return temp ;
    }
    else {
        return "no orders to display";
    }
}


// 5. /readOrderByTotalAmount 
// 	 	 	 method - GET
// 	 	 	 query -
// 	 	 	 	 	 totalAmount
// 	 	 	 response - 
// 	 	 	 	 	 json - documents


async function readOrderByTotalAmount(query){
    //query = {"totalAmount":1500}
    await client.connect();
    const db = client.db('day3').collection('day3_col1');
    const temp = await db.find(query).toArray();
    //console.log(temp)
    if (temp.length>0){
        return temp;
    }
    else{
        return "no orders to display";
    }
}


// 6. /updateStatusByOrderNumber 
// 	 	 	 method - GET
// 	 	 	 query - 
// 	 	 	 	 	 orderNumber
// 	 	 	 	 	 orderStatus
// 	 	 	 response -
// 	 	 	 	 	 json - string


async function updateStatusByOrderNumber(filter,query){
    //query = {"orderNumber":1,"orderStatus":"delivered"}
    //filter = {"orderNumber":1}
    await client.connect();
    const db = client.db('day3').collection('day3_col1');
    const temp = await db.find({"orderNumber":filter.orderNumber}).toArray();
    if (temp.length>0){
        if (temp[0].orderStatus==query.orderStatus){
            return "already updated"
        }
        else{
            const result = await db.updateOne(filter,{$set:query})
            return "updated";
        }
    }
    else{
        return "no order found";
    }
}


// 7. /cancelOrderByOrderNumber 
// 	 	 	 method - GET
// 	 	 	 query -
// 	 	 	 	 	 orderNumber
// 	 	 	 response -
// 	 	 	 	 	 json - string


async function cancelOrderByOrderNumber(query){
    //query = {"orderNumber":1}
    await client.connect();
    const db = client.db('day3').collection('day3_col1');
    const temp = await db.find(query).toArray();
    if(temp.length==0){
        return "no orders exist";
    }
    else{
        const result = await db.deleteOne(query);
        return "order deleted";
    }

}

module.exports= {insertOrder,readOrders,readOrderByStatus,readOrderByOrderNumber,readOrderByTotalAmount,updateStatusByOrderNumber,cancelOrderByOrderNumber};