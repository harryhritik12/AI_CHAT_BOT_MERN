import { connect,disconnect } from 'mongoose';

async function connectToDatabase()
{
try {
await connect(process.env.MONGODB_URL);
} 
catch(err){
    console.log(err);
throw new Error("Cannot Connect to MongoDB");
}
}
async function dissConnectToDb()
{
try {
await disconnect();
} 
catch(err){
    console.log(err);
throw new Error("Cannot dissConnect to MongoDB");
}
}

export{connectToDatabase,dissConnectToDb};