const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const crypto = require("crypto");
const readline = require('readline');

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("<h1>Home page</h1>")
})

app.get("/random", (req, res) => {
    res.json({random: Math.random()})
})

app.get("/users", (req, res) => {

    const filePath = path.join(__dirname, "textDB", "users");

    fs.stat(filePath, (err, stats) => {
        if (err || stats.size === 0){
            res.writeHead(404, { 'Content-Type': 'text/plain'})
            res.end("No users...")
            return
        } else {
            const readable = fs.createReadStream(filePath)
            res.writeHead(200, {"Content-Type": "text/plain"});
            readable.pipe(res)

            readable.on('error', (streamErr) => {
                console.error("Error reading file", streamErr)
                res.writeHead(500, {'Content-Type': 'text/plain'})
                res.end("Internal server error")
            })
        }
    })
})

app.post("/users", (req, res) => {
    console.log(req.body)
    if (req.body.name && req.body.surname){
        const {name, surname} = req.body
        var response = {
            id: crypto.randomBytes(16).toString('hex'),
            name,
            surname
        }

        const filePath = path.join(__dirname, "textDB", "users")

        const writable = fs.createWriteStream(filePath, {flags: 'a'})
        writable.write(JSON.stringify(response) + "\n" , (err) => {
            if (err) {
                console.error("Error writing file", err);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Internal server error");
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(response));
            }
        })
    } else {
        console.error("Bad request")
        res.writeHead(400, {'Content-Type': 'text/plain'})
        res.end("Bad request: name and surname required")
    }
})

app.get("/users/:id", (req, res) => {
    var id = req.params.id
    const filePath = path.join(__dirname, "textDB", "users")

    var readable = fs.createReadStream(filePath)
    const rl = readline.createInterface({
        input: readable,
        crlfDelay: Infinity
    })

    let responseSent = false;

    rl.on('line', (line) => {
        if (responseSent) return;
        try {
            const user = JSON.parse(line)
            console.log()
            if (user.id === id){
                res.json(user).status(200)
                rl.close();
            }
        
        }
        catch (error){
            console.error("Error while parsing", error)
        }
    })
 

    rl.on('close', () => {
        if (responseSent) return;
        res.status(404).send("User not found")
    })

    rl.on('error', (err) => {
        if (responseSent) return;
        res.status(500).send("Internal server error")
    })
})

app.listen(101)