const mongoose=require('mongoose')
const Schema = mongoose.Schema




const shopSchema = new Schema({


   name: {type: String,require: true,trim:true},
   photo:{type:String,default:'nopic.png'},

//   createdAt: {type: Date, default:Date.now},
//   updateAt: {type: Date, default:Date.now}
},
{
    timestamps:true,
    collection:"shops"
}


,shopSchema.virtual('menus', {
    ref: 'Menus',
    localField: '_id',
    foreignField: 'shop'
  }));




const shop = mongoose.model("Shop",shopSchema)


module.exports = shop