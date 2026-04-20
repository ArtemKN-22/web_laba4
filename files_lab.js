const fs = require('fs');

// Записуємо дані у файл 
fs.writeFileSync('message.txt', 'ДА ?! Node.js працює з файлами.');
console.log('Файл створено!');

// Читаємо дані 
const content = fs.readFileSync('message.txt', 'utf8');
console.log('Вміст файлу:', content);