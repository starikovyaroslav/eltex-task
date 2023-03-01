// Все возможные сиволы
const characterArray = "ABDEFGHIJKLMNOQRTUVWYZ0123456789+-_$~";
// массив для новой созданной строки
const newStringArray = [];
// запрос пользователю о длине строки
const N = prompt('Напишите количество символов');

// Функция наполняет массив случайными символами
const fillArrWithChar = (arr, N, characterArray) => {
    for (let index = 0; index < N; index++) {
        arr[index] = characterArray.charAt(Math.floor(Math.random() * characterArray.length));
    }
}

// функция запрашивает у пользователя ввод одного символа
const getChar = (possible) => {
    const char = prompt('Введите символ');
    // если произведена отмена ввода или введено пустое значени - повторный вызов функции
    if (char === '' || char === null) {
        alert('Давайте попробуем ещё раз');
        return getChar(possible);
    }
    // если введено больше одного символа - повторный вызов функции
    if (char.length > 1) {
        alert('Только один символ!');
        return getChar(possible);
    }
    // если введён недопустимый символ - повторный вызов функции
    if (possible.includes(char)) {
        return char;
    } else
        alert('Недопустимое значение');
    alert('Любые символы кроме  C, P, S и X');
    return getChar(possible);
}

// Замена букв в строке на символ
const replaceLetters = (array, char) => {
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        // Проверка - является ли символ цифрой
        if (isNaN(array[index])) {
            count++;
            array[index] = char;
        }
    }
    alert("Заменено: " + count);
}

// Замена цифр в строке на символ
const replaceNumbers = (array, char) => {
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        if (!isNaN(array[index])) {
            count++;
            array[index] = char;
        }
    }
    alert("Заменено: " + count);
}


// Вызов функции
(function main() {
    // Заполняем строку символами
    fillArrWithChar(newStringArray, N, characterArray);
    alert(newStringArray.join(''));
    console.log('Получилась строка: ' + newStringArray.join(''));
    // запрос пользователю на первый символ
    const firstCh = getChar(characterArray);
    console.log('Первый символ: ' + firstCh);
    // Замена букв
    replaceLetters(newStringArray, firstCh);
    console.log('Получилась строка: ' + newStringArray.join(''));
    // запрос пользователю на второй символ
    const secondCh = getChar(characterArray);
    console.log('Второй символ: ' + secondCh);
    // Замена цифр
    replaceNumbers(newStringArray, secondCh);
    console.log('Получилась строка: ' + newStringArray.join(''));
    alert(newStringArray.join(''));
})();

