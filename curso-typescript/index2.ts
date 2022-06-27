// Manipulando HTMLElements
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener ('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    
    console.log(i.value)
})


// Generic Types
function addEventList<T>(array: T[], valor: T) {
    return array.map(() => valor);
}

addEventList([1, 2, 3], 3);