const express = require('express');
const app = express();

require('./db/config') 

const Users = require('./db/Users')

const jwt = require('jsonwebtoken')
const jwtkey = 'netflix'

const cors = require('cors')
app.use(express.json())
app.use(cors())

const dotenv = require('dotenv')
dotenv.config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const storeItems = new Map([
    ['mobile',{price:14900,name:'Subscription - Mobile'}],
    ['basic',{price:19900,name:'Subscription - Basic'}],
    ['standard',{price:49900,name:'Subscription - Standard'}],
    ['premium',{price:64900,name:'Subscription - Premium'}],
])

app.post('/payment', verifytoken ,async(req,res)=>{
    const { items } = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method_types : ['card'],
        mode : 'payment', //subscription
        line_items : req.body.items.map(item=>{
            const storeItem = storeItems.get(item.plan)
            return {
                price_data : {
                    currency : 'inr',
                    product_data : {
                        name : storeItem.name
                    },
                    unit_amount : storeItem.price
                },
                quantity : item.quantity
            }
        }),
        success_url : `https://netflix-a83h.onrender.com/success?email=${items[0].email}&plan=${items[0].plan}`,
        cancel_url : `https://netflix-a83h.onrender.com/step21`
           
    })
    if (session){
        res.send({ result : session.url })
    }
    else{
        res.send({ result : 'no stripe session created' })
    }
})

app.post('/login', async (req, res) => {
    if (req.body.password && req.body.email) {
        let user = await Users.findOne({email: req.body.email,password: req.body.password}).select("-password")
        if (user) {
            jwt.sign({ user }, jwtkey , { expiresIn: "2h" } , (err, token) => {
                if (err) {
                    res.send({ user: "jwt error occured" })
                }
                res.send({ user, auth: token })
            })
        }
        else {
            res.send({ user: "no user found" })
        }
    }
    else {
        res.send({ user: "enter valid details" })
    }
})

app.post('/register', async (req, res) => {
    if (req.body.password && req.body.email && req.body.email!='null' ) {
        let result = await Users.findOne({email:req.body.email})
        if (!result) {
            let user = new Users(req.body)
            result = await user.save()
            result = result.toObject()
            delete result.password
            jwt.sign({ result }, jwtkey, { expiresIn: "2h" }, (err, token) => {
                if (err) {
                    res.send({ result: "jwt error occured" })
                }
                res.send({ result, auth: token })
            })
        }
        else {
            res.send({ result: "email already used" })
        }
    }
    else {
        res.send({ result: "enter valid details" })
    }
})

app.post('/update',verifytoken, async (req, res) => {
    if (req.body.email && req.body.plan) {
        console.log(req.body.plan)
        let item = await Users.findOne({email: req.body.email}).select("-password")
        if (item) {
            item.subscription = 'yes';
            item.plan = req.body.plan;
            item = await item.save();
            res.send({ item })
        }
        else {
            res.send({ item: "no user found" })
        }
    }
    else {
        res.send({ item: "enter valid details" })
    }
})

// app.post('/check', async(req,res)=>{
//     if (req.body.email){
//         let result = await Users.findOne({email:req.body.email})
//         console.log(result)
//         if (!result) {
//             res.send({ result: "email not used" })
//         }
//         else {
//             res.send({ result: "email already used" })
//         }
//     }
//     else {
//         res.send({ result: "enter valid details" })
//     }
// })

function verifytoken(req, res, next) {
    const token = req.headers['authorization']
    if (token) {
        // token=token.split(' ')[1]     //token=token.split(' ')[1]
        jwt.verify(token, jwtkey, (err, valid) => {
            if (err) {
                res.status(401).send({ result: 'please provide correct token with header' })
            }
            else {
                next()
            }
        })
    }
    else {
        res.status(401).send({ result: 'please add token with header' })
    }
}

app.listen(4000,()=>{
    console.log("backend server is running")
});