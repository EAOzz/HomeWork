const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b; 
    debugger; // присвоены значения переменнным a и b, рассчитано значение переменной sum
    sum > 50 ? (bonus = 50) : (bonus = sum);
    debugger; // проверены условия, расчитано значение переменной bonus
    return bonus;
    };
console.log(calculateBonus(5,10));