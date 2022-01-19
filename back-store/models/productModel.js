const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
   
    product_name: String,
    product_image: String,
    product_desc: String,
  
    product_cost: Number,
  
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category"
     },
     color_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"color"
     },
    category_name: String,
    color:String,
    images:Array,
    rating:Number
    
  


},{timestamps:true})

const productModel = mongoose.model('product',productSchema)

module.exports = productModel;
