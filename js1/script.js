class Calculator {
    constructor() {
        this.expression = '';
    }

    appendToDisplay(value) {
        this.expression += value;
        this.updateDisplay();
    }

    clearDisplay() {
        this.expression = '';
        this.updateDisplay();
    }

    calculateResult() {
        try {
            const result = eval(this.expression);
            document.getElementById('display').value = result;
        } catch (error) {
            document.getElementById('display').value = 'Erro';
        }
    }

    updateDisplay() {
        document.getElementById('display').value = this.expression;
    }
}

const calculator = new Calculator();
