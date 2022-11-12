const calculateBonus = require('./HW_9_2.js')
describe ('Тестирование функции calculateBonus', () =>{
    it('При сумме чисел  <= 50, бонус равен сумме этих чисел', () =>{
        expect(calculateBonus(10, 39)).toBe(49); // Проверка значения суммы 49
        expect(calculateBonus(10, 40)).toBe(50); // Проверка границы 50
    })
    it('При сумме чисел > 50, бонус равен 50', () =>{
        expect(calculateBonus(10, 41)).toBe(50); // Проверка границы 51
    })
    it('Тестирование отрицательных значений', () =>{
        expect(calculateBonus(-10, 60)).toBe(50); // Проверка границы 50
    })
    it('Тестирование дробных значений', () =>{
        expect(calculateBonus(-10.5, 60.5)).toBe(50); // Проверка границы 50
    })
})