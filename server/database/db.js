import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
 const USERNAME=process.env.DB_USERNAME;
 const PASSWORD=process.env.DB_PASSWORD;
mongoose.set('strictQuery', false);
const Connection=()=>{
   const mongodb_url =`mongodb://${USERNAME}:${PASSWORD}@ac-eal6fmi-shard-00-00.xafqn6b.mongodb.net:27017,ac-eal6fmi-shard-00-01.xafqn6b.mongodb.net:27017,ac-eal6fmi-shard-00-02.xafqn6b.mongodb.net:27017/?ssl=true&replicaSet=atlas-rprutb-shard-0&authSource=admin&retryWrites=true&w=majority`;
   ;
    mongoose.connect( mongodb_url, {useNewUrlParser: true}); 
mongoose.connection.on('connected',()=>{
    console.log('database chalrha hai');
})

mongoose.connection.on('disconnected',()=>{
    console.log('database nhin chalra');
})
mongoose.connection.on('error',()=>{
    console.log('database errrr');
})
 
}
export default Connection;