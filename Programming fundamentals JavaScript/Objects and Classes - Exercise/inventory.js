function inventory(array) {

    let registerForHeroes = [];

    for (const line of array) {

        let [heroName, level, item] = line.split(" / ");
        level = Number(level);

        registerForHeroes.push({ heroName: heroName, level: level, item: item });

    }

    registerForHeroes.sort((a, b) => a.level - b.level);

    for (const kvp of registerForHeroes) {

        console.log(`Hero: ${kvp.heroName}`);
        console.log(`level => ${kvp.level}`);
        console.log(`items => ${kvp.item}`);

    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);

