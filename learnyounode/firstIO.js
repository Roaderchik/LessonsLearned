/*
Программа которая синхронно читает файл и выводит количество,строк (\n) содержащихся в файле, в консоль (stdout), точно так же, как это сделала бы команда cat file | wc -l.
Полный путь до файла будет передан в качестве первого аргумента командной   строки.
*/

var fs = require('fs');

var arg = process.argv.slice(2);
//console.log(arg,arg[0]);
var buf = fs.readFileSync(arg[0]);
var str = buf.toString();
var cnt= str.split('\n').length-1;
console.log(cnt);
// или все в одну строчку
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1