// Дан массив целых чисел <array> и целое число <k>. Нужно вывести все уникальные пары чисел из массива, сумма которых равна k.
// OUT: >> [[1, 4], [2, 3]]

// аргумент написан с большой буквы, опечатка?
function searchPairs(array, N) {
    // удаляем повторяющиеся значения, при необходимости
    const filtered = array.filter(
        (item, index) => array.indexOf(item) === index
    );

    var result = [];

    filtered.forEach((item, index) => {
        for (i = index + 1; i < filtered.length; i++) {
            if (item + filtered[i] == N) result.push([item, filtered[i]]);
        }
    });
    return result;
}

const arr = [1, 2, 6, 5, 3, 4, 7, 8, 1, 4];

const k = 5;

console.log(searchPairs(arr, k));
