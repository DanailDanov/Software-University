function heroicInventory(data) {

    let result = [];
    let items = '';
    for (const elements of data) {

        let [name, level, items] = elements.split(' / ');
        level = Number(level);

        items = items ? items.split(', ') : [];
        result.push({ name, level, items })
    }

    console.log(JSON.stringify(result));
}

heroicInventory(['Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);