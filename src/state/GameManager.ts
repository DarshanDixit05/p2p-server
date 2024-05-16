// import { Errors } from "../enums";

// export class GameManager{
//     private static instance:GameManager;    // lets keep this class abstract and for a session (reason the context of game will not be lost if some other dev tries creating new instance oht of this class)
//     private players : String[];
    
//     private constructor(){
//         this.players = []
//     }

//     public static getInstance(){  //avoid creating multiple instance, always return the first one
//         if(!this.instance){
//             this.instance = new GameManager()
//         }
//         return this.instance
//     }

//     public addPlayer(userId:string){
//         if(this.players.length<2){ //if there are already 2 playing dont allow
//             this.players.push(userId);
//         }else this.handleError(Errors.ROOM_FULL, "Room is already full!");
//     }

//     public removePlayer(userId : string)
//     {
//         this.players.filter((id)=>id!==userId)
//     }

//     public getPlayers(){
//         return this.players
//     }

//     private handleError(type:string, message:string){
//         console.log("Error : "+type+", Error message :"+message);
//     }
// }

// lets keep this server stateless and in future if required use the above state