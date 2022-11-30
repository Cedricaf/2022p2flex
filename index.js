


class player {

    constructor(index)
    {
        this.index = index;
        this.atTile = 0;
        this.pawn = document.getElementsByClassName("pawn" + index)[0];
        this.pawn.style.display = block;

    }

}

class tile {

    constructor(div)
    {
        this.div = div;
        this.goto = -1;
    }

}

class game {
    
    constructor()
}
console.log(naam);
