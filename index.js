function func (num, degree) {
    if (degree === 1) {
        return num;
    }
    return num * func(num, --degree);
}
console.log(func(8,4));
console.log(8**4);
