import cors from "cors"
import  express  from "express";
import dotenv from "dotenv"
dotenv.config();
import products from "./data/products.js";
const port = process.env.PORT || 5000;

const app = express();
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  app.use(cors(corsOptions))
app.get("/", (req,res) => {
res.send("aPI is runnning");
});
app.get('/api/products' ,  (req,res) =>
{
    res.json(products)
} );
app.get('/api/products/:id' ,  (req,res) =>
{
    const pr = products.find((p) => p._id === req.params.id);
    res.json(pr)
});

app.listen(port, () => console.log(`server runini gon port no ${port}`))