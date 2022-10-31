function trapezoidArea(input) {
let b1 = Number(input[0]);
let b2 = Number(input[1]);
let h = Number(input[2]);
let area = (b1+b2)*h/2
let area1 = area.toFixed(2);
console.log(area1);
}
trapezoidArea([8,13,7])