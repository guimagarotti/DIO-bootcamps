const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

function mapArray(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> maca', mapArray(nums, maca));
console.log('this -> laranja', mapArray(nums, laranja));
