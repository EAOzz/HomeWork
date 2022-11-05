const players = [
    {
        "id": 1,
        "name": "Ivan",
        "scorePoints": 4500
     },
    {
        "id": 2,
        "name": "Petr",
        "scorePoints": 3600
    },
    {
        "id": 3,
        "name": "Vadim",
        "scorePoints": 3433
    },
    {
        "id": 4,
        "name": "Olga",
        "scorePoints": 2356
    },
];  // Массив объектов с данными игроков
const scorePointsPlayers = []; // Задаем пустой массив

for (let player of players) {
    scorePointsPlayers.push(player.scorePoints);
   } // Создаем массив с очками игроков


let indexTopPlayer = 0; // Задаем переменную для поиска индекса игрока с наибольшим кол-вом очков
while (scorePointsPlayers[indexTopPlayer] != Math.max(...scorePointsPlayers)) {
    indexTopPlayer++
} // Поиск индекса игрока с наибольшим кол-вом очков

console.log(`Игрок с максимальным количеством очков ${players[indexTopPlayer].name}: ${players[indexTopPlayer].scorePoints} очков`); // Вывод игрока с наибольшим кол-во очков