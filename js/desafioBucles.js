
//Desafío Bucles
console.log("");
console.log("Números impares entre 1 y 20 con bucle FOR");

for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        console.log("Número impar: " + i);
    }
}

console.log("");
console.log("Números impares entre 1 y 20 con bucle WHILE");

let a = 1;
while (a <= 20) {
    if (a % 3 === 0) {
        console.log("Número impar: " + a);
    }
    a++;
}

console.log("");
console.log("Disminuir con múltiplo de 3 entre 100 y 0 con bucle FOR");

for (let i = 100; i >= 0; i--) {
    if (i % 3 === 0) {
        console.log("Número decrementado: " + i);
    }
}

console.log("");
console.log("Disminuir con múltiplo de 3 entre 100 y 0 con bucle WHILE");

let b = 100;
while (b >= 0) {
    if (b % 3 === 0) {
        console.log("Número decrementado: " + b);
    }
    b--;
}

console.log("");
console.log("Muestra la secuencia '4, 2.5, 1, -0.5, -2, -3.5' con FOR");

let numFor = "";
for (let i = 4; i >= -3.5; i -= 1.5) {
    if (i !== -3.5) {
        numFor = numFor + i + ", ";
    }
    else {
        numFor += i;
    }
}

console.log("Resultado secuencia: " + numFor);

console.log("");
console.log("Muestra la secuencia '4, 2.5, 1, -0.5, -2, -3.5' con WHILE");

let numWhile = "";
let c = 4;
while (c >= -3.5) {
    if (c !== -3.5) {
        numWhile = numWhile + c + ", ";
    }
    else {
        numWhile += c;
    }
    c-=1.5;
}

console.log("Resultado secuencia: " + numWhile);

console.log("");
console.log("Sigma; suma total desde 1 hasta 100 con FOR");

let sumFor = 0;
for (let i = 1; i <= 100; i++) {
    sumFor += i;
}

console.log("El total de la suma es: " + sumFor);

console.log("");
console.log("Sigma; suma total desde 1 hasta 100 con WHILE");

let sumWhile = 0;
let d = 1;
while (d <= 100) {
    sumWhile += d;
    d++;
}

console.log("El total de la suma es: " + sumWhile);

console.log("");
console.log("Factorial entre 1 y 12 con FOR");

let productFor = 1;
for (let i = 1; i <= 12; i++) {
    productFor *= i;
}

console.log("El resultado factorial es: " + productFor);

console.log("");
console.log("Factorial entre 1 y 12 con WHILE");

let productWhile = 1;
let e = 1;
while (e <= 12) {
    productWhile *= e;
    e++;
}

console.log("El resultado factorial es: " + productWhile);
console.log("");