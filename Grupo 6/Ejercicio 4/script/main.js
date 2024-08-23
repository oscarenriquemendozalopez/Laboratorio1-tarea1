const chainedlongestWord = str => {
    const words = str.split(' '); 
    let longestWord = ''; 

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word; 
        }
    }

    return longestWord; 
};

const userInput = prompt("Ingresa una cadena de texto:");

if (typeof userInput !== 'string' || userInput.trim() === '') {
    console.error("Por favor, ingresa una cadena de texto válida.");
} else {
    const result = chainedlongestWord(userInput); 
    console.log(result);
}