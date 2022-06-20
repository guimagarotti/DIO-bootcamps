const numberContent = document.getElementById('currentNumber');
let count = 0;

function decrement() {
    count--
    numberContent.innerHTML = count;
    
    if (count < 0) {
        numberContent.style.color = 'red'
    }
}

function increment() {
    count++
    numberContent.innerHTML = count;
    
    if (count >= 0) {
        numberContent.style.color = 'black'        
    }
}
