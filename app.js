const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


let tasks = [
    { id: 1, title: "Встановити Node.js", done: true },
    { id: 2, title: "Налаштувати Express", done: true },
    { id: 3, title: "Зробити 4 лабу", done: false }
];


app.get('/', (req, res) => {
    res.send('<h1>Привіт,  друже! Це 6 7 !</h1>');
});


app.get('/tasks', (req, res) => {
    res.json(tasks);
});


app.post('/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title || "Нове завдання",
        done: false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.listen(port, () => {
    console.log(`Сервер працює: http://localhost:${port}`);
});