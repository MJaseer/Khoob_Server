import redis from "redis";
const client = redis.createClient();

client.on('connect',()=>{
    console.log('redis connected');
})

export default client