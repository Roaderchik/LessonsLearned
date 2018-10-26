/*
Программа которая асинхронно читает файл и выводит количество,строк (\n) содержащихся в файле, в консоль (stdout), точно так же, как это сделала бы команда cat file | wc -l.
Полный путь до файла будет передан в качестве первого аргумента командной   строки.
*/
var fs = require('fs');
//console.log(process.argv[2]);

fs.readFile(process.argv[2], 'utf8',  function doneReading(err, fileContents) {
   // console.log(err,(err!==true));
    if (err!==true)
    {
        console.log( fileContents.split('\n').length - 1);
    }    
  });