function rectangle(width, height, color) {


    let newColor = color.substring(0, 1).toUpperCase() + color.substring(1);
    color = newColor;

    const resultObject = {
        width,
        height,
        color,
        calcArea() {
            return width * height;
        }
    }

return resultObject;
}

let rect = rectangle(4, 5, 'red');

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
