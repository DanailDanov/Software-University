class FootballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        const result = [];
        while (footballPlayers.length > 0) {
            let [playerName, age, playerValue] = footballPlayers.shift().split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            if (!this.invitedPlayers.includes(playerName)) {
                this.invitedPlayers.push({ playerName, age, playerValue });
                result.push(playerName);
            }

            let findPlayer = this.invitedPlayers.find(p => p.playerName === playerName);

            if (findPlayer.playerValue < playerValue) {
                findPlayer.playerValue = playerValue;
            }
        }

        return `You successfully invite ${result.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let [playerName, playerOffer] = selectedPlayer.split('/');

        let findPlayer = this.invitedPlayers.find(p => p.playerName === playerName);

        if (findPlayer === undefined) {
            throw new Error(`${playerName} is not invited to the selection list!`);
        } else if (playerOffer < findPlayer.playerValue) {
            throw new Error(`The manager's offer is not enough to sign a contract with ${playerName}, ${findPlayer.playerValue - playerOffer} million more are needed to sign the contract!"`);
        }

        findPlayer.playerValue = 'Bought';

        return `Congratulations! You sign a contract with ${playerName} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        let findPlayer = this.invitedPlayers.find(p => p.playerName === name);

        if (findPlayer === undefined) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        const diffrence = age - findPlayer.age;

        if (findPlayer.age < age) {
            if (diffrence < 5) {
                return `${name} will sign a contract for ${diffrence} years with ${this.clubName} in ${this.country}!`;
            } else if (diffrence > 5) {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else if (findPlayer.age >= age) {
            return `${name} is above age limit!`
        }
    }

    transferWindowResult() {
        const result = ["Players list:"];

        this.invitedPlayers
            .sort((a, b) => a.playerName.localeCompare(b.playerName))
            .forEach((p) => {
                result.push(`Player ${p.playerName}-${p.playerValue}`)
            })

        return result.join('\n');
    }
}

let fTeam = new FootballTeam("Barcelona", "Spain");

console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());



