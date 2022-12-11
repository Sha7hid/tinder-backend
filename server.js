// importing express and mongoose which was installed using npm
import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors';
import Cards from './dbCards.js'
// App Config

/* an instance */

const app = express();
mongoose.set('strictQuery', true);
/*  creating a const for port for the server to run */

const port = process.env.PORT || 8001;
// connection url for mongodb database
const connection_url = `mongodb+srv://sha7hid:a5r4t0h9u1r3@cluster0.gmiseiq.mongodb.net/?retryWrites=true&w=majority`
// Middlewares
app.use(express.json());
app.use(Cors());
// DB config
mongoose.connect(connection_url,{
    /* default mongodb  required code */
    useNewUrlParser:  true,
   
    useUnifiedTopology: true,
    /* ..... */
})
// API Endpoints

/* base url '/' and req and res as a callback function */

app.get('/', (req, res) => /* res.status to check status if it is 200 which been okay and res.send to send a message*/
res.status(200).send('HELLO WORLD!'));
// to update the the table or post
app.post('/tinder/cards',(req,res) =>  {
    const dbCard = req.body;
// function to create a database card imported from dbCard.js
    Cards.create(dbCard, (err, data) => {
        if (err) {
            // if there is an error we will send the error back
            res.status(500).send(err);
        } else {
            // 500 and 201 are status codes for error and good or okay
            res.status(201).send(data);
        }
    })
});
// to access the data
app.get('/tinder/cards',(req, res) => {
    Cards.find((err, data) => {
        // find is used to access every single data we created in the database
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})
// Listener
/* to show the server is running or listening  on port */
app.listen(port, () => console.log(`listening on localhost:${port}`));