class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error('Not enough space in the cellar.');
        }

        this.wines.push({ wineName, wineType, price, paid: false });

        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        let findWine = this.wines.find(w => w.wineName === wineName);

        if (findWine === undefined) {
            throw new Error(`${wineName} is not in the cellar.`);
        } else if (findWine.paid === true) {
            throw new Error(`${wineName} has already been paid.`);
        }

        findWine.paid = true;
        this.bill = price;

        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        let findWine = this.wines.find(w => w.wineName === wineName);
        let indexOfWine = this.wines.indexOf(findWine);
        if (findWine === undefined) {
            throw new Error("The wine, you're looking for, is not found.");
        } else if (findWine.paid === false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        this.wines.splice(indexOfWine, 1);

        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {

        if (wineType === undefined) {

            const result = [`You have space for ${this.space - this.wines.length} bottles more.`, `You paid ${this.bill}$ for the wine.`];
            let sorted = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));

            for (const element of sorted) {

                if (element.paid === false) {
                    result.push(`${element.wineName} > ${element.wineType} - Not Paid.`);
                } else {
                    result.push(`${element.wineName} > ${element.wineType} - Has Paid.`);
                }
            }
            return result.join('\n');
        } else {
            let findWineType = this.wines.find(x => x.wineType === wineType);

            if (findWineType === undefined) {
                throw new Error(`There is no ${wineType} in the cellar.`)
            } else {
                if (findWineType.paid === false) {
                    return `${findWineType.wineName} > ${findWineType.wineType} - Not Paid.`;
                } else {
                    return `${findWineType.bookName} > ${findWineType.wineType} - Has paid.`;
                }
            }
        }
    }
}

const selection = new WineSelection(5)

selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());








