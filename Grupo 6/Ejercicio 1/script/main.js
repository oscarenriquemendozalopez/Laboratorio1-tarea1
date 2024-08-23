const climbingmountain = (heights) => {
    if (heights.length < 2) {
        return false;
    } 
    
    for (let i = 1; i < heights.length; i++) {
        if (Math.abs(heights[i] - heights[i - 1]) > 5) {
            return false;
        }
    }

    return true;
};

const userInput = prompt("Ingresa las alturas de la montaña separadas por espacios:");

const heights = userInput.split(' ').map(Number);

if (heights.some(isNaN)) {
    console.error("por favor, ingresa solo números válidos.")
} else {
    if (climbingmountain(heights)) {
        console.log("La montaña es escalable.");
    } else  {
        console.log("La montaña no es escalable.");
    }
}