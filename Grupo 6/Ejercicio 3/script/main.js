const numberArrays = (start, end, divisor) => {
    const divisibleNumbers = [];
    
    for (let i = start; i <= end; i++) {
        if (i % divisor === 0) {
            divisibleNumbers.push(i);
        }
    }

    return divisibleNumbers;
};

const startNumber = parseInt(prompt("Ingresa el primer número (inicio del rango):"), 10);
const endNumber = parseInt(prompt("Ingresa el segundo número (fin del rango):"), 10);
const divisorNumber = parseInt(prompt("Ingresa el divisor:"), 10); 

if (isNaN(startNumber) || isNaN(endNumber) || isNaN(divisorNumber) || divisorNumber === 0) {
    console.error("Por favor, ingresa solo números válidos y asegúrate de que el divisor no sea cero.");
} else {
    const result = numberArrays(startNumber, endNumber, divisorNumber);
    console.log(result);
}