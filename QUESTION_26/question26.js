// create a js program to find area of 3 different circle with 3 different radius
function calculateArea(radius) {
    return Math.PI * radius * radius;
}

let radius1 = 5;
let radius2 = 10;
let radius3 = 15;

console.log("Area of circle with radius " + radius1 + " is: " + calculateArea(radius1));
console.log("Area of circle with radius " + radius2 + " is: " + calculateArea(radius2));
console.log("Area of circle with radius " + radius3 + " is: " + calculateArea(radius3));

