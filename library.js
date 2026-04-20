const express = require('express');
const app = express();
const port = 3001; 


const books = [
    { id: 1, title: "Вогонь і кров", author: "Джордж Р. Р. Мартін", status: "в наявності" },
    { id: 2, title: "Чистий код", author: "Роберт Мартін", status: "видано" },
    { id: 3, title: "Node.js для початківців", author: "Артем Савчук", status: "в наявності" }
];

app.get('/', (req, res) => {
    res.send('<h1>Ласкаво просимо до місцевої бібліотеки!</h1><p>Перейдіть на /books щоб побачити каталог.</p>');
});


app.get('/books', (req, res) => {
    res.json(books);
});


app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).send('Книгу не знайдено');
    res.json(book);
});

app.listen(port, () => {
    console.log(`Сайт бібліотеки працює: http://localhost:${port}`);
});