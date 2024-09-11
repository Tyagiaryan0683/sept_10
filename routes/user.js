const express=require('express');
const userController=require('../controllers/usercontroller');

const router=express.Router();
router.use(express.json());




router.get('/users',(req,res)=> {
userController.getAllUsers(req,res);
})

router.get('/user/:id',(req,res)=> {
    userController.getParticularUser(req,res);
    })

router.post('/add/user',(req,res)=> {
        userController.addUser(req,res);
        })



module.exports=router;