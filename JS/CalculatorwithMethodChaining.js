// https://leetcode.com/problems/calculator-with-method-chaining/description/
// Спроектируйте Calculator класс. Класс должен предоставлять математические операции сложения, вычитания, умножения, деления и возведения в степень. Он также должен позволять выполнять последовательные операции с использованием цепочки методов. CalculatorКонструктор класса должен принимать число, которое служит начальным значением result.
// Ваш Calculator класс должен иметь следующие методы:
// add- Этот метод добавляет указанное число valueк  resultи возвращает обновленное значение Calculator.
// subtract- Этот метод вычитает заданное число value из  resultи возвращает обновленное значение Calculator.
// multiply- Этот метод умножает result  на указанное число valueи возвращает обновленное значение Calculator.
// divide- Этот метод делит resultна заданное число valueи возвращает обновленное Calculator. Если переданное значение равно 0, должна быть выдана ошибка "Division by zero is not allowed".
// power- Этот метод возводит в  resultстепень заданного числа valueи возвращает обновленное значение Calculator.
// getResult- Этот метод возвращает result.
// Решения, находящиеся в пределах   фактического результата, считаются правильными.10-5

class Calculator {
    constructor(value) {
        this.result = value;
    }
    add(value){
        this.result += value;
        return this;
    }
    subtract(value){
        this.result -= value;
        return this;
    }
    multiply(value) {
        this.result *= value;
        return this;
    }
    divide(value) {
        if(value === 0) throw "Division by zero is not allowed";
        this.result /= value;
        return this;
    }
    power(value) {
        this.result **= value;
        return this;
    }
    getResult() {
        return this.result;
    }
}
