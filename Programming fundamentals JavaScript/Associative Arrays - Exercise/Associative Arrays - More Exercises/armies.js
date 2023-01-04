function armies(input) {

    const armiesInformation = {};

    for (const elements of input) {

        if (elements.includes('arrives')) {

            let leaderName = elements.split(' arrives').join('');

            armiesInformation[leaderName] = {
                armiesNameAndCount: {},
                totalArmyCount: 0,
            };

        } else if (elements.includes(':')) {

            let line = elements.split(': ');

            let leaderName = line.shift();
            let armyInfo = line.shift().split(', ');
            let armyName = armyInfo[0];
            let armyCount = Number(armyInfo[1]);

            if (armiesInformation.hasOwnProperty(leaderName)) {
                armiesInformation[leaderName].armiesNameAndCount[armyName] = armyCount;
                armiesInformation[leaderName].totalArmyCount += armyCount;
            }

        } else if (elements.includes('+')) {
            let line = elements.split(' + ');
            let armyName = line[0];
            let armyCount = Number(line[1]);

            for (const foundArmy of Object.entries(armiesInformation)) {
                let leader = foundArmy[0];
                for (const key in armiesInformation[leader]) {
                    if (armiesInformation[leader][key].hasOwnProperty(armyName)) {
                        armiesInformation[leader].armiesNameAndCount[armyName] += armyCount;
                        armiesInformation[leader].totalArmyCount += armyCount;
                    }
                }
            }
        } else if (elements.includes('defeated')) {
            let defeatedLeader = elements.split(' defeated').join('');

            if (armiesInformation.hasOwnProperty(defeatedLeader)) {
                delete armiesInformation[defeatedLeader];
            }
        }
    }

    let sorted = Object.entries(armiesInformation).sort((a, b) => b[1].totalArmyCount - a[1].totalArmyCount);

    for (const element of sorted) {
        console.log(`${element[0]}: ${element[1].totalArmyCount}`);
        let sorted = Object.entries(element[1].armiesNameAndCount).sort((a, b) => b[1] - a[1]);
        for (const line of sorted) {
            console.log(`>>> ${line[0]} - ${line[1]}`);
        }
    }
}

armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);