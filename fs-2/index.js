const {insertOrder,readOrders,readOrderByStatus,readOrderByOrderNumber,readOrderByTotalAmount,updateStatusByOrderNumber,cancelOrderByOrderNumber}= require('./db');
const express = require('express')
const url = require('url')
const port = 5000;
const app = express();

app.get("/insertOrder",async (req , res)=>{
    var data = url.parse(req.url,true);
    var orderNumber = data.query.orderNumber;
    var products =data.query.products;
    var totalAmount = data.query.totalAmount;
    var customerName= data.query.customerName;
    var orderStatus = "pending";

    var query = {
        'orderNumber':orderNumber,
        'products':products,
        'totalAmount':totalAmount,
        'customerName':customerName,
        'orderStatus':orderStatus
    };

    var result = await insertOrder(query);
    res.send(result);
})

app.get("/readOrders",async (req,res)=>{
    var result = await readOrders();
    res.send(result)
})

app.get("/readOrderByStatus", async (req,res)=>{
    var data = url.parse(req.url,true);

    var orderStatus = data.query.orderStatus;
    //console.log(orderStatus)

    var query = {
        "orderStatus":orderStatus
    }

    var result = await readOrderByStatus(query);
    res.send(result);
})

app.get("/readOrderByOrderNumber",async (req,res)=>{
    var data = url.parse(req.url,true);
    var orderNumber = data.query.orderNumber;

    var query = {
        "orderNumber":orderNumber
    }

    var result = await readOrderByOrderNumber(query);
    res.send(result);
})

app.get("/readOrderByTotalAmount",async (req,res)=>{
    var data = url.parse(req.url,true);
    var totalAmount = data.query.totalAmount;
    //console.log(totalAmount)
    var query = {
        "totalAmount":totalAmount
    }

    var result = await readOrderByTotalAmount(query);
    res.send(result)
})

app.get("/updateStatusByOrderNumber",async (req,res)=>{
    var data = url.parse(req.url,true);
    
    
    var orderNumber = data.query.orderNumber;
    var totalAmount = data.query.totalAmount;

    var filter = {
        "orderNumber":orderNumber
    }

    var query = {
        "totalAmount":totalAmount
    }



    var result = await updateStatusByOrderNumber(filter,query);
    res.send(result);
})

app.get("/cancelOrderByOrderNumber",async (req,res)=>{
    var data = url.parse(req.url,true);
    var orderNumber = data.query.orderNumber;
    var query = {
        'orderNumber':orderNumber
    }
    var result = await cancelOrderByOrderNumber(query);
    res.send(result);
})



app.listen(port , async ()=>{
    console.log(`server is running on http://localhost:${port}`);
})