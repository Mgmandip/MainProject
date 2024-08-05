const mongoose=require('mongoose');
const {Schema}=mongoose;    

const bikeSchema=new Schema({
    name:{
        type:String,
        required:true,
        unique: true,
    },
    price:{
        type:String,
        required:true
    },
    bikeImage:{
        type:String,
        required:true
    },
    displacement:{
        type:String,
        required:true
    },
    horsepower:{
        type:String,
        required:true
    },

    dryweight:{
        type:String,
        required:true
    },
    seatheight:{
        type:String,
        required:true
    },
    saftey:{
        type: String,
        default: "",
        enum: ["ABS", "No ABS"]
    },
});

const Bike=mongoose.model('Bike',bikeSchema);
module.exports=Bike;