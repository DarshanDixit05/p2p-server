export const playerTypes = Object.freeze({
    BLACK_PLAYER:"BLACK_PLAYER",
    WHITE_PLAYER:"WHITE_PLAYER"
})

export const initialArrangement = Object.freeze({
    PAWNS:{
        count : 8,
        positions:{
            pawnA:{
                row:1,
                column:0
            },
            pawnB:{
                row:1,
                column:1,
            },
            pawnC:{
                row:1,
                column:2
            },
            pawnD:{
                row:1,
                column:3
            },
            pawnE:{
                row:1,
                column:4
            },
            pawnF:{
                row:1,
                column:5
            },
            pawnG:{
                row:1,
                column:6
            },
            pawnH:{
                row:1,
                column:7
            }
        }
    },
    BISHOPS:{
        count:2,
        positions:{
            bishopA:{
                row:0,
                column:2
            },
            bishopB:{
                row:0,
                column:5
            }
        }
    },
    ROOKS:{
        count:2,
        positions:{
            rookA:{
                row : 0,
                column:0
            },
            rookB:{
                row:0,
                column:7
            }
        }
    },
    KNIGHTS:{
        count:2,
        positions:{
            knightA:{
                row : 0,
                column : 1
            },
            kinghtB:{
                row : 0,
                column:6
            }
        }
    },
    QUEENS:{
        count:1,
        positions:{
            queeen:{
                row : 0,
                column : 3
            }
        }
    },
    KINGS:{
        count : 1,
        positions:{
            row : 0,
            column : 4
        }
    }
});

