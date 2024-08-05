// Controllers to create user

const Bike = require('../Models/bikeModel')

const createBike = async(req, res) =>{
    // const data = req.body;
    // const name = data.name;
    // const age = data.age
    // const role = data.role;

    const {name,price,saftey} = req.body; //Destructuring

    const addBike = new Bike({
        name: name,
        price: price,
        saftey: saftey
    });

    // await addUser.save();

    try{
        const response = await addBike.save();
        if(response){
            res.status(201).json({message:"User Created Sucessfully",response})
        }
    }
    catch(err){
        res.status(500).json({message:"Internal Server Error", err})
    }
}

module.exports = createBike;


