let expenses = [
    { expenses: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { expenses: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { expenses: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
   ]; // Задаем масив объектов
   
expenses.forEach(function(expens, index){ // Перебираем объекты в массиве
    expens.expenses.forEach(function(value, index){ // Перебираем элементы в массиве в объекте
        if (value < 1000) { // Проверяем условие затраты < 1000
            let myDate = new Date // Определение класса переменной
            myDate.setMonth(index); // При выполнении условия записывает индекс элемента как месяц
            console.log(`Expenses in ${myDate.toDateString().slice(4,7)} is ${value}`) // Вывод месяцов с затратами < 1000
        }
    })
})