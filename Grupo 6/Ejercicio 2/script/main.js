const numberDigits = num => {
    return num.toString().split('').map(Number).map(digit => digit ** 2);
};

const userInput = prompt("Ingresa un número:");

const numberInput = Number(userInput);

if (isNaN(numberInput) || userInput.trim() === '') {
    console.error("Por favor, ingresa un número válido.");
} else {
    const result = numberDigits(numberInput);
    console.log(result);
}