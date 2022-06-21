// Solution 1
function verifyPalindromo(string) {
    if (!string) return "String inexistente!";

    return string.split("").reverse().join("") === string;
}

console.log(verifyPalindromo())

// Solution 2

function verifyPalindromo2(string) {
    if (!string) return "String inválida!";

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(verifyPalindromo2("gato"))