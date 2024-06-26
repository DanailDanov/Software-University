function solve(area, vol, input) {

    let coordinates = JSON.parse(input);
    const result = [];

    for (const points of coordinates) {
        result.push({
            area: area.call(points),
            volume: vol.call(points),
        })
    }

    return result;
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

function area() {
    return Math.abs(this.x * this.y);
};

console.log(solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
));