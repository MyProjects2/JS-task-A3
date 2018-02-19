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
function checkWord(string){
    string = string.toLowerCase();
    string = string.split(' ').join('');
    string = string.split('ё').join('е');
    string = string.split('ъ').join('ь');
    string = string.split(',').join('');
    string = string.split('.').join('');
    string = string.split('!').join('')
    string = string.split('?').join('');
    
    var newString = "";
    for (var i = string.length - 1; i >= 0; i--) { 
    newString += string[i];
    }

    if(string === newString){
        return true;
    }
    else {
        return false;
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
