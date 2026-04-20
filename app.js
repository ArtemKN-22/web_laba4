const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

// Дані для списку завдань
let tasks = ["Опанувати JavaScript", "Опанувати Node.js"];
let completedTasks = ["Опанувати HTML та CSS", "Опанувати Git та GitHub"];

// --- ЗАВДАННЯ 5 та 6: "Привіт, мій друже!" ---
// Відкриється за адресою http://localhost:3000/hello
app.get('/hello', (req, res) => {
    res.send('<h1 style="text-align:center; margin-top:50px;">Привіт, мій друже!</h1>');
});

// --- ЗАВДАННЯ 6 (варіант JSON): Список завдань у форматі тексту ---
// Відкриється за адресою http://localhost:3000/tasks
app.get('/tasks', (req, res) => {
    res.json({ tasks, completedTasks });
});

// --- ЗАВДАННЯ 7: Візуальний Todo List  ---
// Відкриється на головній http://localhost:3000
app.get('/', (req, res) => {
    let html = `
    <body style="background-color: #cccccc; font-family: sans-serif; padding: 40px; display: flex; flex-direction: column; align-items: center;">
        <div style="background: white; padding: 20px; border-radius: 10px; width: 500px;">
            <h1 style="text-align: center;">Список завдань</h1>
            <form action="/add" method="POST" style="text-align: center;">
                <input type="text" name="newTask" placeholder="Введіть нове завдання" style="padding: 5px; width: 200px;">
                <button type="submit">Додати завдання</button>
            </form>
            <h3>Додані завдання</h3>
            ${tasks.map(t => `<p><input type="checkbox"> ${t}</p>`).join('')}
            <button>Виконати завдання</button>
            <h3>Виконані завдання</h3>
            ${completedTasks.map(t => `<p><input type="checkbox" checked disabled> <del>${t}</del></p>`).join('')}
        </div>
    </body>
    `;
    res.send(html);
});


app.post('/add', (req, res) => {
    if (req.body.newTask) tasks.push(req.body.newTask);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Сервер працює на http://localhost:${port}`);
});