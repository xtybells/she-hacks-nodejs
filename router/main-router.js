const express = require("express");

const router = express.Router();


//login route
router.post('/login', (req, res)=>{
    // if(req.body.fullname === '' || req.body.email === ''){
    //     res.send('username and password are required')
    // }

     if(req.body.fullname === 'christy' && req.body.email === 'xty'){
        res.send('login sucessfull')
    }else{
        res.send('password or username incorrect')
    }
    console.log(req.body)
   
})


//create a route(3)
router.get("/", (req, res) => {
  res.send("hello");
});

//a route for colors(4)
router.get("/colors", (req, res) => {
  res.send(["red", "blue", "yellow", "pink"]);
});

//route for submit details(5)
router.get("/details", (req, res) => {
  console.log(req.query);
  res.send(
    `hi ${req.query.fullname} your <strong>${req.query.subject}</strong> form has been submited`
  ); //string interpulation
  //res.sendFile(__dirname + "/index.html")
});

//add 2 numbers(6)
router.get("/cal", (req, res) => {
  res.send(String(Number(req.query.num1) + Number(req.query.num2)));
});

module.exports = router;