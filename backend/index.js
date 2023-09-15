const express = require('express');
const app = express();

require('./db/config')

const Users = require('./db/Users')

const jwt = require('jsonwebtoken')
const jwtkey = 'netflix'

const cors = require('cors')
app.use(express.json())
app.use(cors())

const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '10mb' }));

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