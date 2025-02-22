const express=require('express')
const router=express.Router()
const Product=require('../models/product')



router.post('/',async(req,res)=>{

    const{name,description,price,stock}=req.body;

    const product=new Product({name,description,price,stock})

    try{
        await product.save()
        res.status(200).json(product)
    }catch(error){
        console.log('error creating product',error);
        res.status(500).json({message:"server error"})
        
    }




})


router.get('/',async(req,res)=>{
    try{
        const products=await Product.find()
        res.status(200).json(products)
    } catch(error){
        console.log('error during fetching',error);
        res.status(500).json({message:"server error"})
        
    }
})


module.exports=router;
