const express = require ('express');
const cors = require ('cors');
const productRouter = require('./routes/productRoute.js')


const app = express();
app.use(cors());
app.use(express.json());

app.use(productRouter);


app.listen(3300, ()=>{
    console.log("Backend Application Running on 3300");
});