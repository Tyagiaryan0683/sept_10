const users=require('../users.json');

const fs= require('fs');

function getAllUsers(req,res){
res.json(users);
}


function getParticularUser(req,res){
    const id=parseInt(req.params.id);
    const user=users.find(user=>user.id===id);
    res.json(user);
    }

function addUser(req,res){
    console.log(req.body);
        let user=req.body;
        user.id=users.length+1;
        users.push(user);
        fs.writeFile('users.json',JSON.stringify(users),(err)=>{
            if(err){
                console.log("Error...")
            }else{
                console.log("User Added successfully");
                res.end("Data added successfully...");
            }
        })
        res.end("User added successfully .....................");
        }    

module.exports={
    getAllUsers,
    getParticularUser,
    addUser
}