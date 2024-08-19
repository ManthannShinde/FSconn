import express from "express";
import jokeRoutes from './Routes/jokesRoute.js'

const app = express();

app.get('/', async(req, res) => {
    res.send("Home Page");
});
 
app.use('/jokes', jokeRoutes);

const PORT = 3000;  
app.listen(PORT, () => { 
    console.log(`listening to port ${PORT}`)   
});