function addToDisplay(value) {
    document.calculator.display.value += value;
}

function clearDisplay() {
    document.calculator.display.value = '';
}

function calculate() {
    try {
        let res = eval(document.calculator.display.value);
        res = parseFloat(res.toFixed(2));
        document.calculator.display.value = res;
    } catch (e) {
        document.calculator.display.value = 'Error';
    }
}
