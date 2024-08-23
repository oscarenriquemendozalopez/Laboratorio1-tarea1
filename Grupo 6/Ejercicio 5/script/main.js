const uniqueSort = nums => {
    return [...new Set(nums)].sort((a, b) => a - b); // Cambiado a 'Set'
};

const userInput = prompt("Ingresa los números separados por espacios:");

const numbers = userInput.split(' ').map(Number);

if (numbers.some(isNaN)) {
    console.error("Por favor, ingresa solo números válidos.");
} else {
    const result = uniqueSort(numbers);
    console.log(result);
}