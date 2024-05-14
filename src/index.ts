import express from 'express'
import { WebSocketServer } from 'ws'

const app = express()

const httpServer = app.listen(8080)

const wss = new WebSocketServer({server:httpServer})

wss.on('connection', (ws)=>{
    ws.on('message', (message, isBinary)=>{
        console.log("MEssage recieved : ",message);
        
    })
})