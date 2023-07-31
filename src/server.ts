import express from "express";
import cors from "cors";
import { sample_foods, sample_users } from "./data";
import jwt from "jsonwebtoken";
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.get("/api/foods", (req, res) => {
  res.send(sample_foods);
});

//get food via search Term
app.get("/api/foods/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const foods = sample_foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send(foods);
});

//get food by ID
app.get("/api/foods/:foodId",(req,res)=>{
    const foodId = req.params.foodId;
    const food = sample_foods.find(food => food.id === foodId);
    res.send(food);
})

//login user api
app.post("/api/users/login",(req,res)=>{
  const {email, password}=req.body;
  const user = sample_users.find(user=> user.email === email && user.password === password);
  console.log("Here's :",user);

  if(user){
    res.send(generateTokenResponse(user));
  }
  else{
    res.status(400).send("Email or Password is invalid");
  }
})

//genearte token
const generateTokenResponse = (user:any)=>{
  const token = jwt.sign({
    email: user.email, isAdmin:user.isAdmin
  },"Password@123",{
    expiresIn:"30d"
  })
  user.token = token;
  // console.log("token generated", user.token);
  return token;
}

const port = 5000;
app.listen(port, () => {
  console.log("App is running on http://localhost:" + port);
});
