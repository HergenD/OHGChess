function randomUser() {
    var r = Math.random();
    console.log(r);
    if (r < 0.5) {
        return "O";
    } else {
        return "X";
    }
}

/**
white chess king	♔	U+2654	&#9812;
white chess queen	♕	U+2655	&#9813;
white chess rook	♖	U+2656	&#9814;
white chess bishop	♗	U+2657	&#9815;
white chess knight	♘	U+2658	&#9816;
white chess pawn	♙	U+2659	&#9817;
black chess king	♚	U+265A	&#9818;
black chess queen	♛	U+265B	&#9819;
black chess rook	♜	U+265C	&#9820;
black chess bishop	♝	U+265D	&#9821;
black chess knight	♞	U+265E	&#9822;
black chess pawn	♟	U+265F	&#9823; 

REGULAR MOVEMENT
* king - 1 field any direction
* queen - any field any direction
* bishop - any field diagonal
* knight - one field in regular directions, then one diagonal
* rook - any field in regular directions
* pawn - one field to other side, two fields to other side from starting position, one field diagonal if the move results in caputring enemy piece

*/

// Initial gamestate
var gamestate = [
    ["&#9820;", "&#9822;", "&#9821;", "&#9819;", "&#9818;", "&#9821;", "&#9822;", "&#9820;"],
    ["&#9823;", "&#9823;", "&#9823;", "&#9823;", "&#9823;", "&#9823;", "&#9823;", "&#9823;"],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    ["&#9817;", "&#9817;", "&#9817;", "&#9817;", "&#9817;", "&#9817;", "&#9817;", "&#9817;"],
    ["&#9814;", "&#9816;", "&#9815;", "&#9813;", "&#9812;", "&#9815;", "&#9816;", "&#9814;"]
]

// First user
var user = randomUser();

function ruleSet(x) {
    var breaches = [];
    // RULE: Can't overwrite used space
    if (typeof x == 'undefined' || gamestate[x.id[0]][x.id[1]] === 0) {
        // Legal move
    } else {
        breaches.push("Used space")
    }
    return breaches
}

function winCon() {
    var breaches = [];
    return breaches;
}