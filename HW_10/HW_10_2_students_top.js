function topStudents (studentsScore){
    let newStudentScore = []; // Создаем массив объектов, без лишних группировок в массивы

    studentsScore.forEach(function (array) { //перебираем массивы объектов
      array.forEach(function (students) {
        newStudentScore.push(students);
      });
    });
    
    let sortedArrey = newStudentScore.sort((a, b) => { // Создаем отсортированный по убыванию очков массив объектов
      return b.score - a.score;
    });
    
    
    let i = 0; // индекс элемента массива
    let studentsTop = []; // Массив студентов с наибольшим кол-вом очков
    studentsTop.push(sortedArrey[i]); // добавляем первого студента с максимальным кол-вом очков
    console.log(`Поздравляем студента ${studentsTop[0].name} набравшего ${studentsTop[0].score} баллов`); // Вывод в консоль первого студента набравшего максимальное кол-во баллов
     
    while (sortedArrey[i].score == sortedArrey[i + 1].score) { // Сравниваем в цикле кол-во баллов у студентов
      studentsTop.push(sortedArrey[i+1]); // добавляем студентов с максимальным
      console.log(`Поздравляем студента ${studentsTop[i + 1].name} набравшего ${studentsTop[i + 1].score} баллов`); // Вывод в консоль последующих студентов с максимальным кол-вом баллов
      i++;
    }
    return studentsTop;
}

module.exports = topStudents;

