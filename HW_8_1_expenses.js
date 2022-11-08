let expenses = [
    { expenses: [2500, 6000, 7000, 6000, 3, 9, 700, 8000, 655, 5700, 340, 5390] },
    { expenses: [500, 1000, 90000, 80, 980, 9000, 10, 400, 3000, 250, 45000, 1200] },
    { expenses: [20, 200, 8900, 3300, 2300, 1009, 1200, 2000, 670, 900, 900, 7000] },
   ]; // Задаем масив объектов
   
expenses.forEach(function(expens, index){ // Перебираем объекты в массиве
    let filteredExpenses = []; // Заводим пустой массив для отфильтрованных значений массива каждого объекта 
    filteredExpenses = expens.expenses.filter(function(value){ // Фильтруем элементы массива в объекте
        return value > 1000;
    }) // Наполняем массив filteredExpenses отфильтрованными значениями
    let sumExpenses = filteredExpenses.reduce((a, b) => a + b); // Суммируем значения в отфильтрованном массиве
    console.log(`Сумма затрат выше 1000 в объекте с индексом ${index} равна ${sumExpenses}`); // Вывод суммы затрат >1000 по каждому объекту
})
            
   

   