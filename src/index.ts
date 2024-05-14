import express from 'express'
import { WebSocketServer } from 'ws'

const app = express()

const httpServer = app.listen(8080)

const wss = new WebSocketServer({server:httpServer})

// ideally we should not allow every origin to connect , need to have check before doing connection . Will raise it as an issue in future
wss.on('connection', (ws)=>{
    ws.on('message', (message, isBinary)=>{
        console.log("MEssage recieved : ",message);
    })
})