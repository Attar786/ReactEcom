import  express  from "express";
import products from "./data/products.js";
const port = 5000;

const app = express();

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