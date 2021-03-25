let A = +prompt("Введите число A");
let B = +prompt("Введите число B");
let i = A + 1;
if (A < B) {
while (i++ < (B - 2)) {
if (i % 2 !=0) {
console.log(i);
i = i + 1;
}
}
}