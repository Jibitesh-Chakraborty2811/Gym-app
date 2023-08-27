const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql2')

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Jibimax123",
    database:"Gym"
})



const app = express()

app.use(bodyParser.json())

app.use(cors({origin : '*'}))

const prods = [
    {
        packId : 1,
        name : 'Fat Loss Plan',
        duration : '2 months'
    },
    {
        packId : 2,
        name : 'Calisthenics',
        duration : '3 months'
    },
    {
        packId : 3,
        name : 'Body Building',
        duration : '1 year'
    },
    {
        packId : 4,
        name : 'Ordinary Subscription',
        duration : '6 months'
    }
]
app.get('/products',(req,res)=>{
    res.json(prods)
})

app.post('/addSubscription',(req,res) => {
    con.connect((err) =>{
        if(err) throw err;

        const name = req.body.name;
        const address = req.body.address;
        const packId = req.body.packId;
        var values = [[name,address,packId]]
        var sql = 'INSERT INTO Subscriptions(username,address,packId) VALUES ?'

        con.query(sql,[values],(error,result)=>{
            if(error) throw error;
        })
    })
    res.json({message : 'Added to Database'})
})

app.get('/getSubscriptions',(req,res) =>{
    var ans = []
    con.connect((err) =>{
        if(err) throw err;

        var sql = 'SELECT * FROM Subscriptions;'
        
        con.query(sql,(error,result)=>{
            if(error) throw error

            res.json(result)
        })
    })

    
})

app.listen(5000,()=>{
    console.log('Server Started')
})