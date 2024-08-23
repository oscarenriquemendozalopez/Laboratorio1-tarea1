 const unrepeated = str => {
    const seen = new Set(); // Cambiado a 'Set'
    let result = '';

    for (const char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }

    return result;
};

const userInput = prompt("Ingresa una palabra o una oración:"); // Cambiado a 'prompt'

if (typeof userInput !== 'string' || userInput.trim() === '') {
    console.error("Por favor, ingresa una cadena de texto válida.");
} else {
    const result = unrepeated(userInput);
    console.log(result);
}