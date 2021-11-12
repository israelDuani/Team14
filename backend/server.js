const express = require('express');
const cors = require('cors');
const jwt=require('jsonwebtoken');
//require('dotenv').config()
const ACCESS_TOKEN_SECRET="2bacf17e8052c3c47436fd390e6945328ef4a9706fffed02c73b7291c21b1850c28069ce6faa144436dbfae57c4701ffe21ca7d6d85f583e10a33fb2abdd512c";
const REFRESH_TOKEN_SECRET="2bacf17e8052c3c47436fd390e6945328ef4a9706fffed02c73b7291c21b1850c28069ce6faa144436dbfae57c4701ffe21ca7d6d85f583e10a33fb2abdd512c";
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));
var list;

app.get('/', (req,res)=> {
    res.sendFile(__dirname+"/signup.html");
})

app.post('/', function(req,res) {
    
    var company= req.body.company;
    var userName=req.body.userName;
    var password=req.body.password;
    var email=req.body.email;
    var firstName= req.body.fName;
    var lastName=req.body.lName;
    var city=req.body.city;
    var country=req.body.country;
    var postal=req.body.postal;
    var about=req.body.about;

    const data= {
        userComp:company,
        user:userName,
        userPass:password,
        userMail:email,
        userFirst:firstName,
        userLast:lastName,
        userCity:city,
        userCountry:country,
        userPostal:postal,
        userAbout:about
    }
    //list.push(data);
    const token=jwt.sign({data}, ACCESS_TOKEN_SECRET, {expiresIn: "30m"});
    res.status(201).json({token: token});
});

app.get('/signin', (req,res)=> {
    res.sendFile(__dirname+"/signin.html");
});

app.post('/signin', function(req,res) {
    var user=req.body.userName;
    var userPassword=req.body.password;
    // const authHeader= req.headers['authorization'];
    // const token= authHeader && authHeader.split(' ')[1];
    // jwt.verify(token,ACCESS_TOKEN_SECRET, (err,user) => {
    //     if (err) return res.sendStatus(403)
    //     req.user=user;
    //     next();
    // });
    if (user===data.user && userPassword===userPass)
    {
        res.json(user,userPassword);
    }
});


app.listen(8080, ()=> {
    console.log('app is running on port 8080');
});