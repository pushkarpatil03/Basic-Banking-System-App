const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');

const User = require('../models/user');
const Transfer = require('../models/transfer');

router.get("/", catchAsync(async (req, res)=>{
    const users = await User.find({})
    res.render("customers/index", {users});
}));

router.get("/:id", catchAsync(async(req, res) =>{
    const user = await User.findById(req.params.id);
    const users = await User.find({})
    res.render("customers/show", {user, users});
}));

router.get("/:id1/:id2", catchAsync(async(req, res) =>{
    const {id1, id2} = req.params;
    const senderUser = await User.findById(id1);
    const receiverUser = await User.findById(id2);
    res.render("customers/transfer", {senderUser, receiverUser});
}));

router.put("/:id1/:id2", catchAsync(async(req, res, next) =>{
    const {id1, id2} = req.params;
    const amount = parseInt(req.body.amount);   //amount---amt
    const senderUser = await User.findById(id1);  //balance---currentBal
    const receiverUser = await User.findById(id2);

    if(amount <= senderUser.balance && amount>0){
        
        let senderNewBalance = senderUser.balance - amount;
        let receiverNewBalance = parseInt(receiverUser.balance + amount);
        await User.findByIdAndUpdate(id1, {balance : senderNewBalance}, { runValidators: true, new: true });
        await User.findByIdAndUpdate(id2, {balance : receiverNewBalance}, { runValidators: true, new: true });

        let newTransfer = new Transfer();
        newTransfer.sender = senderUser.name;
        newTransfer.receiver = receiverUser.name;
        newTransfer.amount = amount;
        await newTransfer.save();

        req.flash('success', `Successfully made a transaction of ${amount} ₹, to the account of ${receiverUser.name}`);
        return res.redirect(`/customers/${id1}`);
    }
    else{
        req.flash('error', `Insufficient Balance !!! (You do not have required balance to make a transaction of ${amount} ₹`);
        return res.redirect(`/customers/${id1}`);
    }
}));

module.exports = router;
