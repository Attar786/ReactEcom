import  express  from "express";
const port = 5000;

const app = express();

app.get("/", (req,res) => {
res.send("aPI is runnning")

});

app.listen(port, () => console.log(`server runini gon port no ${port}`))