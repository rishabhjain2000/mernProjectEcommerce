
const mongoose = require("mongoose");


const connectDatabase=()=>{
  

    mongoose.connect(//2
    process.env.DB_URI//2
)//2
.then(()=>console.log(`DBConnection Succesfull`))
//    
}

module.exports=connectDatabase

