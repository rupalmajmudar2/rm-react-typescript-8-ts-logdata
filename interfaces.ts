interface Detail { //sthg that has a #report function
    report(): string; //function required in Movie interface
}

const currentMovie = {
    title: 'dune',
    date: new Date(2021, 9, 24),
    rating: 8.2,
    genre: ['action', 'adventure', 'drama'],

    report(): string {
        return `Title: ${this.title}`;
    }
}

const track = {
    genre: 'rock',
    exclusive: true,
    duration: 20,
    
    report(): string {
        return `Current song: ${this.genre}`
    }
}

const logDetail = (item:Detail):void => {
    console.log(item.report());
}

logDetail(currentMovie)
logDetail(track)