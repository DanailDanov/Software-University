function songs(array) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }

    }

    let storeSongs = [];
    const numberOfSongs = array.shift();
    const typeSong = array.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = array[i].split("_");
        let song = new Song(type, name, time);
        storeSongs.push(song);

    }

    if (typeSong === "all") {
        storeSongs.forEach((i) => console.log(i.name));
    } else {
        let filtered = storeSongs.filter((i) => i.type === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }

}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);