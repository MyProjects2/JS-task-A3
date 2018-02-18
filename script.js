'use strict'
/*Написать чистую функцию, проверяющую, что переданная ей фраза является палиндромом.
(Палиндром - это фраза, которая слева направо читается так же как справа налево)
Массивы при решении не использовать.
При проверке должны игнорироваться:
 - регистр букв+;
 - пробелы+;
 - знаки препинания;
 - мягкие и твёрдые знаки;
 - разница между буквами "е" и "ё".*/

var string = prompt("Напишите слово");
function checkWord(str){
    string = string.toLowerCase();

    for (var i = 0; i<= string.length; i++){
        string = string.replace(' ', '');
        string = string.replace('ё', 'е');
        string = string.replace('ь', 'ъ');
        string = string.replace('ъ', 'ь');
        string = string.replace(',', '');
        string = string.replace('.', '');
        string = string.replace('!', '');
        string = string.replace('?', '');
    }

    var newString = "";
    for (var i = string.length - 1; i >= 0; i--) { 
    newString += string[i];
    }

    if(string === newString){
        return 'Слово - палидром';
    }
    else {
        return 'Слово не палидром';
    }
}
alert(checkWord(string));


























//var array = userInput.split('');
// for(var i = 0; i< vowels.length; i++){
//     var pos = 0;
//     var arr = [];
//     while (true) {
//         var found = array.indexOf(vowels[i], pos);
//         if (found == -1) break;
//         alert(found);
//         arr.push(pos);
//         console.log(arr);
//         pos = found +1;
//     }
// }
//console.log(array);
