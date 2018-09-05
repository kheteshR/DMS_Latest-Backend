//1.
var http = require('http');
var fs = require('fs');
var path = require('path');    
const filePath = path.join(__dirname, '/nem/NanoWallet-2.1.2/start.html#!/');
console.log(filePath)
//2.
var server = http.createServer(function (req, resp) {
    //3.
    if (req.url === "/create") {
        fs.readFile(filePath, function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
    } else {
        //4.
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('<h1>Product Manaager</h1><br /><br />To create product please enter: ' + req.url);
        resp.end();
    }
});
//5.
server.listen(5050);
 
console.log('Server Started listening on 5050');







// 'use strict';
// var hash = require('./models/account');
// const nem = require("nem-sdk").default;
// const crypto = require("crypto");

//     return new Promise(async (resolve, reject)=>{
//        //console.log("RecipientuserId=====>>",)
//     var id = "5b837d006c80d41d04750565";
//        var result=await hash.find({
//                 "phonetosend":"9004450734"
//             })
//         console.log("result==========>",result);
//         console.log("previoushash==========>",result[0].previousHashes);

//                // Create an NIS endpoint object
//                var endpoint = nem.model.objects.create("endpoint")("http://b1.nem.foundation", nem.model.nodes.mijinPort);
//                console.log("result[0].previousHashes.length",nem.model.nodes.mijinPort)
//                for(var i=0;i<result[0].previousHashes.length;i++){
                
            
//                var AllTransaction=await (nem.com.requests.transaction.byHash(endpoint,result[0].previousHashes[i]))
//                    console.log(AllTransaction.transaction.message.payload)
//                    var fmt = nem.utils.format.hexToUtf8(AllTransaction.transaction.message.payload);
//                 //    console.log(fmt)

//                 console.log("StatusSaved==========>>", fmt)
//                 var txObj=JSON.parse(fmt)
//                 var txObjArray=[];
//                 txObjArray.push(txObj)
// console.log("transaction object==========",txObj)
// console.log("txObjArray object==========",txObjArray)

//                 return resolve({
//                     "txObj": JSON.parse(txObj),
//                    "txObjArray":JSON.parse(txObjArray)
//                })
           
//            console.log(AllTransaction)
//        }

// })
// 'use strict';
// const nem = require("nem-sdk").default;
// // const uploads = require("../models/uploaded")
// const users = require("../models/account")
// // const Requests = require('../models/request')




// var privatekey= users.find({
//     "userId":"8267"
// })
// console.log("Object for private key",privatekey)
    