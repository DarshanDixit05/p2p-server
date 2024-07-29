import { initialArrangement, playerTypes } from "../constants/constants";

export class GameManager{
    private static instance:GameManager;    // lets keep this class abstract and for a session (reason the context of game will not be lost if some other dev tries creating new instance oht of this class)
    private players : Map<String, String>;
    private pieces : Map<String,String>;
    
    private constructor(){
        this.players = new Map()
        this.pieces = new Map()
        this.pieces.set(playerTypes.BLACK_PLAYER, JSON.stringify(initialArrangement));
        this.pieces.set(playerTypes.WHITE_PLAYER, JSON.stringify(initialArrangement));
    }

    public static getInstance(){  //avoid creating multiple instance, always return the first one
        if(!this.instance){
            this.instance = new GameManager()
        }
        return this.instance
    }

    public addPlayer(userId:string){
        if(this.players.size === 0){
            this.players.set(userId, playerTypes.BLACK_PLAYER)
        }else if(this.players.size === 1){
            this.players.set(userId, playerTypes.WHITE_PLAYER)
        }
    }

    public getPlayers(){
        return this.players.keys
    }

    private handleError(type:string, message:string){
        console.log("Error : "+type+", Error message :"+message);
    }
}

// lets keep this server stateless and in future if required use the above state