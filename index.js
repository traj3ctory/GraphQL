const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());


// const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://traj3ctory:CharMZ06@cluster0.ic2kd.mongodb.net/User?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, useNewUrlParser: true });

// client.connect()
//     .then(() => {
//         console.log('connected to mongodb')
//         client.close();
//     })
//     .catch(err => {
//         console.error('App starting error:', err.stack);
//         client.close();
//         process.exit(1)
//     });

 
mongoose.connect(uri)
mongoose.connection.once('open', () => {
    console.log('conneted to database');
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4040, () => {
    console.log('now listening for requests on port 4040');
});