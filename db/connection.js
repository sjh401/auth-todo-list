import mongoose from 'mongoose';

const MONGODB_URI = 
process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/todoAuthDatabase";

// TURN OFF when not debugging -- debug will show all usernames and passwords, etc.
mongoose.set("debug", true);

// allows faster lookup for items in database
mongoose.set("useCreateIndex", true);
// sets new:true to default for findbyid etc.
mongoose.set("returnOriginal", true);

mongoose
.connect(MONGODB_URI, {
    useUnifiedTopology: true, 
    useNewUrlParser: true
})
.catch(error=> 
    console.error("Error connecting to MongoDB", error.message)
);

mongoose.connection.on("disconnected", () => 
console.log("Disconnected from MongoDB")
);

mongoose.connection.on("error", (error) => 
console.error(`MongoDB connection error: ${error.message}`)
);

export default mongoose.connection;
