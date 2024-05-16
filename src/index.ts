import express from 'express'
import WebSocket , { WebSocketServer } from 'ws'

const app = express()

const httpServer = app.listen(8080)

const wss = new WebSocketServer({server:httpServer})

interface UserType {  // for now i think for key stroke activity we can go with this
    ws : WebSocket;
    userId : string;
    room : string;
    move : string;
}

const users:Map<string,UserType> = new Map()

// ideally we should not allow every origin to connect , need to have check before doing connection . Will raise it as an issue in future
wss.on('connection', (ws, req)=>{
    // console.log(req);
    const queryParams = req.url?.substring(2, req.url?.length);
    const userId = queryParams?.split('&')[1]?.split("=")[1];
    const room = queryParams?.split('&')[0]?.split("=")[1];

    if(!userId || !room || users.size>=2){ // with mandatory check also added check to atmost 2 in a room
        ws.close();
        return
    }

    users.set(userId, {ws,userId,room,move: '' })
    ws.on('message', (message:string, isBinary:any)=>{

        // send the message as a string of object
        const messageData = JSON.parse(message);
        const move = messageData?.move;
        const playerId = messageData?.userId;
        const room = messageData?.room;
        users.forEach((user)=>{
            if(user.userId!==playerId && user.room===room){
                // for now we will sned player id and the move to the opponent , in future we can add if req
                const res = JSON.stringify({userid:playerId,move:move});
                user.ws.send(res)
            }
        })
        console.log("MEssage recieved : ",message);
    })

    ws.on('close', ()=>console.log("user : "+userId+" left the room/disconnected"));
})

// First we need to capture event of an user and broadcast it to the all the user in our case its just the other person
// Event listeners will be the keystrokes (left and right)
// On change of key strokes wr should receive a message with key pressed , and broadcast the same to other player
// TODO: should figure out edge cases. And simulate it maybe